import { Component, OnInit } from '@angular/core';
import { Person } from "../../models/person";
import { ApiService } from "../../services/api.service";
import {ConfirmationService, FilterMatchMode, PrimeNGConfig} from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Department } from "../../models/department";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  title: string = "All persons";
  personDialog: boolean = false;
  persons: Person[] = [];
  departments: Department[] = [];
  person: Person;
  selectedPersons: Person[] = [];
  submitted: boolean = false;
  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private primeConfig:PrimeNGConfig) { }
  ngOnInit() {

    this.primeConfig.filterMatchModeOptions = {text: [], numeric: [
      FilterMatchMode.LESS_THAN,FilterMatchMode.GREATER_THAN,FilterMatchMode.EQUALS
      ], date: []};

    // method getAllPersons
    this.getAllPersonne()

    //method getAllDepartment
    this.apiService.getAllDepartment().subscribe({
      next: data => {
        this.departments = data as any;
      },
      error: err => {
        console.log(err)
      }
    });
  }

  getAllPersonne(): void {
    this.apiService.getAllPersons().subscribe({
      next: data => {
        this.persons = data;
      },
      error: err => {
        console.log(err)
      }
    });
  }

  openNew() {
    this.person = {};
    this.submitted = false;
    this.personDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected persons ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.persons = this.persons.filter(val => !this.selectedPersons.includes(val));
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Persons Deleted', life: 3000});
        }
    });
  }

  editPerson(person: Person) {
    this.person = { ...person };
    this.personDialog = true;
  }

  deleteProduct(person: Person) {
    console.log(person);
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + person.firstname + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.apiService.deletePerson(person).subscribe({
          next: data => {
            console.log(data)
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Person Deleted', life: 3000 });
            this.getAllPersonne()
          },
          error: err => {
            console.log(err)
          }
        });
      }
    });
  }

  hideDialog() {
    this.personDialog = false;
    this.submitted = false;
  }

  savePerson() {
    this.submitted = true;

    if (this.person.firstname!.trim() && this.person.lastname!.trim() && this.person.age && this.person.department) {
      if (this.person.id) {
        this.apiService.updatePerson(this.person).subscribe({
          next: data => {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Person Updated', life: 3000 });
            this.getAllPersonne();
          },
          error: error => {
            console.log(error);
          }
        })
      }
      else {
        console.log(this.person)
        this.apiService.createPerson(this.person).subscribe({
          next: data => {
            console.log(data);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Person Created', life: 3000 });
            this.getAllPersonne();
          },
          error: error => {
            console.log(error);
          }
        })
      }

      this.persons = [...this.persons];
      this.personDialog = false;
      this.person = {};
    }
  }


  protected readonly event = event;
}

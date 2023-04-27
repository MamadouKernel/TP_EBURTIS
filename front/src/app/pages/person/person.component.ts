import { Component, OnInit } from '@angular/core';
import { ConfirmationService, FilterMatchMode, MessageService, PrimeNGConfig } from 'primeng/api';
import { Departement } from 'src/app/domain/departement';
import { Person } from 'src/app/domain/person';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  personDialog: boolean = false;
  persons: Person[] = [];
  departments: Departement[] = [];
  person!: Person;
  selectedPersons: Person[] = [];
  submitted: boolean = false;

  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private primeConfig:PrimeNGConfig) {}

  ngOnInit():void{
    this.primeConfig.filterMatchModeOptions = {text: [], numeric: [
      FilterMatchMode.LESS_THAN,
      FilterMatchMode.GREATER_THAN,
      FilterMatchMode.EQUALS,
      FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
      FilterMatchMode.GREATER_THAN_OR_EQUAL_TO,
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
      message: 'Êtes-vous sûr de vouloir supprimer les personnes sélectionnées?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.persons = this.persons.filter(val => !this.selectedPersons.includes(val));
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Les personnes supprimées', life: 3000});
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
      message: 'Etes-vous sûr que vous voulez supprimer ' + person.firstname + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.apiService.deletePerson(person).subscribe({
          next: data => {
            console.log(data)
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Personne supprimée', life: 3000 });
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
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Personne mise à jour', life: 3000 });
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
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Personne créée', life: 3000 });
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

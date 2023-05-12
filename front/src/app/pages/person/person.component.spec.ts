import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from "@angular/common/http/testing";
import { PersonComponent } from './person.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';
import { of } from 'rxjs';


describe('PersonComponent', () => {
	let component: PersonComponent;
	let fixture: ComponentFixture<PersonComponent>;
	const apiServiceStub = jasmine.createSpyObj('ApiService',['updatePerson', 'getAllPersons', 'getAllDepartment']);
	const messageServiceStub = jasmine.createSpyObj('MessageService',['add'] );
	const confirmationServiceStub = jasmine.createSpyObj('ConfirmationService',['confirm'] );

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				MessageService,
				ConfirmationService,
				{ provide: ApiService, useValue: apiServiceStub},
			],
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [ PersonComponent ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(PersonComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		spyOn(component, 'getAllPersonne');
		const person = {
			id: 2,
			firstname: 'Mamadou K',
			lastname: 'KONATE',
			age:26
		};
		apiServiceStub.getAllDepartment.and.returnValue(of([]));
		apiServiceStub.getAllPersons.and.returnValue(of([person]));
		fixture.detectChanges();

		expect(component).toBeTruthy();
	});

	it('should save person',  () =>{
		const person = {
			id: 2,
			firstname: 'Mamadou K',
			lastname: 'KONATE',
			age:26,
			departement: {}
		};
		spyOn(component, 'getAllPersonne');
		apiServiceStub.updatePerson.and.returnValue(of(person));

		// const submit = true;
		component.person = person;
		// component.submitted = submit;
		//apiServiceStub.updatePerson.and.returnValue(of(component.person));
		component.savePerson();
		//expect(component.getAllPersonne).toHaveBeenCalled();
		expect(apiServiceStub.updatePerson).toHaveBeenCalledWith(person);

	});


	it('should delete person',  () =>{
		const person = {
			id: 2,
			firstname: 'Mamadou K',
			lastname: 'KONATE',
			age:26
		};
		spyOn(component, 'getAllPersonne')

		component.person = person;
		apiServiceStub.updatePerson.and.returnValue(of(component.person));
		component.deleteProduct(person);
		expect(component.getAllPersonne).toHaveBeenCalled();
		expect(apiServiceStub.updatePerson).toHaveBeenCalledWith(person.id, person);
	});

});

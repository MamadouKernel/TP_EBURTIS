package com.eburtis.tp.utils;

import com.eburtis.tp.domain.department.Department;
import com.eburtis.tp.domain.person.Person;

import java.util.Date;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class PersonMb {
    private Long id;
    private String firstName;
    private String lastName;
    private Date createdAt;
    private Date updatedAt;
    private int age;

    private Department department;

    public PersonMb setId(Long id) {
        this.id = id;
        return this;
    }

    public PersonMb setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    public PersonMb setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }

    public PersonMb setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public PersonMb setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public PersonMb setAge(int age) {
        this.age = age;
        return this;
    }

    public PersonMb setDepartment(Department department) {
        this.department = department;
        return this;
    }

    public Person build() {
        Person pers = mock(Person.class);
        when(pers.getId()).thenReturn(this.id);
        when(pers.getFirstName()).thenReturn(this.firstName);
        when(pers.getLastName()).thenReturn(this.lastName);
        when(pers.getAge()).thenReturn(this.age);
        when(pers.getCreatedAt()).thenReturn(this.createdAt);
        when(pers.getUpdatedAt()).thenReturn(this.updatedAt);
        when(pers.getDepartment()).thenReturn(this.department);
        return pers;


    }
}

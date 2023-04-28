package com.eburtis.tp.utils;

import com.eburtis.tp.domain.department.Department;
import com.eburtis.tp.domain.department.DepartmentVo;
import com.eburtis.tp.domain.person.PersonVo;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class PersonVoMb {

    private Long id;
    private String firstname;
    private String lastname;
    private int age;
    private Department department;

    public PersonVoMb setId(Long id) {
        this.id = id;
        return this;
    }
    public PersonVoMb setFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }
    public PersonVoMb setLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }
    public PersonVoMb setAge(int age) {
        this.age = age;
        return this;
    }
    public PersonVoMb setDepartment(Department department) {
        this.department = department;
        return this;
    }

    public PersonVo build() {
        PersonVo PersVo = mock(PersonVo.class);
        when(PersVo.getId()).thenReturn(this.id);
        when(PersVo.getFirstname()).thenReturn(this.firstname);
        when(PersVo.getLastname()).thenReturn(this.lastname);
        when(PersVo.getAge()).thenReturn(this.age);
        when(PersVo.getDepartment()).thenReturn(this.department);
        return PersVo;
    }

}

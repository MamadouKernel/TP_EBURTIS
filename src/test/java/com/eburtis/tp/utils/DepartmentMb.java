package com.eburtis.tp.utils;

import com.eburtis.tp.domain.department.Department;


import java.util.Date;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class DepartmentMb {
    private Long id;
    private String code;
    private String designation;
    private Date createdAt;
    private Date updatedAt;

    public DepartmentMb setId(Long id) {
        this.id = id;
        return this;
    }
    public DepartmentMb setCode(String code) {
        this.code = code;
        return this;
    }
    public DepartmentMb setDesignation(String designation) {
        this.designation = designation;
        return this;
    }

    public Department build() {
        Department dept = mock(Department.class);
        when(dept.getId()).thenReturn(this.id);
        when(dept.getCode()).thenReturn(this.code);
        when(dept.getDesignation()).thenReturn(this.designation);
        when(dept.getCreatedAt()).thenReturn(this.createdAt);
        when(dept.getUpdatedAt()).thenReturn(this.updatedAt);
        return dept;
    }
}

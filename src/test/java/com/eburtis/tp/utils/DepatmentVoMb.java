package com.eburtis.tp.utils;

import com.eburtis.tp.domain.department.DepartmentVo;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class DepatmentVoMb {
    private Long id;
    private String code;
    private String designation;

    public DepatmentVoMb setId(Long id) {
        this.id = id;
        return this;
    }

    public DepatmentVoMb setCode(String code) {
        this.code = code;
        return this;
    }

    public DepatmentVoMb setDesignation(String designation) {
        this.designation = designation;
        return this;
    }

    public DepartmentVo build() {
        DepartmentVo departVo = mock(DepartmentVo.class);
        when(departVo.getId()).thenReturn(id);
        when(departVo.getCode()).thenReturn(code);
        when(departVo.getDesignation()).thenReturn(designation);
        return departVo;
    }
}

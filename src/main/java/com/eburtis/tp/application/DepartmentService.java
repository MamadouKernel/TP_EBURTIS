package com.eburtis.tp.application;

import com.eburtis.tp.domain.department.Department;
import com.eburtis.tp.domain.department.DepartmentVo;
import org.springframework.stereotype.Service;

import java.util.List;

/*******************************************************************
 * Department service
 * @author  Konate
 * @version 1.0
 *****************************************************************/
@Service
public interface DepartmentService {

    Department save(Department departmentVo);

    DepartmentVo findById(Long id);

    List<DepartmentVo> findAll();

    Department updateDepartment(Long id, DepartmentVo departmentVo);

    void delete(Long id);
}

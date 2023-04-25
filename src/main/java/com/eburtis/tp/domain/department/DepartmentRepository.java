package com.eburtis.tp.models.department;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/*******************************************************************
 * Department repository
 * @author  Konate
 * @version 1.0
 *****************************************************************/
@Repository
public interface DepartmentRepository extends  JpaRepository<Department,Long> {
}

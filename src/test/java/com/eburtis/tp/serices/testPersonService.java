package com.eburtis.tp.serices;

import com.eburtis.tp.application.PersonService;
import com.eburtis.tp.domain.department.Department;
import com.eburtis.tp.domain.department.DepartmentRepository;
import com.eburtis.tp.domain.department.DepartmentVo;
import com.eburtis.tp.domain.person.Person;
import com.eburtis.tp.domain.person.PersonRepository;
import com.eburtis.tp.domain.person.PersonVo;
import com.eburtis.tp.utils.DepartmentMb;
import com.eburtis.tp.utils.DepatmentVoMb;
import com.eburtis.tp.utils.PersonMb;
import com.eburtis.tp.utils.PersonVoMb;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class testPersonService {

   @Mock
   private PersonRepository personRepository;

    @Mock
    private DepartmentRepository departmentRepository;

   @InjectMocks
    private PersonService personService;

   //create department et person
    //create department
    Long id_department = 1L;
    private Person person;
    private Department depat;

    private PersonVo personVo;

    @Before
    public void setup(){
        depat = new DepartmentMb()
                .setId(id_department)
                .setCode("D1")
                .setDesignation("Direction")
                .build();

        //create person
        person = new PersonMb()
                .setId(1L)
                .setFirstName("Konate")
                .setLastName("Mamadou")
                .setAge(190)
                .setDepartment(depat)
                .build();

        //create personVo
        personVo = new PersonVoMb()
                .setId(1L)
                .setFirstname("Konate")
                .setLastname("Mamadou")
                .setAge(590)
                .setDepartment(depat)
                .build();
    }
   @Test
    public void testCreatePerson(){
    when(departmentRepository.findById(id_department)).thenReturn(Optional.of(depat));
    when(personRepository.save(Mockito.any(Person.class))).thenReturn(person);
     PersonVo pVo = personService.save(personVo);
     assertNotNull(pVo);


   }

}

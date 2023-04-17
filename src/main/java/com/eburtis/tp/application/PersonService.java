package com.eburtis.tp.application;

import com.eburtis.tp.models.person.Person;
import com.eburtis.tp.models.person.PersonVo;


import java.util.List;


/*******************************************************************
 * Person Service
 * @author  Konate
 * @version 1.0
 *****************************************************************/

public interface PersonService  {

    PersonVo save(PersonVo person);

    PersonVo findById(Long id);

    List<PersonVo> findAll();

    Person updatePerson(Long idPerson, PersonVo person);

    void delete(Long id);
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../domain/person';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  private urlServeurApi = environment.urlServiceApi;

  httpHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT',
      'Accept': 'application/json'
    });
  };

  getAllPersons():Observable<Person[]> {
    return this.http.get<Person[]>(this.urlServeurApi + '/person',{headers : this.httpHeaders()});
  }

  getAllDepartment() : Observable<any[]>{
    return this.http.get<any[]>(this.urlServeurApi + '/department',{headers : this.httpHeaders()});
  }

  createPerson(data: any): Observable<Person> {
    console.log("service log");
    console.log(data);
    let datas = JSON.stringify({
      "firstname" : data.firstname,
      "lastname": data.lastname,
      "age": data.age,
      "department": {"id": data.department}
    });
    return this.http.post<any>(this.urlServeurApi + '/person',
      datas,
      {headers : this.httpHeaders()}
    );
  }

  updatePerson(data:Person):Observable<Person> {
    let datas = JSON.stringify({
      "firstname" : data.firstname,
      "lastname": data.lastname,
      "age": data.age,
      "department": {"id": data.department}
    });
    console.log(datas)
    return this.http.put(this.urlServeurApi + '/person/'+data.id, datas ,{headers : this.httpHeaders()});
  }

  deletePerson(person: Person):Observable<Person> {
    console.log("service log")
    console.log(person)
    return this.http.delete(this.urlServeurApi + '/person/'+person.id,{headers : this.httpHeaders()});
  }

}

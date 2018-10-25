import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DepartmentsAndCitiesService{

    constructor(private http: HttpClient){}

}
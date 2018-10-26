import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DepartmentsAndCitiesService {

    constructor(private http: HttpClient) { }

    crearRegistroODS(bodyRequest: any) {
        return this.http.post<any>('http://localhost:8080/api/personas', bodyRequest);
    }

    getCiudades(idDpto: number) {
        return this.http.get<any>('http://localhost:8080/api/ciudades?idDpto=' + idDpto);
    }

    getDepartamentos() {
        return this.http.get<any>('http://localhost:8080/api/departamentos');
    }

    getTiposIdentificacion() {
        return this.http.get<any>('http://localhost:8080/api/tipos-identificacion');
    }

    getNivelesEducacion() {
        return this.http.get<any>('http://localhost:8080/api/niveles-educacion');
    }

}
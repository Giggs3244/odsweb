import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MiscellaneousService {

  constructor(private http: HttpClient) { }

  getVotosObjetivosByNivelEducacion(idEducacion: number) {
    return this.http.get<any>('http://localhost:8080/api/votos-objetivos-nivel-educacion?idEducacion=' + idEducacion);
  }

  getVotosObjetivosBySexo(sexo: string) {
    return this.http.get<any>('http://localhost:8080/api/votos-objetivos-sexo?sexo=' + sexo);
  }

  getVotosObjetivosByEdad(edad: number) {
    return this.http.get<any>('http://localhost:8080/api/votos-objetivos-edad?edad=' + edad);
  }

  getCantidadSexo() {
    return this.http.get<any>('http://localhost:8080/api/cantidad-sexo');
  }

  getCantidadNivelEducacion() {
    return this.http.get<any>('http://localhost:8080/api/cantidad-nivel-educacion');
  }

  getCantidadIDH() {
    return this.http.get<any>('http://localhost:8080/api/cantidad-idh');
  }

  getCantidadVotosObjetivos() {
    return this.http.get<any>('http://localhost:8080/api/cantidad-votos');
  }

  getNivelesEducacion() {
    return this.http.get<any>('http://localhost:8080/api/niveles-educacion');
}

}

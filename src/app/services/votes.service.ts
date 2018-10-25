import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VotesService {

  constructor(private http: HttpClient){}

  getVotesObjectives() {
    return this.http.get<any>('http://localhost:8080/api/votos-objetivos');
  }

}

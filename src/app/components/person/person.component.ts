import { Component, OnInit } from '@angular/core';
import { PersonId } from '../../utils/personId';
import { Persona } from '../../utils/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persona: Persona[] = [];
  personsId: PersonId[] = [
    {valueId: '1', tipoId: 'CC'},
    {valueId: '2', tipoId: 'TI'},
    {valueId: '3', tipoId: 'PE'}
  ];
  tipoSexo = [
    {value: 'M', tipo: 'Masculino'},
    {value: 'F', tipo: 'Femenino'},
  ]
  constructor() { 
  }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.persona);
  }

}

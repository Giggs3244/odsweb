import { Component, OnInit } from '@angular/core';
import { PersonId } from '../../utils/personId';
import { Persona } from '../../utils/person';
import { VotesService } from '../../services/votes.service';
import { DepartmentsAndCitiesService } from '../../services/departments.service';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
    valueCheckbox: any;
    departamentos: any[] = [];
    ciudades: any[] = [];
    nivelesEducacion: any[] = [];
    tiposIdentificacion: any[] = [];
    persona: Persona = new Persona();
    objetivosArray: any = [];
    personsId: any[] = [];
    tipoSexo = [
        { value: 'MASCULINO', tipo: 'MASCULINO' },
        { value: 'FEMENINO', tipo: 'FEMENINO' },
    ]

    objetivos: any = [];

    constructor(private _votesService: VotesService, private _departmentsAndCitiesService: DepartmentsAndCitiesService) {
    }

    ngOnInit() {
        this.getObjetivos();
        this.getDepartamentos();
        this.getTiposIdentificacion();
        this.getNivelesEducacion();
    }

    onSubmit(form) {
        console.log(this.persona);
        var infoVoto = {
            'infoPersona': this.persona,
            'objetivos': this.objetivosArray
        }
        console.log(infoVoto);
    }

    getCiudadesPorDepartamento(ev: any) {
        console.log(this.persona.idDepartamento);
        this._departmentsAndCitiesService.getCiudades(this.persona.idDepartamento).subscribe(
            response => {
                console.log(response);
                this.ciudades = response;

            },
            error => {
                console.log(error);
            }
        )
    }

    objetivoOpcion(index: number, event: boolean) {
        if (event) {
            this.objetivosArray.push(this.objetivos[index]);
        } else {
            for (let i = 0; i < this.objetivosArray.length; i++) {
                if (this.objetivosArray[i].idObjetivo === this.objetivos[index].idObjetivo) {
                    this.objetivosArray.splice(i, 1);
                }
            }
        }
    }

    getObjetivos() {
        this._votesService.getObjetivos().subscribe(
            response => {
                console.log(response);
                this.objetivos = response;

            },
            error => {
                console.log(error);
            }
        )
    }

    getDepartamentos() {
        this._departmentsAndCitiesService.getDepartamentos().subscribe(
            response => {
                console.log(response);
                this.departamentos = response;

            },
            error => {
                console.log(error);
            }
        )
    }

    getTiposIdentificacion() {
        this._departmentsAndCitiesService.getTiposIdentificacion().subscribe(
            response => {
                console.log(response);
                this.tiposIdentificacion = response;

            },
            error => {
                console.log(error);
            }
        )
    }

    getNivelesEducacion() {
        this._departmentsAndCitiesService.getNivelesEducacion().subscribe(
            response => {
                console.log(response);
                this.nivelesEducacion = response;

            },
            error => {
                console.log(error);
            }
        )
    }


}

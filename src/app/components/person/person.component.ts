import { Component, OnInit } from '@angular/core';
import { Persona } from '../../utils/person';
import { VotesService } from '../../services/votes.service';
import { DepartmentsAndCitiesService } from '../../services/departments.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
    showMsgCantidadObjetivo: boolean = false;
    msgCantidadObjetivos: string = '';
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

    constructor(private _votesService: VotesService, private _departmentsAndCitiesService: DepartmentsAndCitiesService, private _router:Router) {
    }

    ngOnInit() {
        this.getObjetivos();
        this.getDepartamentos();
        this.getTiposIdentificacion();
        this.getNivelesEducacion();
    }

    onSubmit(form) {
        if (form.status != "INVALID") {
            if (this.objetivosArray.length === 0 || this.objetivosArray.length < 6) {
                this.showMsgCantidadObjetivo = true;
                this.msgCantidadObjetivos = 'Debe seleccionar 6 objetivos';
            }
            if (this.objetivosArray.length > 6) {
                return;
            }
            var infoVoto = {
                'persona': this.persona,
                'objetivos': this.objetivosArray
            }
            console.log(infoVoto);
            this._departmentsAndCitiesService.crearRegistroODS(infoVoto).subscribe(response => {
                console.log(response);
                this._router.navigate(['home']);
            }, error => {
                console.log(error);
            });
        } else {
            scrollTo(0, 0);
        }
    }

    crearRegistroODS

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
        if (this.objetivosArray.length > 6) {
            this.showMsgCantidadObjetivo = true;
            this.msgCantidadObjetivos = 'Seleccione únicamente 6 objetivos';
        } else {
            this.showMsgCantidadObjetivo = false;
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

import { Component, OnInit } from '@angular/core';
import { PersonId } from '../../utils/personId';
import { Persona } from '../../utils/person';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
    valueCheckbox: any;
    persona: Persona = new Persona();
    objetivosArray: any = [];
    personsId: PersonId[] = [
        { valueId: '1', tipoId: 'CC' },
        { valueId: '2', tipoId: 'TI' },
        { valueId: '3', tipoId: 'PE' }
    ];
    tipoSexo = [
        { value: 'M', tipo: 'Masculino' },
        { value: 'F', tipo: 'Femenino' },
    ]

    objetivos = [{ "idObjetivo": 1, "titulo": "Fin de la pobreza", "descripcion": "Poner fin a la pobreza en todas sus formas en todo el mundo" }, { "idObjetivo": 2, "titulo": "Hambre cero", "descripcion": "Poner fin al hambre, lograr la seguridad alimentaria y la mejora de la nutrición y promover la agricultura sostenible" }, { "idObjetivo": 3, "titulo": "Salud y bienestar", "descripcion": "Garantizar una vida sana y promover el bienestar para todos en todas las edades" }, { "idObjetivo": 4, "titulo": "Educación de calidad", "descripcion": "Garantizar una educación inclusiva, equitativa y de calidad y promover oportunidades de aprendizaje durante toda la vida para todos" }, { "idObjetivo": 5, "titulo": "Igualdad de género", "descripcion": "Lograr la igualdad entre los géneros y empoderar a todas las mujeres y las niñas" }, { "idObjetivo": 6, "titulo": "Agua limpia y saneamiento", "descripcion": "Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos" }, { "idObjetivo": 7, "titulo": "Energía asequible y no contaminante", "descripcion": "Garantizar el acceso a una energía asequible, segura, sostenible y moderna para todos" }, { "idObjetivo": 8, "titulo": "Trabajo decente y crecimiento económico", "descripcion": "Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos" }, { "idObjetivo": 9, "titulo": "Industria, innovación e infraestructura", "descripcion": "Construir infraestructuras resilientes, promover la industrialización inclusiva y sostenible y fomentar la innovación" }, { "idObjetivo": 10, "titulo": "Resolución de las desigualdades", "descripcion": "Reducir la desigualdad en y entre los países" }, { "idObjetivo": 11, "titulo": "Ciudades y comunidades sostenibles", "descripcion": "Lograr que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles" }, { "idObjetivo": 12, "titulo": "Producción y consumos responsables", "descripcion": "Garantizar modalidades de consumo y producción sostenibles" }, { "idObjetivo": 13, "titulo": "Acción por el clima", "descripcion": "Adoptar medidas urgentes para combatir el cambio climático y sus efectos" }, { "idObjetivo": 14, "titulo": "Vida submarina", "descripcion": "Conservar y utilizar en forma sostenible los océanos, los mares y los recursos marinos para el desarrollo sostenible" }, { "idObjetivo": 15, "titulo": "Vida de ecosistemas terrestres", "descripcion": "Gestionar sosteniblemente los bosques, luchar contra la desertificación, detener e invertir la degradación de las tierras y detener la pérdida de biodiversidad" }, { "idObjetivo": 16, "titulo": "Paz, justicia e instituciones sólidas", "descripcion": "Promover sociedades, justas, pacíficas e inclusivas" }, { "idObjetivo": 17, "titulo": "Alianzas para lograr los objetivos", "descripcion": "Revitalizar la Alianza Mundial para el Desarrollo Sostenible" }];

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit(form) {
        console.log(this.persona);
        var infoVoto = {
            'infoPersona': this.persona,
            'objetivos': this.objetivosArray
        }
        console.log(infoVoto);
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


}

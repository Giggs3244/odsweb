import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VotesService } from '../../services/votes.service';
import { Vote } from '../../utils/vote';
import { MiscellaneousService } from '../../services/miscellaneous.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  edad: number;
  sexo: string;
  nivelEducacion: number;
  view: any[] = [1300, 200];
  viewPie: any[] = [700, 200];
  tipoSexo = [
    { value: 'MASCULINO', tipo: 'MASCULINO' },
    { value: 'FEMENINO', tipo: 'FEMENINO' },
  ]
  edades = [
    { value: 18, tipo: '18' },
    { value: 25, tipo: '25' },
    { value: 30, tipo: '30' },
    { value: 40, tipo: '40' },
  ]
  nivelesEducacion = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showDataLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votes';
  showYAxisLabel = true;
  yAxisLabel = 'Objectives';
  showDataLabelPie = true;
  showLegendPie = true;

  colorScheme = {
    domain: ['#FAC51D', '#66BD6D', '#FAA026', '#29BB9C', '#E96B56', '#55ACD2', '#B7332F', '#2C83C9', '#9166B8', '#92E7E8']
  };

  colorSchemePie = {
    domain: ['#647c8a', '#3f51b5', '#2196f3', '#00b862', '#afdf0a', '#a7b61a', '#f3e562', '#ff9800', '#ff5722', '#ff4514']
  };

  colorSchemePie2 = {
    domain: ['#bf9d76', '#e99450', '#d89f59', '#f2dfa7', '#a5d7c6', '#7794b1', '#afafaf', '#707160', '#ba9383', '#d9d5c3']
  };

  colorSchemePie3 = {
    domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886']
  };

  single: any[] = [];
  cantidadSexo: any[] = [];
  cantidadNivelEducacion: any[] = [];
  cantidadIDH: any[] = [];
  cantidadVotos: number = 0;

  constructor(private _votesService: VotesService, private _miscellaneousService: MiscellaneousService) {
    Object.assign(this, { this: this.single })
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    this.getVotesObjectives();
    this.getNivelesEducacion();
    this.getCantidadIDH();
    this.getCantidadNivelEducacion();
    this.getCantidadSexo();
    this.getCantidadVotosObjetivos();
  }

  getVotesObjectives() {
    this._votesService.getVotesObjectives().subscribe(
      response => {
        console.log(response);
        this.single = response;
      }, error => console.log(error)
    );
  }

  getNivelesEducacion() {
    this._miscellaneousService.getNivelesEducacion().subscribe(
      response => {
        console.log(response);
        this.nivelesEducacion = response;
      }, error => console.log(error)
    );
  }

  getVotosObjetivosByNivelEducacion(ev: any) {
    console.log(this.nivelEducacion);
    this._miscellaneousService.getVotosObjetivosByNivelEducacion(this.nivelEducacion).subscribe(
      response => {
        console.log(response);
        this.single = response;
      }, error => console.log(error)
    );
  }

  getVotosObjetivosBySexo(ev: any) {
    console.log(this.sexo);
    this._miscellaneousService.getVotosObjetivosBySexo(this.sexo).subscribe(
      response => {
        console.log(response);
        this.single = response;
      }, error => console.log(error)
    );
  }

  getVotosObjetivosByEdad(ev: any) {
    console.log(this.edad);
    this._miscellaneousService.getVotosObjetivosByEdad(this.edad).subscribe(
      response => {
        console.log(response);
        this.single = response;
      }, error => console.log(error)
    );
  }

  getCantidadSexo() {
    this._miscellaneousService.getCantidadSexo().subscribe(
      response => {
        console.log(response);
        this.cantidadSexo = response;
      }, error => console.log(error)
    );
  }

  getCantidadNivelEducacion() {
    this._miscellaneousService.getCantidadNivelEducacion().subscribe(
      response => {
        console.log(response);
        this.cantidadNivelEducacion = response;
      }, error => console.log(error)
    );
  }

  getCantidadIDH() {
    this._miscellaneousService.getCantidadIDH().subscribe(
      response => {
        console.log(response);
        this.cantidadIDH = response;
      }, error => console.log(error)
    );
  }

  getCantidadVotosObjetivos() {
    this._miscellaneousService.getCantidadVotosObjetivos().subscribe(
      response => {
        console.log(response);
        this.cantidadVotos = response;
      }, error => console.log(error)
    );
  }

}

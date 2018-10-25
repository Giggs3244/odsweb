import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VotesService } from '../../services/votes.service';
import { Vote } from '../../utils/vote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  multi: any[];
  view: any[] = [1000, 200];

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

  colorScheme = {
    domain: [ '#FAC51D', '#66BD6D', '#FAA026', '#29BB9C', '#E96B56', '#55ACD2', '#B7332F', '#2C83C9', '#9166B8', '#92E7E8']
  };

  single: any[] = [];

  constructor(private _votesService: VotesService) {
    Object.assign(this, { this:this.single })
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    this.getVotesObjectives();
  }

  getVotesObjectives() {
    this._votesService.getVotesObjectives().subscribe(
      response => {
          console.log(response);
          this.single = response;
      }, error => console.log(error)
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DweetService } from 'src/app/services/dweet.service';
import Dweet from 'src/models/Dweet';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.page.html',
  styleUrls: ['./humidity.page.scss'],
})
export class HumidityPage implements OnInit {

  private dweet: Dweet;
  private isLoading: boolean = true;
  private time: any;
  private dataPlot: Array<any>;
  private dataPlotMax: Array<any>;
  private dataPlotMin: Array<any>;
  options: Object;

  constructor(private dweetService: DweetService, public router: Router) {
    this.time = setInterval(() => { this.getLastDweets() }, 10000)
  }

  ngOnInit() {
    this.getLastDweets();
  }

  ngOnDestroy() {
    clearInterval(this.time)
  }

  goBack() {
    this.router.navigate(['home'])
  }

  private getLastDweets() {
    this.dataPlot = []
    this.dataPlotMax = []
    this.dataPlotMin = []
    this.dweetService.loadLastDweets().subscribe(
      data => {
        this.preencherDweet(data)
      },
      err => {
        console.log("Erro: ", err)
      },

      () => this.isLoading = false
    )
  }

  private preencherDweet(data: any) {
    this.dweet = this.dweetService.preencherDweet(data);
    this.loadDataForPlot(this.dweet)
    this.plotChart();
  }

  private plotChart() {
    this.options = {
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        labels: {
          formatter: function () {
            return this.value + " %";
          }
        },
      },
      title: { text: 'Umidade ' },
      series: [{
        name: 'umidade',
        data: this.dataPlot.reverse(),
        pointInterval: 60 * 60
      },
      {
        name: 'umidMax',
        data: this.dataPlotMax,
        pointInterval: 60 * 60
      },
      {
        name: 'umidMin',
        data: this.dataPlotMin,
        pointInterval: 60 * 60
      }]
    };
  }

  private loadDataForPlot(dweet: Dweet) {
    for (let _with of dweet.with) {
      let epoch = new Date(_with.created).getTime()
      this.dataPlot.push([epoch, _with.content.$umidade])
      this.dataPlotMax.push([epoch, _with.content.$umidMax])
      this.dataPlotMin.push([epoch, _with.content.$umidMin])
    }
  }

}

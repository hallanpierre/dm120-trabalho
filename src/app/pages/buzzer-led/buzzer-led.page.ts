import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DweetService } from 'src/app/services/dweet.service';
import Dweet from 'src/models/Dweet';

@Component({
  selector: 'app-buzzer-led',
  templateUrl: './buzzer-led.page.html',
  styleUrls: ['./buzzer-led.page.scss'],
})
export class BuzzerLedPage implements OnInit {

  private dweet: Dweet;
  private isLoading: boolean = true;
  private time: any;
  buzzerActivated: string = '';
  ledColor: string = '';
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
    this.loadData(this.dweet)
  }

  loadData(dweet: any) {
    const lastRegister = dweet._with[0];
    if (lastRegister != null && lastRegister.content != null) {
      this.buzzerActivated = lastRegister.content.statusBuzzer === 1 ? 'Ativado' : 'Desativado';
      this.ledColor = lastRegister.content.current_color;
    }
  }

}

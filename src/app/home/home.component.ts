import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentCity: string = "Ottawa";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const cityObj = this.route.snapshot.queryParams;
    if (Object.keys(cityObj).length != 0) {
      this.currentCity = cityObj['city'];
    }
  }

  getCurrentWeather() {

  }

  getHourlyWeather() {

  }

  getSevenDayWeather() {
    
  }
}

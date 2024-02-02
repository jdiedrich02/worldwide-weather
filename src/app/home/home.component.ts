import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  apiKey: string = environment.apiKey;
  currentCity: string = "Ottawa, Canada";
  lon: any = '';
  lat: any = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const cityObj = this.route.snapshot.queryParams;
    if (Object.keys(cityObj).length != 0) {
      this.currentCity = cityObj['city'] + ", " + cityObj['country'];
    }

    // Get all the weather info needed for the display
    this.getCurrentWeather();
    this.getHourlyWeather();
    this.getFiveDayWeather();
  }

  getCurrentWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.currentCity}&appid=${this.apiKey}`)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
      });
  }

  getHourlyWeather() {
    // Every 3 hours actually lol
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.currentCity}&appid=${this.apiKey}`)
    .then((res) => res.json())
    .then(data => {
      console.log(data)
    });
  }

  getFiveDayWeather() {
    // Split this by days and save the data
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.currentCity}&appid=${this.apiKey}`)
    .then((res) => res.json())
    .then(data => {
      console.log(data)
    });
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  apiKey: string = environment.apiKeyWeatherAPI;
  currentCity: string = "Ottawa, Canada";
  lon: any = '';
  lat: any = '';

  weatherInfo: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const cityObj = this.route.snapshot.queryParams;
    if (Object.keys(cityObj).length != 0) {
      this.currentCity = cityObj['city'] + ", " + cityObj['country'];
    }

    // Get all the weather info needed for the display
    this.getWeatherData();
  }

  getWeatherData() {
    fetch(`http://api.weatherapi.com/v1/forecast.json?q=${this.currentCity}&key=${this.apiKey}&days=3`)
    .then((res) => res.json())
    .then(data => {
      console.log(data)
      this.weatherInfo = data;
    });
  }
}

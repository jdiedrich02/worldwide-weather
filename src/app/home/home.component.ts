import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  protected currentCity: string;

  protected hourlyTimes: any[] = [6, 9, 12, 15, 18];
  protected hourly: any[];
  protected weatherInfo: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.currentCity = "Ottawa, Canada";
    this.hourly = [];
    this.weatherInfo = {};
  }

  ngOnInit() {
    const cityObj = this.route.snapshot.queryParams;
    if (Object.keys(cityObj).length != 0) {
      this.currentCity = cityObj['city'] + ", " + cityObj['country'];
    }

    // Get all the weather info needed for the display
    this.getWeatherData();
  }

  getWeatherData() {
    this.dataService.getWeather(this.currentCity).subscribe(data => {
      this.weatherInfo = data;
      
      // Setup Hourly
      for (let hourTimes of this.hourlyTimes) {
        this.hourly.push(this.weatherInfo.forecast['forecastday'][0]['hour'][hourTimes]);
      }
    });
  }
}

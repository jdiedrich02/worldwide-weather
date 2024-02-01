import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  cityInput: any = '';
  pageNum: any = 0;
  itemsPerPage :any = 10;
  cityListLen :any = 0;
  citiesList :any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadAllData();
  }

  searchSpecificCity(name: string) {
    this.dataService.getSpecificCity(name).subscribe(data => {
      console.log(data)
      this.cityListLen = data.length;
      this.citiesList = data;
    });
  }

  loadAllData() {
    this.dataService.getCityData().subscribe(data => {
      console.log(data)
      this.cityListLen = data.length;
      this.citiesList = data;
    });
  }

  handlePageChange($event: any) {
    this.itemsPerPage = $event.pageSize;
    this.pageNum = $event.pageIndex;
  }
}

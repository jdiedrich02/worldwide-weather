import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  protected cityInput: any;
  protected pageNum: any;
  protected itemsPerPage :any;
  protected cityListLen :any;
  protected citiesList :any[] = [];

  constructor(private dataService: DataService) {
    this.cityInput = '';
    this.pageNum = 0;
    this.itemsPerPage = 10;
    this.cityListLen = 0;
  }

  ngOnInit() {
    this.loadAllData();
  }

  searchSpecificCity(name: string) {
    this.dataService.getSpecificCity(name).subscribe(data => {
      this.cityListLen = data.length;
      this.citiesList = data;
    });
  }

  loadAllData() {
    this.dataService.getCityData().subscribe(data => {
      this.cityListLen = data.length;
      this.citiesList = data;
    });
  }

  handlePageChange($event: any) {
    this.itemsPerPage = $event.pageSize;
    this.pageNum = $event.pageIndex;
  }

  clearInput() {
    this.cityInput = '';
    this.loadAllData();
  }
}

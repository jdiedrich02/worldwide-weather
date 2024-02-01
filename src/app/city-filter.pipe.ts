import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {
  transform(cities: any[], searchText: string): any[] {
    if (!cities || !searchText) {
      return cities;
    }
    searchText = searchText.toLowerCase();
    return cities.filter(city => {
      return city.name.toLowerCase().includes(searchText);
    });
  }
}
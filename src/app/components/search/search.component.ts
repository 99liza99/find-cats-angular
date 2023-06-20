import {Component} from '@angular/core';
import {CatsService} from "../../services/cats.service";
import {BreedInterface} from "../../interfaces/BreedInterface";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  breeds: BreedInterface[] | undefined;

  constructor(private catService: CatsService) {
  }

  ngOnInit() {
    this.catService.getBreeds().subscribe(result => {
      this.breeds = result;
    })
  }

  formatLabel(value: number): string {
    return `${value}`;
  }
}

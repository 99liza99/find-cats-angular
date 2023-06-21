import {Component, EventEmitter, Output} from '@angular/core';
import {CatsService} from "../../services/cats.service";
import {BreedInterface} from "../../interfaces/BreedInterface";
import {FilterInterface} from "../../interfaces/FilterInterface";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  breeds: BreedInterface[] | undefined;
  currentBreed: string = '';
  limit: number = 10;

  @Output() newOptionEvent = new EventEmitter<FilterInterface>();


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

  onChange() {
    this.newOptionEvent.emit({
      breed_ids: this.currentBreed,
      limit: this.limit,
    });
  }

}

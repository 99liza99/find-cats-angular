import { Component } from '@angular/core';
import {FilterInterface} from "./interfaces/FilterInterface";
import {Consts} from "./consts";
import {Observable} from "rxjs";
import {CatImageInterface} from "./interfaces/CatImageInterface";
import {CatsService} from "./services/cats.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data$: Observable<CatImageInterface[]> = this.service.images$;
  images: CatImageInterface[] | undefined;


  constructor(private service: CatsService) {
  }

  ngOnInit() {
    this.data$.subscribe(res => {
      this.images = res;
    })
  }

  changeFilter(filter: FilterInterface) {
    this.service.filterValue.next(filter);
  }
}

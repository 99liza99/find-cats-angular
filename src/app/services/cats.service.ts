import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, combineLatest, Observable, switchMap} from "rxjs";
import {BreedInterface} from "../interfaces/BreedInterface";
import {FilterInterface} from "../interfaces/FilterInterface";
import {CatImageInterface} from "../interfaces/CatImageInterface";
import {Consts} from "../consts";

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private apiKey: string = 'live_XqKf4WEFO9HxzEvQEBTDcAuu5cYDVBjh2ObktKHTrRYC3AS8QulfXKJA5GiAVVyF';
  private apiUrl: string = "https://api.thecatapi.com/v1/";

  constructor(private http: HttpClient) {
  }

  filterValue = new BehaviorSubject<FilterInterface>(Consts);
  filterValue$ = this.filterValue.asObservable();

  images$: Observable<CatImageInterface[]> = combineLatest([
    this.filterValue$,
  ]).pipe(
    switchMap(([filter]) => this.getCatsImages(filter)),
  );

  /**
   * Get Breeds
   */
  getBreeds(): Observable<BreedInterface[]> {
    let params = {
      page: 0,
      limit: 10,
      api_key: this.apiKey
    }

    return this.http.get<BreedInterface[]>(this.apiUrl + 'breeds', {params});
  }

  /**
   * Get Cats Images
   *
   * @param filter
   */
  getCatsImages(filter: FilterInterface): Observable<CatImageInterface[]> {
    let params = {
      limit: filter.limit,
      breed_ids: filter.breed_ids,
      api_key: this.apiKey
    }

    return this.http.get<CatImageInterface[]>(this.apiUrl + 'images/search', {params});
  }

}

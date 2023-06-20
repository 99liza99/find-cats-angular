import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BreedInterface} from "../interfaces/BreedInterface";

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private apiKey: string = 'live_XqKf4WEFO9HxzEvQEBTDcAuu5cYDVBjh2ObktKHTrRYC3AS8QulfXKJA5GiAVVyF';
  private apiUrl: string = "https://api.thecatapi.com/v1/";

  constructor(private http: HttpClient) {
  }

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

}

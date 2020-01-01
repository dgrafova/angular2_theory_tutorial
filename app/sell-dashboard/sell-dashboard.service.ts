import { Item } from "./item.interface";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
//import { map } from "rxjs/operators";

//const ITEMS_API: string = "api/items";

@Injectable() //we need this annotation here in order to be able to inject the HttpClient into constructor
export class ItemDashboardService {
  private readonly ITEMS_API = "http://localhost:4000/api/items";

  constructor(private http: HttpClient) {}

  getItemsSyn(): Item[] {
    return [
      {
        code: "W12320000002",
        category: "cloths",
        gender: "women",
        brand: "GANT",
        size: "M"
      },
      {
        code: "M1120000008",
        category: "shoes",
        gender: "men",
        brand: "LLOYD",
        size: 46
      },
      {
        code: "W3230000009",
        category: "cloths",
        gender: "women",
        brand: "Tommy Hilfiger",
        size: "S"
      }
    ];
  }

  getItemsAsyn(): Observable<Item[]> {
    //return this.http.get(this.ITEMS_API).pipe(map(item => item.json() || []));
    return this.http.get<Item[]>(this.ITEMS_API);
  }
}

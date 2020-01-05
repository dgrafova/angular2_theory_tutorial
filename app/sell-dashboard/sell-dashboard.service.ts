import { Item } from "./item.interface";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
//import { map } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

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
    return this.http.get<Item[]>(this.ITEMS_API);
  }

  updateItemsAsyn(item: Item): Observable<any> {
    //aus irgendeinem Grund die PUT-Request funktioniert nicht - 404 not found
    return this.http
      .put<Item>(`${this.ITEMS_API}?code=${item.code}`, item, {
        responseType: "json"
      })
      .pipe(
        catchError(err =>
          throwError(
            new Error(
              "Ein Fehler beim Speichern eines Items ist aufgetreten: " + err
            )
          )
        )
      );
  }

  deleteItemsAsyn(item: Item): Observable<any> {
    //aus irgendeinem Grund die DELETE-Request funktioniert nicht - 404 not found
    return this.http
      .delete<Item>(`${this.ITEMS_API}?code=${item.code}`, {
        responseType: "json"
      })
      .pipe(
        catchError(err =>
          throwError(
            new Error(
              "Ein Fehler beim Speichern eines Items ist aufgetreten: " + err
            )
          )
        )
      );
  }
}

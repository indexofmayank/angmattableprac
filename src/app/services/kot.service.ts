import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class KotService {
    constructor(private http: HttpClient) {}

    fetchData(): Observable<any[]> {
        const result = this.http.get<any[]>('https://dummyjson.com/products');
        return result;
    }
}
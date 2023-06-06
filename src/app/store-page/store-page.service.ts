import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SERVER_ENDPOINT, SERVER_URL, SERVER_URL_MAP } from "../common/globals";

@Injectable({
    providedIn: 'root'
  })
export class StoreService {

    constructor(private http : HttpClient) {

    }

    accummulate(body: any) {
        let accummulateUrl = SERVER_URL_MAP.get(SERVER_URL.POINT_ACCUMMULATE);
        return this.http.post<any>(SERVER_ENDPOINT + accummulateUrl, body);
    }
}
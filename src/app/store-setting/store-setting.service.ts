import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SERVER_ENDPOINT, SERVER_URL, SERVER_URL_MAP } from "../common/globals";

@Injectable({
    providedIn: 'root'
  })
export class SettingService {

    constructor(private http : HttpClient) {

    }

    getSetting(body: any) {
        let discountGetUrl = SERVER_URL_MAP.get(SERVER_URL.DISCOUNT_GET_URL);
        return this.http.post<any>(SERVER_ENDPOINT + discountGetUrl, body);
    }

    setAllSetting(body: any) {
        let discountSetAllUrl = SERVER_URL_MAP.get(SERVER_URL.DISCOUNT_SET_ALL_URL);
        return this.http.post<any>(SERVER_ENDPOINT + discountSetAllUrl, body);
    }
    
}
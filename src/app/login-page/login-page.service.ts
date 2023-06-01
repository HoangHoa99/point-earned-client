import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SERVER_ENDPOINT, SERVER_URL, SERVER_URL_MAP } from "../common/globals";

@Injectable({
    providedIn: 'root'
  })
export class LoginService {

    constructor(private http : HttpClient) {

    }

    login(body: any) {
        let loginUrl = SERVER_URL_MAP.get(SERVER_URL.LOGIN_URL);
        return this.http.post<any>(SERVER_ENDPOINT + loginUrl, body);
    }

    register(body: any) {
        let registerUrl = SERVER_URL_MAP.get(SERVER_URL.REGISTER_URL);
        return this.http.post<any>(SERVER_ENDPOINT + registerUrl, body);
    }
}
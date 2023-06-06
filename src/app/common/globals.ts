import { LoginResponse } from "../login-page/login-page";

export class Globals {
    public static loginResponse : LoginResponse;

    public static isStoreLogin : boolean = false;

    public static isUserLogin : boolean = false;
}

export enum SERVER_URL {
    LOGIN_URL,
    REGISTER_URL,
    DISCOUNT_GET_URL,
    DISCOUNT_SET_ALL_URL,
    POINT_ACCUMMULATE
}

export const SERVER_URL_MAP = new Map<SERVER_URL, string>([
    [SERVER_URL.LOGIN_URL, "/api/user/login"],
    [SERVER_URL.REGISTER_URL, "/api/user/register"],
    [SERVER_URL.DISCOUNT_GET_URL, "/api/discount-setting/get"],
    [SERVER_URL.DISCOUNT_SET_ALL_URL, "/api/discount-setting/set"],
    [SERVER_URL.POINT_ACCUMMULATE, "/api/point/accumulate"]
]);



export const SERVER_ENDPOINT: string = 'http://localhost:8080';
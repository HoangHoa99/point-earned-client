export const PHONE_REGEX = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/;

export class LoginResponse {
    private error: boolean = false;
    private message: string = '';
    private id: number | undefined;
    private username: string = '';
    private userType: string = '';
    private qrUrl: string = '';

    constructor(data: any) {
        this.error = data.error;
        this.message = data.message;
        this.id = data.id;
        this.username = data.username;
        this.userType = data.userType;
        this.qrUrl = data.qrUrl;
    }

    get getError() {
        return this.error;
    }

    get getMessage() {
        return this.message;
    }

    get getId() {
        return this.id;
    }

    get getUsername() {
        return this.username;
    }

    get getUserType() {
        return this.userType;
    }

    get getQRUrl() {
        return this.qrUrl;
    }

    clear() {
        this.error = false;
        this.message = '';
        this.id = undefined;
        this.username = '';
        this.userType = '';
        this.qrUrl = '';
    }

}
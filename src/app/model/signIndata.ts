export class signIndata{
    private "email": string;
    private "password": string;

    constructor(email: string, password: string){
        this.email = email;
        this.password = password;

    }

    getemail(): string {
        return this.email;
    }
    getpassword(): string {
        return this.password;
    }
}
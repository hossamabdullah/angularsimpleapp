export class User{
    username: Text;
    password: Text;
    email: Text;

    constructor(username, password, email){
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
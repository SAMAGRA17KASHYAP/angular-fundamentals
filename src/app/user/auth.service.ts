import { Injectable } from "@angular/core";
import { IUser } from "./login/iuser.model";


@Injectable()
export class AuthService{
    currentUser:IUser;

    loginUser(username:string,password:string){
        this.currentUser = {
            id:1,
            firstName:"samagra",
            lastName:"kashyap"          
        };
    }
    isAuthenticated(){
        return !!this.currentUser;
    }   
}
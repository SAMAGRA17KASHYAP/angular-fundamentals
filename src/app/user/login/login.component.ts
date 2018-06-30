import {Component} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent{

    constructor(private authService:AuthService,private router:Router){

    }

    login(form:any){
        this.authService.loginUser(form.username,form.password);
        this.router.navigate(["/events"]);
    }

    cancel(){
        this.router.navigate(["/events"]);
    }

}
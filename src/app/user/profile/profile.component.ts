import {Component, OnInit, Inject} from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN} from '../../toastr.service';


@Component({
    selector:'user-profile',
    templateUrl:'./profile.component.html',
    styleUrls:['./profile.component.css']
})
export class ProfileComponent implements OnInit{
    
    profileForm:FormGroup;
    firstName:FormControl;
    lastName:FormControl;

    constructor(private auth:AuthService,private router:Router, @Inject(TOASTR_TOKEN)private toastr:Toastr){

    }

    ngOnInit(){
        this.firstName = new FormControl(this.auth.currentUser.firstName,[Validators.required,Validators.pattern("[a-zA-Z.*]")]);
        this.lastName = new FormControl(this.auth.currentUser.lastName,Validators.required);
        this.profileForm = new FormGroup({
            firstName:this.firstName,
            lastName:this.lastName
        }); 
    }

    saveProfile(form:any){
        if(this.profileForm.valid){
            this.auth.updateUser(form.firstName,form.lastName);
            //this.router.navigate(["events"]);
            this.toastr.success("Profile Saved");
        }
    }

    cancel(){
        this.router.navigate(["events"]);     
    }

    validateFirstName(){
        return this.firstName.valid || this.firstName.untouched;
    }


    validateLastName(){
        return this.lastName.valid || this.lastName.untouched;
    }
}

export interface Toastr{
    success(msg:string,title?:string);
    info(msg:string,title?:string);
    warning(msg:string,title?:string);
    error(msg:string,title?:string); 
  }
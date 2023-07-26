
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-techlogin',
  templateUrl: './techlogin.component.html',
  styleUrls: ['./techlogin.component.css']
})
export class TechloginComponent implements OnInit {

  successmsg:any;
  showSuccessMsg: any;

  successmsg1:any;
  showSuccessMsg1: any;

  successmsg2:any;
  showSuccessMsg2: any;

  successmsg3:any;
  showSuccessMsg3: any;
  errormsg: any;



  // userForm = new FormGroup({
  //   'email': new FormControl('', [Validators.required, Validators.email]),
  //   'password': new FormControl('', Validators.required),
    
    
  // });
  techLogin= {
    tech_id:'',
    password:''
  }

  techlog:any;


  constructor(
    public dialogRef: MatDialogRef<TechloginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ApiserviceService,
    private _router: Router
  ) {}

  ngOnInit() {}

  tech_object:any
  tech_login() {
    if(this.techLogin.tech_id== '' && this.techLogin.password == ''){
      this.successmsg = "Email and Password is required";
      this.showSuccessMsg = true;
      return;
    }
     if(this.techLogin.tech_id== ''){
      this.successmsg1 = "Email is required";
      this.showSuccessMsg1 = true;
      return;
    }
    if(this.techLogin.password== ''){
      this.successmsg2 = "Password is required";
      this.showSuccessMsg2 = true;
      return;
    }
  

    this.service.techLogin(this.techLogin)
    .subscribe((response)=>{
      this.tech_object = response
      console.log(this.tech_object.body)
      if(this.tech_object.success == true){
        var id= this.techLogin.tech_id;
        this.techlog = id;
        console.log(this.techlog)

        localStorage.setItem('techlogin',JSON.stringify(this.techlog))
        this.close()
        this._router.navigate(['/techpage'])
      }else{
        this.successmsg3 = "user not found with these credentials";
      this.showSuccessMsg3 = true;
      }

      //
    },
    (err)=>{
      alert("Something went wrong, please try after some time")
      //alert(err.message)
    }
    )
  } 

 


  close(): void {
    this.dialogRef.close();
  }
}
;
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { TrackformComponent } from '../trackform/trackform.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  successmsg:any;
  showSuccessMsg: any;

  successmsg1:any;
  showSuccessMsg1: any;

  successmsg2:any;
  showSuccessMsg2: any;

  successmsg3:any;
  showSuccessMsg3: any;

  errormsg: any;
  adminLogin= {
    admin_id:'',
    password:''
  }


  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ApiserviceService,
    private _router: Router
  ) {}

  ngOnInit() {}

  admin_object:any
  admin_login() {
     if(this.adminLogin.admin_id== '' && this.adminLogin.password == ''){
      this.successmsg = "Email and Password is required";
          this.showSuccessMsg = true;
      return;
     } 
     if(this.adminLogin.admin_id== ''){
      this.successmsg1 = "Email is required";
          this.showSuccessMsg1 = true;
      return;
     } 
     if(this.adminLogin.password== ''){
      this.successmsg2 = "Password is required";
      this.showSuccessMsg2 = true;
      return;
     }

    this.service.adminLogin(this.adminLogin)
    .subscribe((response)=>{
      
      this.admin_object = response
      console.log(this.admin_object.admin_id)
      if(this.admin_object.success == true){
        // localStorage.setItem("adminLogin",this.admin_object.body?.toString())
        localStorage.setItem('adminlogin',JSON.stringify(this.admin_object.admin_id))
        this.close()
        this._router.navigate(['/adminpage'])
      }else{
        this.successmsg3 = "user not found with these credentials";
      this.showSuccessMsg3 = true;
      }

      //
    },
    (err)=>{
      alert("something is wrong")
      //alert(err.message)
    }
    )

    /*if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe(res => {
        console.log(res, 'res==>');
        this.userForm.reset();
      });
    } else {
      this.errormsg = 'All fields are required';
    }*/
  }

  close(): void {
    this.dialogRef.close();
  }
}
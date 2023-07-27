import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { TrackformComponent } from '../trackform/trackform.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-hodlogin-page',
  templateUrl: './hodlogin-page.component.html',
  styleUrls: ['./hodlogin-page.component.css']
})
export class HODloginPageComponent implements OnInit {

  successmsg:any;
  showSuccessMsg: any;

  successmsg1:any;
  showSuccessMsg1: any;

  successmsg2:any;
  showSuccessMsg2: any;

  successmsg3:any;
  showSuccessMsg3: any;

  HODlogin= {
    hod_id:'',
    password:''
  }

  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ApiserviceService,
    private _router: Router
  ) {}

  ngOnInit() {}

  HOD_object:any
  HOD_login() {
     if(this.HODlogin.hod_id== '' && this.HODlogin.password == ''){
      this.successmsg = "Email and Password is required";
          this.showSuccessMsg = true;
      return;
     } 
     if(this.HODlogin.hod_id== ''){
      this.successmsg1 = "Email is required";
      this.showSuccessMsg1 = true;
      return;
     } 
     if(this.HODlogin.password== ''){
      this.successmsg2 = "Password is required";
      this.showSuccessMsg2 = true;
      return;
     } 

    this.service.HODLogin(this.HODlogin)
    .subscribe((response)=>{
      this.HOD_object = response
      console.log(this.HOD_object.body)
      if(this.HOD_object.success == true){
        localStorage.setItem('HODlogin',JSON.stringify(this.HODlogin.hod_id))
        this.close()
        this._router.navigate(['/hodpage'])
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

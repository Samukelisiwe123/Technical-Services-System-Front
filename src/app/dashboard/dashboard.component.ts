import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  requestform = {
    staff_id: '',
    venue: '',
    description: '',
  }

  constructor(private service: ApiserviceService,private _router: Router) {}
  errormsg: any;
  ngOnInit(): void {
  }

  request_object: any
  request() {
    if (this.requestform.staff_id == '') alert("Email is required")
    if (this.requestform.venue == '') alert("Password is required")
    if (this.requestform.description == '') alert("Password is required")



    this.service.request(this.requestform)
      .subscribe((response) => {
        this.request_object = response
        console.log(this.request_object.body)
        this._router.navigate(['/read'])
        //
      },

      )
  }


  // staffRequest()
  // {
  //   if(this.userForm.valid)
  //   {
  //     console.log(this.userForm.value);
  //     this.service.staffRequests(this.userForm.value).subscribe((res)=>{
  //       console.log(res,'res==>');
  //       this.userForm.reset();
  //     })
  //   }
  //   else{
  //     this.errormsg = 'all field is required';
  //   }

  // }

  // constructor(private dialog: MatDialog) {}

  // openTrackForm(): void {
  //   const dialogRef = this.dialog.open(TrackformComponent, {
  //     width: '700px',
  //     disableClose: true
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  logout() {
    localStorage.removeItem('techlogin')
  }

}



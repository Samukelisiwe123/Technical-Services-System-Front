import { Component,OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Route, Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-adminassigntask',
  templateUrl: './adminassigntask.component.html',
  styleUrls: ['./adminassigntask.component.css']
})
export class AdminassigntaskComponent implements OnInit{

  availableTechData :any;
  
  adminTechDetails= {
    tech_id:1,
    admin_id:12
  }
  id:Number =1;
  object_:any;
  pdata:any;
  data:any;
  message = "";
  status =false;
  AdminArtisan_object: any;

  constructor(private service:ApiserviceService, private navrouter:Router){}


  ngOnInit(): void{
 
    
    //Getting the reference of the request in the local storage, the data is a string
  let data = localStorage.getItem('reference');

  //Displaying the typeOf data
  console.log(typeof(data))
  // data?.slice(10, 50)

 //Convert the local storage reference to a number
this.id = Number(data)

  
  


 //Displaying the data
  console.log(this.id, "REFENCE ID NUMBER")
 
  console.log("NEW LINE")
    //Fetch the available artisan of the/based on the reference number.                or Number(data);
    this.service.getTechAvailable(this.id).subscribe((res)=>{
      console.log(res,"res==>");
      this.availableTechData = res;

 
      // let data = localStorage.getItem("techDetails");

      // // console.log(typeof(data), 'tHIS DATA');

      //  let staff_id = data?.slice(12,20);
      // console.log("25897486")
      //  console.log(staff_id);
      // console.log(typeof(staff_id))

      // console.log(this.availableTechData)
     
    })



      
     //Getting the admin id in the local storage,the data is a string
    let admin = localStorage.getItem('stafflogin');
   
    let admin_temp_Id = admin?.slice(1,10);
    console.log(admin_temp_Id)


    //Displaying both staff number(of the Artisan&admin)
    console.log(this.adminTechDetails,"Display both of them")



    // this.service.assignavailArtisan(this.id,this.adminTechDetails).subscribe((res)=>{
    //     this.AdminArtisan_object = res;

    //   console.log(this.AdminArtisan_object )
      
        
    // })
    






  }



  logout(){
    localStorage.removeItem('logindata')
  }

  assignArtisan(tech_id:Number) {

     
   
    this.message = "";
      

    this.message = "Successfully assigned the request to the artisan"+tech_id;



   
    //Get the Artisan id from the assignArtisan button(which is the data from the get available tech api), we only passsing and tech id from the html file 
  
     this.adminTechDetails.tech_id = Number(tech_id);


   
     //Artisan staff number
    //console.log("25897486")

     console.log(this.adminTechDetails.tech_id,'ARTISAN NUMBER');
    // console.log(typeof(staff_id))


      
    //  //Getting the admin id in the local storage,the data is a string
    // let admin = localStorage.getItem('admin_id');

    // //Convert the local storage admin id to a number
    // this.adminTechDetails.admin_id= Number(admin);
    // console


    // console.log(this.adminTechDetails.admin_id,"Admin idCHECK THIS");
    // //Have to post the assigned Artisan status
  
     this.service.assignavailArtisan(this.id,this.adminTechDetails).subscribe((res)=>{

        this.AdminArtisan_object = res;

      console.log(this.AdminArtisan_object )
      // setTimeout(function(){
      //   window.location.reload();
      //  }, 2000);
      
        
    })
      return  this.status =true

     
  }

 
  
}

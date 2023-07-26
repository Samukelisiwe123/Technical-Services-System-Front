
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';
import { Route, Router,NavigationExtras } from '@angular/router';
import { AssignPopupComponent } from '../assign-popup/assign-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { AdminprogressComponent } from '../adminprogress/adminprogress.component';
import { Location } from '@angular/common';



@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {


  currentPage = 1;
  itemsPerPage = 5;

  constructor(private service:ApiserviceService, private navrouter:Router, private dialog: MatDialog,private location: Location) { }
  statsData:any;
  readData:any;
  temData:any;
  set_object: any;
  set_print:any;
  expo:any;
  set_object2: any;
  repo:any;
  complete:any;
  tech:any;
 

  setPriority = {
    priority: ''
  }

  
 
  

  ngOnInit(): void{
    this.service.allRequests().subscribe((res)=>{
      console.log(res.result,"All the logs");
      this.readData = res.result;
      localStorage.setItem('details', JSON.stringify(this.readData));
    })
    this.total()
    this.totalcomplete()
    this.totalTech()
    this.getStats()
    
    
  }

  totalcomplete():void{
    this.service.totalcomplete().subscribe((res)=>{
      // console.log(res.result,"ram==>");
      this.complete = res
      console.log(this.complete)
  })
}

getStats() {
  this.service.getLogServiceStatistics().subscribe((res) => {
    this.statsData = res;
    // console.log(typeof(this.statsData), "Object Type");

    // this.statsData.push(this.datadata)
    console.log(this.statsData, "Statistics data");
  })
}


total():void{
  this.service.totalRequests().subscribe((res)=>{
    // console.log(res.result,"ram==>");
    this.temData = res
    console.log(this.temData)
})
}

totalTech():void{
  this.service.totalTech().subscribe((res)=>{
    // console.log(res.result,"ram==>");
    this.tech = res
    console.log(this.tech)
})
}

logout(){
  localStorage.removeItem('logindata')
}

priority(event:any,jobCardId:Number){
  var data={
    priority:event.target.value,
  }
  
  console.log(jobCardId)

  this.service.updatePriority(jobCardId,data)

    .subscribe((response) => {
      this.set_object = response;
      console.log(response);
      if (this.set_object.success == true) {
        localStorage.setItem('Priority', JSON.stringify(this.setPriority.priority));
      }
})
}
printer(){
window.print();
}

viewAvailableTech(reference:Number){

console.log(reference)

localStorage.setItem('reference',reference.toString())

this.navrouter.navigate(['/availableTechnician'])

// //   this.service.allRequests().subscribe(response=>{
  
// //     this.data = response.result
// //     console.log(this.data)

// //     const dataArray = []

// //     for(let i = 0; i < this.data.length;i++){
// //       if(this.data.result[i].category){

// //       }

// //     }
// //   })
// // //All Request data details are stored on the localStorage, with the details variable
// //   this.service.allRequests().subscribe((res)=>{
// //     console.log(res.result,"res==>");
// //     this.readData = res.result;

// //   })

}




downloadFile() {
const apiUrl = "http://192.168.27.20:3000"; // Replace with your API URL

// Create a link element
const link = document.createElement('a');
link.style.display = 'none';

// Set the URL of the file to download
link.href = `${apiUrl}/admin/export`;

// Set the download attribute with the desired filename
link.download = 'requests.csv';

// Append the link to the document body
document.body.appendChild(link);

// Click the link to trigger the file download
link.click();

// Clean up by removing the link from the document body
document.body.removeChild(link);
}



openForm(reference:Number): void {

  console.log(reference)

localStorage.setItem('reference',reference.toString())

  const dialogRef = this.dialog.open(AssignPopupComponent, {
    width: '700px',
    disableClose: true
  });

  dialogRef.afterClosed().subscribe((res:any) => {
    console.log('The dialog was closed');
  });

 
}

deletereq(event:any,jobCardId:Number){
 
  
  console.log(jobCardId)

  this.service.deleteReq(jobCardId)

    .subscribe((response) => {
      this.set_object = response;
      alert(this.set_object.message)
      
        this.refreshPage();
      

      
})
}

refreshPage(): void {
  this.location.replaceState('/adminpage');
  window.location.reload();
}

getPageData(): any[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.readData.slice(startIndex, endIndex);
}

// Function to set the current page
setPage(pageNumber: number) {
  this.currentPage = pageNumber;
}

// Function to generate an array of page numbers for the pagination control
get pages(): number[] {
  const pageCount = Math.ceil(this.readData.length / this.itemsPerPage);
  return Array.from({ length: pageCount }, (_, i) => i + 1);
}

}



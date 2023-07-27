import { Component } from '@angular/core';

@Component({
  selector: 'app-adminviewprogress',
  templateUrl: './adminviewprogress.component.html',
  styleUrls: ['./adminviewprogress.component.css']
})
export class AdminviewprogressComponent {


  printer(){
    window.print();
  }
}

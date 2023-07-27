import { Component } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-calender',
  template: `<ejs-schedule height="500" width="400" [eventSettings]="eventObject" [selectedDate]="setDate" [currentView]="setView"></ejs-schedule>`,
  // templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {

  title='schedule';
  public setView: View = 'Day';
  public setDate: Date = new Date(2019, 1, 15);
  public eventObject: EventSettingsModel = {
    dataSource: [{
      Subject: "Testing",
      StartTime: new Date(2019, 0, 17, 4, 0),
      EndTime: new Date(2019, 0, 17, 6, 0),
      IsAllDay: true
    }]
  };

}

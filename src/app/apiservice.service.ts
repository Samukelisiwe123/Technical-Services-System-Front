import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }

  //connect frontend to backend
  apiUrl  = 'https://naughty-blue-leg-warmers.cyclic.app'
  // apiUrl  = 'http://localhost:3000';
  // apiUrl = "http://192.168.27.20:3000"
  //get all data

  staffLogin(data: any) {
    return this._http.post(this.apiUrl + "/staff/authenticateStaffNumber", data);
  }


  adminLogin(data: any) {
    return this._http.post(this.apiUrl + "/admin/login", data);
  }

  HODLogin(data: any) {
    return this._http.post(this.apiUrl + "/hod/login", data);
  }

  
  techLogin(data: any) {
    return this._http.post(this.apiUrl + "/technician/login", data);
  }

  request(data: any) {
    return this._http.post(this.apiUrl + "/staff/createRequest", data);
  }

  // staffRequests(data:any){
  //   return this._http.post(this.apiUrl+"/staff/createRequest", data);
  // }

  staffRequests(data: any): Observable<any> {
    console.log(data, 'createapi=>');

    return this._http.post(`${this.apiUrl + "/staff/createRequest"}`, data);
  }

  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl + "/admin/viewRequester"}`);
  }

  totalRequests(): Observable<any> {
    return this._http.get(`${this.apiUrl + "/admin/totalRequests"}`);
  }


/*
  createData(data: any): Observable<any> {
    console.log(data, 'createapi=>');

    return this._http.post(`${this.apiUrl}`, data);
  }
*/

  getDataById(id: number): Observable<any> {
    return this._http.get(`${this.apiUrl}/${id}`);
  }

  
  /*Admin Apis*/



  /*Staff Apis*/
      //Api post feedback connection STAFF
      
      postStaffFeedback(id: number, data: any): Observable<any> {
        
        return this._http.put(`${this.apiUrl}/staff/sendFeedback/${id}`, data);
      }
      

      allRequests():Observable<any>
      {
        return this._http.get(`${this.apiUrl+"/admin/viewAll"}`);
      }

      logreq():Observable<any>
      {
        return this._http.get(`${this.apiUrl+"/admin/requests"}`);
      }
      
      
      /*Get the staff request that are logged based on the staff id STAFF */ 
      getRequestsBystaffId(id : Number){
        return this._http.get(this.apiUrl+"/staff/loggedRequests/"+id)
      }

      updatePriority(id : Number,data: any) {
        return this._http.put(this.apiUrl + "/admin/setPriority/"+id, data);
      }

      getCatIssues(id:number):Observable<any>{
        return this._http.get(`${this.apiUrl + "/getItem/"+id}`)
      }

      category():Observable<any>{
        return this._http.get(`${this.apiUrl + "/getCategory"}`)
      }

  /*Technician Apis*/

  //Api connection to get the available technician

  getTechAvailable(id: Number): Observable<any> {
    return this._http.get(`${this.apiUrl}/admin/` + "availableTechnician/" + id);

  }

  //Connection to get task assigned to technician from server, who logged based on the ID 

  getTechTaskById(id: Number): Observable<any> {
    return this._http.get(`${this.apiUrl}/technician/` + "tasks/" + id);
  }
  //Posting the technician progress status to the server
  postTechStatus(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/technician/` + "", data);
  }

  //get the technican task, with the progress status feedback
  getTechProgressStatus(): Observable<any> {
    return this._http.get(`${this.apiUrl}/technician/` + "");

  }

  report():Observable<any>
      {
        return this._http.get(`${this.apiUrl+"/admin/export"}`);
      }

      Techdata(id : any) {
        return this._http.get(this.apiUrl + "/technician/tasks/"+id);
      }

      HODrequest(id : any) {
        return this._http.get(this.apiUrl + "/hod/getDept-Requests/"+id);
      }

      


      progressTech(id : Number,data: any) {
        return this._http.put(this.apiUrl + "/technician/updateTask/"+id, data);
      }

  
      closeLog(id : Number,data: any) {
        return this._http.put(this.apiUrl + "/admin/log-close/"+id, data);
      }


      totalcomplete(): Observable<any> {
        return this._http.get(`${this.apiUrl + "/admin/viewTotalComplete"}`);
      }

      totalTech(): Observable<any> {
        return this._http.get(`${this.apiUrl + "/admin/viewNumTechnicians"}`);
      }
    

      allreq(): Observable<any> {
        return this._http.get(`${this.apiUrl + "/admin/requests"}`);
      }

       // +artisan_id+admin_id
  assignavailArtisan(id:Number,data:any):Observable<any>{
    return this._http.post(`${this.apiUrl}/admin/`+ "assignTechnician/"+ id,data);

  }
  
  getInprogressTasks():Observable<any>{
    return this._http.get(`${this.apiUrl + "/admin/viewInProgressTasks"}`)

  }

  getCompletedTasks():Observable<any>{
    return this._http.get(`${this.apiUrl + "/admin/viewCompletedTasks"}`);
  }

  getLogServiceStatistics():Observable<any>{
    return this._http.get(`${this.apiUrl + "/admin/ServiceStatistics"}`)

  }

  //delete request
  deleteReq(id : Number) {
        return this._http.get(this.apiUrl + "/admin/deleteRequest/"+id);
      }
      
      
}

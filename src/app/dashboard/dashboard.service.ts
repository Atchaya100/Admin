import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class BotService{
 private BotUrl="https://bot-oj1y.onrender.com/telegram";
 private httpOptions={
 
     headers: new HttpHeaders({
        
         'Content-Type':'application/json'
     })
 }

     id=0;

constructor(private _http: HttpClient){}
  getMsgs(){
    const l=`${this.BotUrl}/messages`;
    return this._http.get(l,this.httpOptions);
  }
  getUsers(){
    const l=`${this.BotUrl}/users`;
    return this._http.get(l,this.httpOptions);
  }
  postMsg(formValue:any){
    const l=`${this.BotUrl}`;
    return  this._http.post(l,formValue,this.httpOptions);
  }
  delete(id:Number){
    const l=`${this.BotUrl}/${id}`;
    return  this._http.delete(l,this.httpOptions);
  }
  deleteUser(id:Number){
    const l=`${this.BotUrl}/user/${id}`;
    return  this._http.delete(l,this.httpOptions);
  }
  }


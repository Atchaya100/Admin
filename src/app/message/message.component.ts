import { Component } from '@angular/core';
import { BotService } from '../dashboard/dashboard.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
constructor(private service:BotService){}
post!:string
msg:any=[]
 ngOnInit(){
 this.view()
}
delete(id:Number){
  const i=confirm("Are you sure to delete the post?")
  if(i==true){
  this.service.delete(id).subscribe(
    data=>this.view()
  )
  }
}
view(){
  this.service.getMsgs().subscribe(
    (data:any)=> this.msg=data
    )
  }
Post(formValue:any){
 this.service.postMsg(formValue).subscribe(
  data=>this.view()
 )
 }

}

import { Component } from '@angular/core';
import { BotService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user:any=[]
  constructor(private service:BotService){}
  ngOnInit(){
    this.view()
   }
   delete(id:Number){
    const i=confirm("Are you sure to block the person?")
    if(i==true){
     this.service.deleteUser(id).subscribe(
       data=>this.view()
     )
    }
   }
   view(){
     this.service.getUsers().subscribe(
       data=>{ this.user=data,console.log(data)}
       )
     }
}

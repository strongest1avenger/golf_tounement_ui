//Imports all the necessary dependencies
import { Component, OnInit, Input } from '@angular/core';
import { Socket } from 'ngx-socket-io';
//Relevent component selectors
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  player: any;

  constructor(private socket: Socket) { }
//Implements the onInit lifecycle hook and socket to inject an instance from the socket serveer
  ngOnInit() {
    this.socket.on('data-update', (data: any) => {
      console.log(data)
      this.player = data;
    });
  }
}

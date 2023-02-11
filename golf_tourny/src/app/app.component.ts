import { Component, OnInit, Input } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  player: any;

  constructor(private socket: Socket) { }

  ngOnInit() {
    this.socket.on('data-update', (data: any) => {
      console.log(data)
      this.player = data;
    });
  }
}
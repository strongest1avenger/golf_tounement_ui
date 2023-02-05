import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';


@Component({
  selector: 'app-golfui',
  templateUrl: './golfui.component.html',
  styleUrls: ['./golfui.component.css']
})
export class GolfuiComponent implements OnInit {
  players: any;
  socket: any;

  ngOnInit() {
    this.socket = io('https://mst-full-stack-dev-test.herokuapp.com/');
    this.socket.on('data-update', (data: any) => {
      this.players = data;
    });
  }
}

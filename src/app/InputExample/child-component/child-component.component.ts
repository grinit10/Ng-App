import { Server } from './../../shared/models/Server';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Output() serverSlected = new EventEmitter();

  @Input()
  server: Server;
  constructor() {
  }

  ngOnInit() {
  }

  selectServer = () => {
    this.serverSlected.emit(this.server);
  }
}

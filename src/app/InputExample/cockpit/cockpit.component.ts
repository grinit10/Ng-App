import { ServerType } from './../../shared/enums/ServerType';
import { Server } from './../../shared/models/Server';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { a } from '@angular/core/src/render3';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverAdded = new EventEmitter();
  @Output() blueprintAdded = new EventEmitter();
  server: Server = new Server('', '', ServerType.Server);

  constructor() { }

  ngOnInit() {
  }

  addServer = (name, description) => {
    this.server.name = name.value;
    this.server.decription = description.value;
    this.server.type = ServerType.Server;
    this.serverAdded.emit(this.server);
  }

  addBlueprint = (name, description) => {
    this.server.name = name.value;
    this.server.decription = description.value;
    this.server.type = ServerType.Blueprint;
    this.blueprintAdded.emit(this.server);
  }
}

import { ServersService } from './../services/servers/servers.service';
import { ServerType } from './../../shared/enums/ServerType';
import { Server } from './../../shared/models/Server';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  server: Server;

  constructor(private serverService: ServersService) {
    this.server = this.server ? this.server : new Server('', '', ServerType.Server);
  }

  ngOnInit() {
  }

  addServer = (name, description) => {
    this.server = new Server(name.value, description.value, ServerType.Server);
    this.serverService.addServer(this.server);
  }

  addBlueprint = (name, description) => {
    this.server = new Server(name.value, description.value, ServerType.Blueprint);
    this.serverService.addServer(this.server);
  }
}

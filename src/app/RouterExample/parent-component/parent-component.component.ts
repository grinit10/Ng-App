import { LoggingService } from './../services/logging/logging.service';
import { Server } from './../../shared/models/Server';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CockpitComponent } from '../cockpit/cockpit.component';
import { ServersService } from '../services/servers/servers.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  @ViewChild(CockpitComponent) cockpit: CockpitComponent;

  servers: Server[] = [];

  constructor(private loggingService: LoggingService, private serversService: ServersService) {
    serversService.serverAdded.subscribe(
      (srvr: Server) => {
        loggingService.logToConsole(srvr);
      }
    );
  }

  ngOnInit() {
    this.servers = this.serversService.servers;
  }

  setSelected = (server: Server) => {
    this.cockpit.server = server;
  }
}

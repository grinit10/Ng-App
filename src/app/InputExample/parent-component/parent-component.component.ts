import { Server } from './../../shared/models/Server';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CockpitComponent } from '../cockpit/cockpit.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  @ViewChild(CockpitComponent) cockpit: CockpitComponent;

  servers: Server[] = [];

  constructor() { }

  ngOnInit() {
  }

  addServer = (server: Server) => {
    this.servers.push(this.cockpit.server);
  }
}

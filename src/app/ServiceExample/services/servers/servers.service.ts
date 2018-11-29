import { Injectable, EventEmitter } from '@angular/core';
import { Server } from '../../../shared/models/Server';

@Injectable()
export class ServersService {
  servers: Server[];
  serverAdded = new EventEmitter();

  constructor() {
    this.servers = this.servers ? this.servers : [];
  }
  addServer = (server) => {
    this.servers.push(server);
    this.serverAdded.emit(server);
  }

  updateServer = (server) => {
    let srvr =  this.servers[server.id];
    srvr = server;
  }
}

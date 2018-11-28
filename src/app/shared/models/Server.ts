import { ServerType } from '../enums/ServerType';
import { Guid } from 'guid-typescript';

export class Server {
  public id: string;
  constructor  (public name: string, public decription: string, public type: ServerType) {
    this.id = Guid.create().toString();
  }
}

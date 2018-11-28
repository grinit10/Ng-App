import { ServerType } from '../enums/ServerType';

export class Server {
  constructor (public name: string, public decription: string, public type: ServerType) {}
}

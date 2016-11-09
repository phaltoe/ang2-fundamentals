import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    `First Message`,
    `Now, a second messagggge!`,
    `Waaaaait, we've got one more!`
  ];

  constructor() { }

}

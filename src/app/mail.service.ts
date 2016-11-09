import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text:`First Message`},
    {id: 1, text:`Now, a second messagggge!`},
    {id: 2, text:`Waaaaait, we've got one more!`}
  ];

  update(id, text){
    this.messages = this.messages.map(message =>
      message.id === id ? {id, text} : message
      )
  }

  constructor() { }

}

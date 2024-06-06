import { Component } from '@angular/core';
import { BotService } from '../services/bot/bot.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrl: './bot.component.css'
})
export class BotComponent {
  userInput: string = '';
  messages: { text: string, user: boolean }[] = [];
  isDataLoaded: boolean = false;

  constructor(private chatService: BotService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.chatService.loadChatData().subscribe(() => {
      this.isDataLoaded = true;
    });

  }

  onMessageclose(){
this.dialog.closeAll()
  }
  sendMessage() {
    if (this.userInput.trim() !== '' && this.isDataLoaded) {
      this.messages.push({ text: this.userInput, user: true });
      const botResponse = this.chatService.getResponse(this.userInput);
      this.messages.push({ text: botResponse, user: false });
      this.userInput = '';
    } else if (!this.isDataLoaded) {
      this.messages.push({ text: "Data is still loading. Please wait.", user: false });
    }
  }

}

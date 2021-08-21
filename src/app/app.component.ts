import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Hello form BridgeLabz!';
  imgUrl: string;
  url: string ;
  userName: string = "";


ngOnInit(): void {
  this.title = "Hello form BridgeLabz.";
  this.imgUrl = "../assets/Bridgelabz.jpg";
  this.url = "https://www.bridgelabz.com/";
}

onClick($event: Object) {
  console.log("save button is cliked!", $event);
  window.open(this.url, "_blank")
}
}

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
  nameError: string;


ngOnInit(): void {
  this.title = "Hello form BridgeLabz.";
  this.imgUrl = "../assets/BridgeLabz-2.jpg";
  this.url = "https://www.bridgelabz.com/";
  this.userName = "";
}

onClick($event: Object) {
  console.log("save button is cliked!", $event);
  window.open(this.url, "_blank")
}

onInput($event: any) {
  console.log("Change event Occured#", $event.data);
  const nameRegex = RegExp ('^[A-Z][a-zA-Z\\s]{2,}$');
  if (nameRegex.test(this.userName)) {
    return this.nameError = "";
  } else {
    return this.nameError = "Name is Incorrect!";
  }
}
}

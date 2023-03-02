import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private buttonHandler: {[key: string]: any} = {
    first: this.handleFirst,
    second: this.handleSecond
  }



  public title: string = "Time Tracker"
  public sidebarOpen: boolean = false;

  public list: string[] = []

  constructor() {
    this.list = Object.keys(this.buttonHandler)
  }





  public onMenuClick(): void {
    this.sidebarOpen = !this.sidebarOpen
    console.log("Hamburger clicked")
  }

  public closeSidebar(): void {
    this.sidebarOpen = false;
  }



  public buttonClickedHandler(item: string): void {
    //alert()
    this.buttonHandler[item]()
  }

  private handleFirst(): void {
    console.log("Handle first!@!!")
  }

  private handleSecond(): void {
    console.log("Handle Second!")
  }




}

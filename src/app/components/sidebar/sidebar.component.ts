import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() sidebarOpen: boolean = false;
  @Input() list: string[] = [];

  @Output() onClose: EventEmitter<void> = new EventEmitter()
  @Output() onButtonClick: EventEmitter<string> = new EventEmitter()

  public colseSidebar(): void {
    this.onClose.emit();
  }

  public onClick(item: string): void {
    this.onButtonClick.emit(item)
  }


  /**
   * Send list to sidebar component
   * render list in buttons
   * on button click - emit event with name
   * catch event in header component
   */


}

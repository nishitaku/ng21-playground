import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-click-event-page',
  templateUrl: './click-event-page.html',
})
export class ClickEventPage {
  value = signal(0);
  onClickLabel() {
    console.warn('label clicked');
  }

  onClickInput() {
    console.warn('input clicked');
  }

  onClickButton() {
    console.warn('button clicked');
    this.value.update((v) => v + 1);
  }

  onClickOuterDiv() {
    console.warn('outer div clicked');
  }

  onClickInnerDiv() {
    console.warn('inner div clicked');
  }
}

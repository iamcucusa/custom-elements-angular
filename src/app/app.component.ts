import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  button: any;

  onClick(event: CustomEvent) {
    this.button = event.detail;
    this.button.showActive();
  }

  toogleAction() {
    if (this.button) {

      if (this.button.isLoading) {
        this.button.done();
      } else {
        this.button.showActive();
        this.button.showLoading();
      }

    } else {
      alert('Click one button first');
    }
  }

  toogleDisabled() {
    if (this.button) {
      this.button.isDisabled = !this.button.isDisabled;
    } else {
      alert('Click one button first');
    }
  }

}

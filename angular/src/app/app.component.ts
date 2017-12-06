import { Component, ViewChild, ElementRef } from '@angular/core';
import '../../../index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('snackbar') snackbar: ElementRef;
  title = 'app';
  snackbarCount = 1;
  snackbarValue = 99;
  showSnack() {
    this.snackbar.nativeElement.show({
			message: `Hello Snack ${this.snackbarCount++}`,
		});
  }
}

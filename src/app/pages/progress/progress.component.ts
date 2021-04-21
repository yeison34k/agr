import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls : [ './progress.component.css' ]
})
export class ProgressComponent {
  
  progress = 0;

  get getProgress():string {
    return this.progress + '%';
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls : [ './progress.component.css' ]
})
export class ProgressComponent implements OnInit {
  ngOnInit(): void { }

  progress: number = 0;


  get getProgress() {
    return this.progress + '%';
  }

}

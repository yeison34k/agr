import { Component, OnInit } from '@angular/core';
import { SittingService } from '../services/settings.service';

declare function customInitFuntions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  year = new Date().getFullYear();

  constructor( private setting: SittingService) { }

  ngOnInit(): void { 
    customInitFuntions();
  }

}

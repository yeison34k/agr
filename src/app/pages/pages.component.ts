import { Component, OnInit } from '@angular/core';
import {  SettingsService } from '../services/settings.service';

declare function customInitFuntions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  year = new Date().getFullYear();

  constructor( private settings: SettingsService) { }

  ngOnInit(): void { 
    customInitFuntions();
  }

}

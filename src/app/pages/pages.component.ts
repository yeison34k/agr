import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  year = new Date().getFullYear();
  public selectedThme = document.querySelector('#theme');
  private themeString = './assets/css/colors/purple-theme.css';

  ngOnInit(): void { 
    const url = localStorage.getItem('theme') || this.themeString;
    this.selectedThme.setAttribute("href", url);
  }

}

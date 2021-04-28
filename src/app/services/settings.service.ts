import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public selectedThme = document.querySelector('#theme');
  private themeString = './assets/css/colors/purple-theme.css';

  constructor() { 
    const url = localStorage.getItem('theme') || this.themeString;
    this.selectedThme.setAttribute("href", url);
  }

  changeTheme(theme: string): void {
    const url =  './assets/css/colors/'+ theme +'.css';
    this.selectedThme.setAttribute("href", url);
    localStorage.setItem("theme", url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void{
    const links = document.querySelectorAll(".selector");

    links.forEach(x => {
      x.classList.remove("working");
      const btnTheme = x.getAttribute('data-theme');
      const btnThemeUrl = './assets/css/colors/'+ btnTheme +'.css';
      const currentTheme = this.selectedThme.getAttribute("href");

      if(btnThemeUrl == currentTheme) {
        x.classList.add('working')
      }
    });
  }
}

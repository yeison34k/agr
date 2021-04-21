import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: [ 'account-settings.css' ]
})
export class AccountSettingsComponent implements OnInit {
  
  ngOnInit(): void {
    this.checkCurrentTheme();
  }
  
  private selectedThme = document.querySelector('#theme');

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

import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: [ 'account-settings.css' ]
})
export class AccountSettingsComponent implements OnInit {
  
  constructor(private settings: SettingsService) { }

  ngOnInit(): void {
    this.settings.checkCurrentTheme();
  }
  
  private selectedThme = document.querySelector('#theme');

  changeTheme(theme: string): void {
    this.settings.changeTheme(theme);
  }

}

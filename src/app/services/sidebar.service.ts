import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any[] = [
    {
      title: "Dashboard",
      icon: "mdi mdi-gauge",
      submenu: [
        { title: "Main", url: "/" },
        { title: "Grafica", url: "grafica1" },
        { title: "Progress", url: "progress" },
        { title: "promises", url: "promises" },
        { title: "rxjs", url: "rxjs" },
      ]
    }
  ]

}

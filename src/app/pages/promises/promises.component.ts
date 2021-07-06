import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {
  
  ngOnInit(): void {
    this.getUsuarios().then(users=> console.log('users', users))
  }

  getUsuarios():Promise<unknown> {

    return new Promise((resolve) => {
      fetch("https://reqres.in/api/users?page=2")
        .then(res => res.json())
        .then(body => resolve(body.data))
    })
  }


}

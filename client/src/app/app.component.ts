import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'homebase';
  users: any;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getUsers().subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed, Tommy the Dev')
    })
  }

}

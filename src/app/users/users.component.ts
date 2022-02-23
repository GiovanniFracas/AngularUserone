import { Component, OnInit } from '@angular/core';
import * as utenteSrv from'src/app/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users!: User[];

  constructor() {}

  ngOnInit(): void {
    const utenti = utenteSrv.getUsers();
    this.users= utenti
  }


}

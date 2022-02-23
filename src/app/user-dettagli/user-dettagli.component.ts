import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-user-dettagli',
  templateUrl: './user-dettagli.component.html',
  styleUrls: ['./user-dettagli.component.scss']
})

export class UserDettagliComponent implements OnInit {

  userone!: User;
  sub!: Subscription;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.sub = this.router.params.subscribe((params: Params) => {
      this.userone = {
        'Nome': params['Nome'],
        'mail': params['mail'],
        'ruolo': params['ruolo']

      }
    })
  }
  ngOnDestroy(): void {

    this.sub.unsubscribe;
  }
}




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }
  post2:any;

  ngOnInit(): void {
    this.post2 = {
      id: this.router.snapshot.params['id'],
      title: this.router.snapshot.params['title'],
      body: this.router.snapshot.params['body'],
      active: this.router.snapshot.params['active'],
      author: this.router.snapshot.params['author'],
      type:this.router.snapshot.params['type'],
  }}

}


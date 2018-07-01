import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../models/event.model';

@Component({
  selector: 'sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit {

  @Input()sessions:ISession[];

  constructor() { }

  ngOnInit() {
  }

}

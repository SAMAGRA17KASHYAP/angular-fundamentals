import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../models/event.model';

@Component({
  selector: 'sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit,OnChanges {

  @Input()sessions:ISession[];
  @Input() filterBy:string='all';
  @Input() sortBy:string='name';
  filteredSessions:ISession[];

  constructor() { }

  ngOnInit() {
    this.filteredSessions = this.sessions;  
  }

  ngOnChanges(){
    if(this.sessions){
      this.filterByFunc(this.filterBy);
      this.sortBy === 'name' ?
          this.filteredSessions.sort(sortByNameAsc)
          :this.filteredSessions.sort(sortByVotesDesc);
    }
  }

  filterByFunc(filterBy:string){
    
    if(this.filterBy === 'all')
      this.filteredSessions = this.sessions;  
    else
      this.filteredSessions = this.sessions.filter(x=>x.level.toLowerCase() === this.filterBy.toLowerCase());
  }
}
function sortByNameAsc(s1:ISession,s2:ISession){
  if(s1.name > s2.name)
    return 1;
  else if (s1.name === s2.name)
    return 0;
  else
    return -1;
}

function sortByVotesDesc(s1:ISession,s2:ISession){
  return s2.voters.length - s1.voters.length;
}
import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQ_TOKEN } from '../jquery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input() title:string;

  @Input() elementId:string;

  @ViewChild("modelElememt") el:ElementRef;

  constructor(@Inject(JQ_TOKEN)private $:any) { }

  ngOnInit() {
    this.$(this.el.nativeElement).modal('hide');
  }


}

import { Directive, ElementRef, Inject, OnInit, Input } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModelTriggerDirective implements OnInit{

  el:HTMLElement;

  @Input('modal-trigger') modalId;

  constructor(ref:ElementRef,@Inject(JQ_TOKEN)private $:any) { 
    this.el = ref.nativeElement;
  }

  ngOnInit(){
    this.el.addEventListener('click',e=>{
      this.$(`#${this.modalId}`).modal({});
    });
  }

}

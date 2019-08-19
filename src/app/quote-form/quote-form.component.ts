import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quotes} from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent {
  
  newQuotes = new Quotes(0,"","","", new Date());
     @Output() addQuotes = new EventEmitter<Quotes>();

     submitQuotes(){
   this.addQuotes.emit(this.newQuotes);
   this.newQuotes = new Quotes(0,"","","", new Date());
     }

  constructor(){  }

  ngOnInit(){

  }
}

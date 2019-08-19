import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() myquotes: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  myquotesDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myquotes: Quotes[] = [
  // new Quotes(1, 'Appreciate those early influences and what they have done for you.', 'Willie Davis', new Date(2019,6,17)),
  new Quotes(1, 'Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you do not take the shot', 'Wayne Gretzky ', 'Naomi Sigu', new Date(2019,6,17)),
  new Quotes(2, 'Appreciate those early influences and what they have done for you.', 'Willie Davis, ','Naomi Sigu', new Date(2019,8,17)),
  new Quotes(3, 'No one becomes great by doing Nothing.', 'Joseph Adediji','Naomi Sigu', new Date(2019,6,18)),
  new Quotes(4, 'When we have respect for ourselves and others, we gravitate towards connections that encourage that.','Unknown', 'Naomi Sigu', new Date(2019,7,18)),
  new Quotes(5, 'Together we can change the world, just one random act of kindness at a time. Ron Hall','Ron Hall', 'Naomi Sigu', new Date(2019,7,18)),
];

addNewQuotes(Quotes){
    let myquotesLength = this.myquotes.length;
    Quotes.id = myquotesLength+1;
    Quotes.completeDate = new Date(Quotes.completeDate)
    this.myquotes.unshift(Quotes)
    alert(`Hi ${Quotes.publisher}, Your Quote has been Published to the Top of the List. Thank You!`);
  }

  toggleDetails(index){
    this.myquotes[index].showDescription = !this.myquotes[index].showDescription;
  }

  deleteQuotes(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.myquotes[index].name}?`)

      if (toDelete){
        this.myquotes.splice(index,1)
      }
    }
  }
// votingIncrease(index){
//   this.myquotes[index].upvote = this.myquotes.upvote + 1;
// }
// quoteHighlight(index){
//   this.myquotes[index].upvote = appHighlight [highlightColor]=`"yellow"`
// }


  constructor() { }

  ngOnInit() {
  }

}

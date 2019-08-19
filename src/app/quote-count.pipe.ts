import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteCount',
})
export class QuoteCountPipe implements PipeTransform {

  transform(value: any) : number {
   const today:Date = new Date(); //get current date and time
   const todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(),today.getDate())
   const dateDifference = Math.abs(todayWithNoTime - value) //returns value for miliseconds
   const secondsInDay = 86400; //60 seconds * 60 Minutes in an hour * 24 hours in a day
   const dateDifferenceSeconds = dateDifference*0.001; //converts  miliseconds to seconds
   const dateCounter = Math.floor(dateDifferenceSeconds/secondsInDay);


    if (dateCounter >= 1 && value < todayWithNoTime){
      return dateCounter;
    }else {
        return value;
      }
  }

}

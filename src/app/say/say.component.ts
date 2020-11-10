import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-say',
  templateUrl: './say.component.html',
  styleUrls: ['./say.component.css']
})
export class SayComponent implements OnInit {

  quotes :Quotes[] = [
    
    new Quotes(1,'Bernard Akaka', "The greatest glory in living lies not in never falling, but in rising every time we fall." 
    , new Date(2020,12,12)),
    new Quotes(1,'Craig Olonyi', "The way to get started is to quit talking and begin doing.", new Date(2020,12,12)),
    new Quotes(1,'James Nandi', "If life were predictable it would cease to be life, and be without flavor.", new Date(2020,12,12)),
    new Quotes(1,'Victor Wanyama', "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", new Date(2020,12,12)),
    new Quotes(1,'Nelson Mandela', "Life is what happens when you're busy making other plans.", new Date(2020,12,12)),
  
  ];
  like(index){
    this.quotes[index].like++;
  }
  unlike(index){
    this.quotes[index].unlike++;
  }
  deleteThisQuote(deleteQuote,index){
    
    if(deleteQuote){
      this.quotes.splice(index ,1)
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.author = quoteLength+1;
    quote.day = new Date(quote.day)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}

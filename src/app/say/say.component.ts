import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-say',
  templateUrl: './say.component.html',
  styleUrls: ['./say.component.css']
})
export class SayComponent implements OnInit {

  quotes :Quotes[] = [
    
    new Quotes('First Quote','If you cant run , walk','Craig OLonyi','10-09-2017'),
    new Quotes('Second Quote','You never walk alone','Praise OJ','08-08-2015'),
    new Quotes('Third Quote','Be yourself; everyone else is already taken.','James Joel','1-07-2014'),
    new Quotes('Fourth Quote','Asiyeskia la mkuu , huvunjika guu','Martin Luther','10-06-2013'),
    new Quotes('Fifth Quote','Never accept defeat','Donald Trump','19-02-2012'),
    new Quotes('Sixth Quote','In God we Trust','Jesus Christ','11-11-2011'),

  ];

  deleteThisQuote(deleteQuote,index){
    
    if(deleteQuote){
      this.quotes.splice(index ,1)
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

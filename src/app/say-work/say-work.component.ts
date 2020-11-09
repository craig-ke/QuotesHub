import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-say-work',
  templateUrl: './say-work.component.html',
  styleUrls: ['./say-work.component.css']
})
export class SayWorkComponent implements OnInit {

  @Input() quotes :  Quotes;
  @Output() deleteQuote = new EventEmitter<boolean>();

  Delete(removeQuote:boolean) {
     this.deleteQuote.emit(removeQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

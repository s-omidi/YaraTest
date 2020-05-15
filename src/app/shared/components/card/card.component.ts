import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from 'src/app/core/models/User';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  //get article from parent (articleList and article component)

  @Input() item: IArticle;
  @Input() showMore: boolean
  constructor() { }

  ngOnInit(): void {
  }

}

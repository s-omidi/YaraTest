import { Component, OnInit } from '@angular/core';
import { Repository } from '../../core/services/Repository';

import { IArticle } from 'src/app/core/models/Article';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  article: IArticle[]
  //inject Repository service to use its methos etc getData
  constructor(private repo:Repository) { }

  ngOnInit(): void {
    this.getAllList();
  }

  //get all posts by Repository
  getAllList=()=>{
    let serviceName = 'posts'
    this.repo.getData(serviceName).subscribe((res:IArticle[])=>{
     this.article= res
     console.log(this.article)
    })

  }

}

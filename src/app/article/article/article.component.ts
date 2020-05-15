import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Repository } from '../../core/services/Repository';
import { IArticle } from 'src/app/core/models/User';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  id:string;
  article: IArticle
  constructor(private activeRoute:ActivatedRoute,private repo:Repository) {
     this.id= this.activeRoute.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle=()=>{
   let serviceName= `posts/${this.id}`;
   this.repo.getData(serviceName).subscribe((res:IArticle) =>{
     this.article = res;
     debugger;
   })
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/components/main/main.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path: '',
    data: {
      base: true
    },
    component: MainComponent,
    children :[
      {
        path:'Home',
        loadChildren:()=> import('./article/article.module').then(m=>m.ArticleModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

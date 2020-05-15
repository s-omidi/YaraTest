import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../core/services/loader';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading: boolean;
  color:string;
  mode:string;
  value:number;
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((res) => {
      this.color = 'primary';
      this.mode = 'indeterminate';
      this.value = 50;
      this.loading = res;

    });
  }

}

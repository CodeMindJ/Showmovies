import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieApiServiceService) {}


  ngOnInit(): void{
    this.bannerData();
    this.trendingData();
  }

  bannerResult:any=[];
  trendingMovieResult:any=[];

  // bannerdata
bannerData(){
  this.service.bannerApiData().subscribe((result) =>{
    console.log(result, 'bannerresult#');
    this.bannerResult = result.results;
  });
}
    // trendingdata
    trendingData()
    {
      this.service.trendingMovieApiData().subscribe((result) => {
        console.log(result, 'trendingresult#');
        this.trendingMovieResult = result.results;
        // this.trendingMovieResult
      });
    }
}

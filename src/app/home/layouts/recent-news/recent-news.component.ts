import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-news',
  templateUrl: './recent-news.component.html',
  styleUrls: ['./recent-news.component.scss']
})
export class RecentNewsComponent implements OnInit {
  config= {
    spaceBetween: 50,
    slidesPerView: 3,
    breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1.25,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2.25,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3.35,
            spaceBetween: 40
          },
         
        }
  };
  constructor() { }

  ngOnInit(): void {
  }

}

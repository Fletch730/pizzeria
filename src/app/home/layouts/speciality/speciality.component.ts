import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Swiper,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss']
})
export class SpecialityComponent implements OnInit {

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

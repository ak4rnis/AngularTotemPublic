import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperOptions } from 'swiper';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
register();
const swiperParams: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 50,
};
const swiper = new Swiper('.swiper', swiperParams);

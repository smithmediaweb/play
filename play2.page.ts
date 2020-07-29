import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-play2',
  templateUrl: './play2.page.html',
  styleUrls: ['./play2.page.scss'],
})
export class Play2Page  {
  @ViewChild('slides', { static: false }) slides: IonSlides;
  webmedia: any;

  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: false
  };

//Item object for Nature
sliderOne =
{
  isBeginningSlide: true,
  isEndSlide: false,
  slidesItems: [
    { icon:'assets/images/1a.png', audio:'./assets/mp3/1.wav'},
    { icon:'assets/images/2a.png', audio:'./assets/mp3/2.wav'},
    { icon:'assets/images/3a.png', audio:'./assets/mp3/3.wav'},
    { icon:'assets/images/4a.png', audio:'./assets/mp3/4.wav'},
  ]
};

  constructor( ) {}
  

    play(soundFile){		
    this.webmedia = new Audio(soundFile);
    this.webmedia.load();
      console.log(soundFile);
        if(this.webmedia) {
          // this.webmedia.pause();
        }
        this.webmedia.play();

    
    }

    onSlideLoad(){
      // this.slides.slideNext()
      console.log('It loads!')
      this.slides.getActiveIndex().then((index: number) => {
        console.log(index);
    });
      
    }

    next() {  
      
      this.slides.slideNext();
      


    
}
    prev() {   
      this.slides.slidePrev(); 
    }
    slideChanged(audio) {
      this.slides.getActiveIndex().then((index: number) => {
        // this.play(soundFile)
          // console.log(index);
          
      });
  } 
}
  
    //Move to Next slide
 

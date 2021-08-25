import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, Platform } from '@ionic/angular';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  @ViewChildren('Slider')
  slider: QueryList<IonSlides>;

  cardsSliderArray: any;
  showNext = false;
  public sliderOpts: any = null;
  constructor(
    private router: Router,
    private platform: Platform
  ) {
    setTimeout(() => {
      this.cardsSliderArray = this.slider.toArray();
    }, 1000);
  }

  ngOnInit() {
    //this.showNext = true;
    this.sliderOpts = {
      effect: 'slide',
      initialSlide: 0,
    };
  }

  ionViewDidEnter() {
    //this.viewEntered = true;
    this.showNext = true;
    //this.cardsSliderArray.update();
  }

  skipTo(index) {
    console.log(index);
    this.cardsSliderArray[0].slide_to(index);
  }

  goto(flag) {
    if (flag) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/plans']);
    }
  }
}

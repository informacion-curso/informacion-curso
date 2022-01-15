import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IonSlides, Platform } from '@ionic/angular';
import { ApiService } from './../services/api.service';
import { LoadingService } from './../services/loading.service';

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
  questions: Array<Object>;
  q = [];
  p1;
  p2;
  p3;
  p4;
  p5;

  constructor(
    private router: Router,
    private platform: Platform,
    private apiService: ApiService,
    private loadingService: LoadingService
  ) {
    setTimeout(() => {
      this.cardsSliderArray = this.slider.toArray();
    }, 1000);
    this.questions = [];
  }

  async ngOnInit() {
    //this.showNext = true;
    this.sliderOpts = {
      effect: 'slide',
      initialSlide: 0,
    };
    const questionResponse = await this.apiService.getQuestions();
    this.q = questionResponse.data;
    if (questionResponse.data) {
      questionResponse.data.map((m) => {
        this.questions.push({
          show: true,
          question: m.pregunta,
        });
      });
    }

    this.p1 = this.q[0].pregunta;
    this.p2 = this.q[1].pregunta;
    this.p3 = this.q[2].pregunta;
    this.p4 = this.q[3].pregunta;
    this.p5 = this.q[4].pregunta;
  }

  ionViewDidEnter() {
    //this.viewEntered = true;
    this.showNext = true;
    //this.cardsSliderArray.update();
  }

  async skipTo(index) {
    console.log(index);
    const loading = await this.loadingService.showSimpleLoader(
      'Cargando siguiente pregunta....',
      500
    );
    loading.present();
    setTimeout(() => {
      this.cardsSliderArray[0].slideTo(index);
    }, 550);
    //loading.dismiss()
  }

  goto(flag) {
    if (flag) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/plans']);
    }
  }

  async submit(form: NgForm) {
    const loading = await this.loadingService.showSimpleLoader(
      'Enviando respuesetas....',
      500
    );
    loading.present();
    console.log(form.value);
  }
}

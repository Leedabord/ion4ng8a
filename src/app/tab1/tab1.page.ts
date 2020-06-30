import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PopoverController, ToastController } from '@ionic/angular';
import { Tab2aPage } from '../tab2a/tab2a.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

favQuotesURL = 
 'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/pluART/rec1cU5MrjwTj3kGy?api_key=key66fQg5IghIIQmb' ;
  
//  'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/FavQuotes?api_key=key66fQg5IghIIQmb'; 
// readonly favQuotesURL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
// readonly favQuotesURL = 'https://jsonplaceholder.typicode.com/posts';

quotes: Observable<any>;

  constructor(
    private httpC: HttpClient, 
    public popoverController: PopoverController,
    public toastCtrl: ToastController
    ) {
//    this.quotes = this.httpC.get(this.favQuotesURL);
    console.log('qq: ' , this.quotes);

  fetch( 'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/FavQuotes?api_key=key66fQg5IghIIQmb' ) 
   .then(res => res.json()) 
   .then (recs => { const qq = recs; // JSON.parse(recs) .records; 
     this.quotes = qq.records;
    console.log('recs:: ', this.quotes); });

//  }

//  getQuotes() {  
//    const httpH = new HttpHeaders().set('Authorization', 'Bearer key66fQg5IghIIQmb');
//    const params = new HttpParams().set('userId', '1');
//  this.posts = this.http.get(this.ROOT_URL + '/posts', { params })    
//  fetch(this.favQuotesURL) .then() .then (recs => { });
// fetch('https://api.airtable.com/v0/app0hohtq4b1nM0Kb/pluART/rec1cU5MrjwTj3kGy?api_key=key66fQg5IghIIQmb')
// .then(res => res.json()) // Read the response stream as a json, json() function also returns a promise, and .then can return a promise which will cause the next .then to wait for it to resolve
// .then(recs => {
	// We will get the posts of the first user
//  const firstUser = recs; console.log(firstUser);
//});
// return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
//    this.quotes = this.httpC.get(this.favQuotesURL);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: Tab2aPage,
      event: ev,
      popoverController: this.popoverController,
      backdropDismiss: true
    });
    return await popover.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
      position: 'middle',
      duration: 3000
    });
    toast.present();
  }

}

/* 
  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Your internet connection appears to be offline. Data integrity is not guaranteed.',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.onDidDismiss(this.dismissHandler);
    toast.present();
  }

  private dismissHandler() {
    console.log('Toast onDidDismiss()');
  }

  constructor(public toastController: ToastController) {}

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}


*/

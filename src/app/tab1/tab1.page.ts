import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';

import { PopoverController, ToastController } from '@ionic/angular';
import { Tab2aPage } from '../tab2a/tab2a.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

readonly favQuotesURL =   
  'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/FavQuotes?api_key=key66fQg5IghIIQmb'; 

//  'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/FavQuotes?api_key=key66fQg5IghIIQmb'; 
// 'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/pluART/rec1cU5MrjwTj3kGy?api_key=key66fQg5IghIIQmb' ;
// readonly favQuotesURL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
// readonly favQuotesURL = 'https://jsonplaceholder.typicode.com/posts';
// const httpH = new HttpHeaders().set('Authorization', 'Bearer key66fQg5IghIIQmb');

quotes: Observable<any>;  

  constructor(
    private httpC: HttpClient, 
    public popoverController: PopoverController,
    public toastCtrl: ToastController
    ) {
      this.httpC.get<any>(this.favQuotesURL).subscribe(
      data => {
          this.quotes = data.records;
    //    console.log('qq:: ', this.quotes);
      },
      error => { console.error('http:: That.s an error!', error) }
  )
  }

/* 
// 
totalAngularPackages;
        // Simple GET request with response type <any>
     this.httpC.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
            this.totalAngularPackages = data.total;
      console.log('ngOnInit:: ', this.totalAngularPackages, ' ::');
        });

//  const httpH = new HttpHeaders().set('Authorization', 'Bearer key66fQg5IghIIQmb');
interface SearchResults {
    total: number;
    results: Array<object>;
}
const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
this.http.get<SearchResults>('https://api.npms.io/v2/search?q=scope:angular', { headers }).subscribe(
  data => {
    this.totalAngularPackages = data.total;
  },
  error => { console.error('There was an error!', error) }
)
*/


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

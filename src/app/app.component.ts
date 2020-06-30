import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

readonly favQuotesURL = 'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/FavQuotes?api_key=key66fQg5IghIIQmb';

quotes: any;

  constructor(
    private httpC: HttpClient, 
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
  //    this.initializeApp();
    this.quotes = this.httpC.get(this.favQuotesURL);
    });
  }
//  initializeApp() {  }

  getQuotes() {  
// return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
    this.quotes = this.httpC.get(this.favQuotesURL);
  }

}

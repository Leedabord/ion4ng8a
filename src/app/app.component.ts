import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

// readonly favQuotesURL = 'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/FavQuotes?api_key=key66fQg5IghIIQmb';
// readonly favQuotesURL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
readonly favQuotesURL = 'https://jsonplaceholder.typicode.com/posts';

aaquotes: Observable<any>;

  constructor(
    private httpC: HttpClient, 
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
  //    this.initializeApp();
    this.aaquotes = this.httpC.get(this.favQuotesURL);
    console.log(this.aaquotes);
    });
  }
//  initializeApp() {  }

  getQuotes() {  
    this.aaquotes = this.httpC.get(this.favQuotesURL);
  }

}

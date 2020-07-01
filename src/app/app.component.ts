import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

//  readonly favQuotesURL = 'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/FavQuotes?api_key=key66fQg5IghIIQmb';
// readonly favQuotesURL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
readonly favQuotesURL = 'https://jsonplaceholder.typicode.com/posts';

aaposts;   // : Observable<any>;

  constructor(
    private httpC: HttpClient, 
    private platform: Platform
    ) {
//     this.platform.ready().then(() => {   })
  }

  ngOnInit() {      
    this.httpC.get<any>(this.favQuotesURL).subscribe(
      data => {
        this.aaposts = data;
      console.log('ngOnInit:: ', this.aaposts, ' ::');
      },
      error => { console.error('AppC:: Thats an error!', error) }
    )
  }

}

/*
totalAngularPackages;
        // Simple GET request with response type <any>
     this.httpC.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
            this.totalAngularPackages = data.total;
      console.log('ngOnInit:: ', this.totalAngularPackages, ' ::');
        });

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

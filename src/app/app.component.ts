import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Book {
  id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  books$ = this.http.get<Book[]>(
    'https://markgoho-rails-7-with-angular-gxq5vrxv3v66-3000.githubpreview.dev/api/v1/books'
  );

  constructor(private http: HttpClient) {}
}

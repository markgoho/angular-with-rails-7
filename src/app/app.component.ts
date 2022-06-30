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
  template: `
    <h1>Books</h1>

    <ng-container *ngFor="let book of books$ | async">
      <h2>{{ book.title }}</h2>
      <p>{{ book.body }}</p>
    </ng-container>
  `,
})
export class AppComponent {
  books$ = this.http.get<Book[]>(
    'https://markgoho-rails-7-with-angular-gxq5vrxv3v66-3000.githubpreview.dev/api/v1/books'
  );

  constructor(private http: HttpClient) {}
}

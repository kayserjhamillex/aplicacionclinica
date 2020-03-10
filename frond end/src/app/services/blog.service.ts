import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Blog} from '../models/Blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // apiUrl='https://sleepy-cove-35277.herokuapp.com/blog';
  apiUrl='https://quiet-journey-49563.herokuapp.com/blog';
  constructor(private http: HttpClient) { }
  getBlogs() {
    return this.http.get(`${this.apiUrl}`);
  }

  getBlog(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}

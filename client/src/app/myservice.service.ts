import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private service: HttpClient) { }
  getData() {
    return this.service.get("http://localhost:5555/getBatches");
  }
}

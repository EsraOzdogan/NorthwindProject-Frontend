import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  //interceptor--araya girme
  //tokenlar kullanıcıya özel tutulmaz bu yüzden kullanıcıdan istek alındığı zaman token var mı diye bakar yoksa bir şey yapmaz 
  //varsa authorization yetkisi bearer artı token vererek yani requesti döndürür
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token");
    let newRequest : HttpRequest<any>;
    newRequest = request.clone({
      headers: request.headers.set("Authorization","Bearer " + token)
    })
    return next.handle(newRequest);
  }
}

//Error
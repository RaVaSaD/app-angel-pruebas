import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logo } from '../models/logo.model';
@Injectable()
export class LogoService {

  logo: Logo;

  constructor(
    public http: HttpClient
  ) { }

  getLogoInfo(): any {
    return this.http.get('assets/mocks/mock.json');
  }

  get Logo() {
    return this.logo;
  }

  setLogo(logoinfo) {
    this.logo = logoinfo;
  }
}

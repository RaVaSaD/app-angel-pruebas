import { Component, OnInit } from '@angular/core';
import { Logo } from '../../models/logo.model';
import { LogoService } from '../../services/logo.service';

@Component({
  selector: 'app-link-image',
  templateUrl: './link-image.component.html',
  styleUrls: ['./link-image.component.css']
})
export class LinkImageComponent implements OnInit {

  logo: Logo;

  constructor(
    public logoService: LogoService
  ) { }

  ngOnInit() {

    this.logoService.getLogoInfo()
      .subscribe(data => {
        console.log('Traigo los datos del Mock: ', data);
        // Guardo datos en setLogo
        console.log('Guardo los datos del Mock en el Service con setLogo');
        this.logoService.setLogo(data);
        // Hago el bindeo
        this.logo = data;
        // Recupero datos para comprobar que los he almacenado en el service
        console.log('Recupero los datos del Service: ', this.logoService.logo);
      });
  }

}

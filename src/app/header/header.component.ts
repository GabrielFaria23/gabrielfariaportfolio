import {AfterContentInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterContentInit{

  selected: string;
  selectedSidenav: string;

  sidenavOpened: boolean;
  
  width: number;
  widthMaiorMenos1160:boolean;

  constructor(private translate: TranslateService) { }
  
  ngAfterContentInit(): void {
    this.selected = 'br';
    this.selectedSidenav ='br';
  }
  
  ngOnInit(): void {
    if(window.innerWidth > 1160){
      this.widthMaiorMenos1160 = true;
    }else{
      this.widthMaiorMenos1160 =false;
    }
  }

  onResize(event) {
    this.width = event.target.innerWidth;
    console.log(this.width);
    
    if(this.width > 1160)
      this.widthMaiorMenos1160 = true;
    else
      this.widthMaiorMenos1160 = false;
  }

  useLanguage(language: string){
    this.translate.use(language);
  }
  
}


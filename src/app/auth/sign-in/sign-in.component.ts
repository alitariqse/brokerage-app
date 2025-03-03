import { Component, Renderer2 } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {

  
    constructor(private renderer: Renderer2, public commonService: CommonService) {
      // Check user preference from localStorage
      const theme = localStorage.getItem('theme');
      this.commonService.isDarkMode = theme === 'dark' ? true : false;
      if (theme === 'dark') {
      this.renderer.addClass(document.body, 'dark-mode');
      localStorage.setItem('theme', 'dark');
      }else{
        this.renderer.removeClass(document.body, 'dark-mode');
        localStorage.setItem('theme', 'light');
      }
    }

 }

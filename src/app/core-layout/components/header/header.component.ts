import { Component, inject, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from 'src/app/auth/sign-in/sign-in.component';
import { CreateOrderComponent } from 'src/app/core-features/create-order/create-order.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  readonly dialog = inject(MatDialog);

  constructor(private renderer: Renderer2, public commonService: CommonService) {
    // Check user preference from localStorage
    const theme = localStorage.getItem('theme');
    this.commonService.isDarkMode = theme === 'dark' ? true : false;
    if (theme === 'dark') {
      this.enableDarkMode();
    }else{
      this.enableLightMode();
    }
  }

  toggleTheme(): void {
    this.commonService.isDarkMode = !this.commonService.isDarkMode;
    if (this.commonService.isDarkMode) {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  enableDarkMode() {
    this.renderer.addClass(document.body, 'dark-mode');
    localStorage.setItem('theme', 'dark');
  }

  enableLightMode() {
    this.renderer.removeClass(document.body, 'dark-mode');
    localStorage.setItem('theme', 'light');
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(CreateOrderComponent, {
      width: '600px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      
      }
    });
  }
  
}

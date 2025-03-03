import { Component, inject, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignInComponent } from 'src/app/auth/sign-in/sign-in.component';
import { CreateOrderComponent } from 'src/app/core-features/create-order/create-order.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  breadCrumbs: Object = {
    'overview': {
      name: 'Account Overview'
    },
    'dashboard': {
      name: 'Account Overview'
    },
    'orders': {
      name: 'Orders'
    },
    'affiliation': {
      name: 'Affiliation'
    },
    'profile': {
      name: 'Profile'
    },
    'achievements': {
      name: 'Achievements'

    }
  }

  readonly dialog = inject(MatDialog);

  constructor(private renderer: Renderer2, public commonService: CommonService, private router: Router) {
    // Check user preference from localStorage
    const theme = localStorage.getItem('theme');
    this.commonService.isDarkMode = theme === 'dark' ? true : false;
    if (theme === 'dark') {
      this.enableDarkMode();
    } else {
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

  generateBreadCrumbs(): string {
    const urlSegments = this.router.url.split('/');
    const baseRoute = urlSegments[1]; // Extracting the base route (e.g., 'dashboard')
    const routeParam = urlSegments[2]; // Extracting the account ID if available
    if (this.breadCrumbs[`${baseRoute}`]) {
      if (baseRoute === 'dashboard' && routeParam) {
        return `Account Overview / #${routeParam}`;
      }
      return this.breadCrumbs[baseRoute].name;
    }

    return ''; // Default breadcrumb if no match found
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

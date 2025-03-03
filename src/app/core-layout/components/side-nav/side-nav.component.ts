import {
  Component,
  ViewChild,
  OnInit,
  HostListener,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;
  isMobile: boolean;
  myFlagForSlideToggle: boolean
  isOpen;
  mode;
  screenWidth: number;
  screenHeight: number;
  constructor(private router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isMobile = window.innerWidth <= 768;
    this.getScreenSize();
  }

  async ngOnInit() {
    this.isMobile = window.innerWidth <= 768;
    this.getScreenSize()
  }

  getScreenSize(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if (this.screenWidth > 1020) {
      this.isOpen = true;
      this.mode = 'push';
    } else {
      this.mode = 'over';
      this.isOpen = false;
    }
  }

  isActive(route: string): boolean {
    return this.router.url == route
  }

}


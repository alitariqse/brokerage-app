import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @Input() qty: number;
  @Input() isWidgetCard: boolean;
  @Input() textOnly: boolean;
  @Input() isTile: boolean;
  @Input() squareOnly:boolean;
  @Input() showMainWidget:boolean = true;
  @HostBinding('class') get hostClasses() {
    if (this.isTile) {
      return 'flex-row gap-2';
    }
    return '';
  }
  getArrayFromQty(): any[] {
    return new Array(this.qty || 1);
  }
}

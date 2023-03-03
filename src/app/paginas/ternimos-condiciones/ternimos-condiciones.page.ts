import { Component, OnInit } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-ternimos-condiciones',
  templateUrl: './ternimos-condiciones.page.html',
  styleUrls: ['./ternimos-condiciones.page.scss'],
})
export class TernimosCondicionesPage implements OnInit {
  canDismiss = false;

  presentingElement = null;

  constructor() { }

  ngOnInit() {
    
  }

  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }
}

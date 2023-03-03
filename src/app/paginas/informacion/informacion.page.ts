import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  constructor() { }
  isModalOpen = false;
  Abierto = false;
  AbiertoSubs = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  AbrirTemperatura(isOpen: boolean) {
    this.Abierto = isOpen;
  }
  AbrirSubstrato(isOpen: boolean) {
    this.AbiertoSubs = isOpen;
  }

  ngOnInit() {
  }

}

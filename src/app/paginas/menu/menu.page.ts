import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
public appPages=[
  {title:'Terminos y condiciones', url:'/ternimos-condiciones', icon:'document'},
  {title:'Comentarios', url:'/comentarios', icon:'chatbubbles'},
  {title: 'Vincular', url: '/vincular', icon: 'bluetooth'},
  { title: 'Guia para el cultivo', url: '/informacion', icon: 'ribbon' },
];

indiceSeleccionado: number =0;
paginas =[
  {
    titulo: 'Inicio',
    url:'/menu/inicio',
    icono:'home'
  },
  {
    titulo: 'Entradas',
    url:'/menu/entradas',
    icono:'book'
  },
]


  constructor(public alertController:AlertController,
    public navCtrl:NavController) { }

  ngOnInit() {
  }
  cambiarIndiceSeleccionado(i:any){
    this.indiceSeleccionado=i;
  }
  async salir(){
    const alert = await this.alertController.create({
      header:'Salir',
      message:'¿Deberitas te quieres salir?',
      buttons:[{
        text:'No',
        handler:()=>{

        }
      },{
        text:'Si',
        handler:()=>{
           localStorage.removeItem('ingresado');
           this.navCtrl.navigateRoot('entrada');
        }
      }
      ]
    });
    await alert.present();
  }

}

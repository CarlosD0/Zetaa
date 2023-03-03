import { Router } from '@angular/router';
import { Usuario } from './../../Models/Usuario';
import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { NgForm } from '@angular/forms';
import { title } from 'process';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:Usuario={
    nombre:'',
    apellidos:'',
    email:'',
    password:''
    };
  constructor(
    private servicio:AuthService,
    private ruta:Router
  ) { }

  ngOnInit() {
  }
  iniciar(form:NgForm){
    if(form.invalid){
      return;
    }
    
    Swal.fire({
    allowOutsideClick:false,
    icon:'info',
    width:600,
    heightAuto:false,
    text:"Espere por favor.."
    });
    Swal.showLoading();
    this.servicio.login(this.usuario)
    .subscribe(resp=>{
      console.log(resp);
      Swal.close();
    
      this.ruta.navigateByUrl('/menu/inicio');
    }, err=>{
      console.log(err.error.error.message);
      Swal.fire({
      icon:"error",
      title:"error al autenticar",
      text:err.error.error.message,
      heightAuto:false
    });
    });
      }
    
    }
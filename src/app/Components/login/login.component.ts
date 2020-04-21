import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel
  

  constructor(private auth:AuthService,
              private router:Router) { }

  ngOnInit() {
  }

  login (form: NgForm){

    if (form.invalid) {return;}

    this.auth.login( this.usuario)
      .subscribe( resp => {
        console.log (resp);
        this.router.navigateByUrl('/inicio');
      }, (err) => {

       
        console.log(err.error.error.message);

      });
  }


}

/*export class LoginComponent implements OnInit {

  usuarios : any[];
  loginForm : FormGroup;
  match : boolean;

  constructor(private data : AuthService, private router : Router) { }

  ngOnInit() {
    this.match = true;
    this.loginForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })
    this.data.getUsuarios()
      .subscribe(
        (data) => this.usuarios = data
      )
    this.data.productosSeleccionados = [];
  }

  onSubmit(){
    this.match = false;
    for(let item of this.usuarios){
      if(item.username == this.loginForm.value.email && item.password == this.loginForm.value.password){
        this.match = true;
        break;
      }
    }
    if(this.match){
      this.router.navigate(['inicio']);
    }
  }

}*/
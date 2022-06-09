import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-retrieve-password',
  templateUrl: './retrieve-password.component.html',
  styleUrls: ['./retrieve-password.component.css'],
  providers:[ServiceService]
})
export class RetrievePasswordComponent implements OnInit {
  mostrar: Boolean = false;
  displayModal: boolean = false;
  email = new FormControl('');
  public form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    rating: ['', []],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: ServiceService,
    private router: Router
  ) {}
 
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  
    recuperarEmail() {
      try {
        this.mostrar = !this.mostrar;
        this.authService.resetPassword(this.form.value.email).then((res) => {
          this.displayModal = false;
          alert("Se ha enviado un correo para que restablesca la contraseña");
          this.router.navigate(["/login"]);
        });
        this.mostrar = !this.mostrar;
      } catch (error) {}
    }

}

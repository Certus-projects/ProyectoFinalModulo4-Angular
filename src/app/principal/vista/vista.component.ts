import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

  //Consumir servicio UserServices

  //Crear instancia de UserServices
  constructor(private userService: UserservicesService){}

  //Ejecutar el metodo getUserAll del servicio al cargar el componente
  listado = new Array();
  ngOnInit(){
    //Ejecutar METOD getUSerAll y recuperar JSON por la aplicacion

    this.userService.getUsersAll().subscribe({
      next: (UserAll : Users[]) => this.listado = UserAll,
      error: (e) => console.error(e),
      complete : () => console.info("La API devolvio todo los registros")
    })
  }

    //Ejecutar el metodo getUSerAllIntecerceptor

   /* this.userService.getUsersAllInterceptor().subscribe({
      next: (response : any) => {this.listado = response.body; console.log(response)},
      error: (e) => console.error(e),
      complete : () => console.info("La API devolvio todo los registros")
    })
  }
  */
}

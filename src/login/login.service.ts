import { Injectable } from '@nestjs/common';

export interface requerido {
    id:number;
    nombre:string;
    apellido:string;
    edad:number;
}

@Injectable()
export class LoginService {

    GetUsers (){
        return 'getting'
    }
    UpdateUsers (){
        return 'Actualizando usuario'
    }
    LogInUsers (){
        return 'Ingresando Usuario'
    }
    DeleteUsers (){
        return 'Dando de baja usuario'
    }
}

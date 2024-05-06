import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common"
import { LoginService } from "./login.service"
import { User } from "./user.entity";

@Controller('/login')
export class LoginController {

    constructor(private loginService: LoginService) {}

    @Get()
    getUsers(){
        return this.loginService.GetUsers();
    }

    @Post()
    createUser(@Body() user:any){
        return this.loginService.LogInUsers();
    }

    @Delete()
    deletingUser(){
        return this.loginService.DeleteUsers;
    }

    @Put()
    updateUser(){
        return this.loginService.UpdateUsers;
    }
}


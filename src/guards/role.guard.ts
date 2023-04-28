import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "src/decorators/rules.decorator";
import { Role } from "src/enums/role.enum";

@Injectable()
export class RoleGuard implements CanActivate{

    constructor(
        private readonly reflector: Reflector    
    ) {}
    
    async canActivate(context: ExecutionContext){

        const requeridRules = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);

        if(!requeridRules){
            return true;
        }

        const request = context.switchToHttp().getRequest();

        console.log({requeridRules});

        return true;
        
    }

}
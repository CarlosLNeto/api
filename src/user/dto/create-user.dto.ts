import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDTO{

    @IsString()
    name: String;

    @IsEmail()
    email: String;

    @IsStrongPassword({
        minLength: 6,
        minNumbers: 0,
        minLowercase: 0,
        minSymbols: 0,
        minUppercase: 0
    })
    password: String;
}
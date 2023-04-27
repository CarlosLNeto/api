import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";


@Module({
    imports: [JwtModule.register({
        secret: "tPy,;h^/V5=-nvYxE2<Mp]`CwT*bed8k"
    })]

})
export class AuthModule{

}
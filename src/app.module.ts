
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './login/user.entity';
import { LoginModule } from './login/login.module';

@Module({
  imports: [

      LoginModule

    ,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'primer_crud',
      entities: [User], // Add your entities (models) here
      synchronize: true, // Automatically sync your entity schemas with the database (for development)
    }),
    // Import other modules if you have any
  ],
})
export class AppModule {}
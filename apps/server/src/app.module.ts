import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemonExample/pokemon.module'; // Remove PokemonModule when you remove the pokemon example.

@Module({
  imports: [PokemonModule], // Remove PokemonModule when you remove the pokemon example.
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

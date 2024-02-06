import { Controller, Get, Param } from "@nestjs/common";

import { PokemonService } from "./pokemon.service";

@Controller('pokemon')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) { }

    @Get(':id')
    async getPokemonById(@Param('id') id: number) {
        return this.pokemonService.getPokemonById(id);
    }
}

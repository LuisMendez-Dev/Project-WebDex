import { PokemonService } from "./pokemon.service";
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    getPokemonById(id: number): Promise<any>;
}

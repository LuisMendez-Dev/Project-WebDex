import { HttpService } from "@nestjs/axios";
export declare class PokemonService {
    private httpService;
    constructor(httpService: HttpService);
    getPokemonById(id: number): Promise<any>;
}

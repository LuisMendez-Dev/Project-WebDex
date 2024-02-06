import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

@Injectable()
export class PokemonService {
    constructor(private httpService: HttpService) { }
    async getPokemonById(id: number): Promise<any>  {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await firstValueFrom(this.httpService.get(url));
        return response.data;
    }
}
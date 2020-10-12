import { pokeApiClient } from ".";
import { Pokemon } from "../../models/pokemon";


export const pokeApiGetMultiplePokemon = async (limit:number, offset:number):Promise<Pokemon[]> => {
    let namesResponse = await pokeApiClient.get('/pokemon', {
        params:{
            limit,
            offset
        }
    })

    let pokemons:Promise<Pokemon>[] = namesResponse.data.results.map((ele)=>{
        return pokeApiGetPokemonByName(ele.name)
    })

    return await Promise.all(pokemons)//wait for all promises in an array to finish

}



export const pokeApiGetPokemonByName = async (name:string):Promise<Pokemon> => {
    let pokemonResponse = await pokeApiClient.get(`/pokemon/${name}`)
    let {data} = pokemonResponse
    console.log(data);
    
    return {
        id: data.id,
        order: data.order,
        name: data.species.name,
        picture: data.sprites.front_default,
        types: data.types.map((ele)=>ele.type.name),
        abilities: data.abilities.map((ele)=>ele.ability.name)
    }//should be made into a util function for converting



}
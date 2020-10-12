import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Pokemon } from '../../models/pokemon'
import { pokeApiGetMultiplePokemon } from '../../remote/poke-api/get-multiple-pokemon'
import { PokemonDisplay } from '../PokemonDisplay/PokemonDisplay'



export const Pokedex: React.FunctionComponent<any> = (props) => {
    const [pokemons, changePokemons] = useState<Pokemon[]>([{ id: 1, name: 'Charizard', order: 3, types: ['Fire', 'Flying'], picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', abilities: ['blaze', 'solar-power'] },
    { id: 1, name: 'Charizard', order: 3, types: ['Fire', 'Flying'], picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', abilities: ['blaze', 'solar-power'] },
    { id: 1, name: 'Charizard', order: 3, types: ['Fire', 'Flying'], picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', abilities: ['blaze', 'solar-power'] },
    { id: 1, name: 'Charizard', order: 3, types: ['Fire', 'Flying'], picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', abilities: ['blaze', 'solar-power'] },
    { id: 1, name: 'Charizard', order: 3, types: ['Fire', 'Flying'], picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', abilities: ['blaze', 'solar-power'] },
    { id: 1, name: 'Charizard', order: 3, types: ['Fire', 'Flying'], picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', abilities: ['blaze', 'solar-power'] }])
    const [limit, changeLimit] = useState<number>(30)
    const [offset, changeOffset] = useState<number>(0)

    let display = pokemons.map((ele) => {
        return (<Grid item xs={3}><PokemonDisplay pokemon={ele} /></Grid> )
    })

    useEffect(()=>{
        async function getData(){
            let newPokemons = await pokeApiGetMultiplePokemon(limit,offset)
            console.log(newPokemons);
            
            changePokemons(newPokemons)
        }
        getData()
    },[limit,offset])


    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline"
        >
            {display}
        </Grid>
    )
}
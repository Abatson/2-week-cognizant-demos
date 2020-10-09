import { chuckNorrisDBClient } from "."



export const chuckNorrisDBGetOneJoke = async ()=>{
    let result = await chuckNorrisDBClient.get('/random', {
        params:{
          'limitTo': '[nerdy]'  
        }
    })
    console.log(result.data)
    return result.data.value.joke
}
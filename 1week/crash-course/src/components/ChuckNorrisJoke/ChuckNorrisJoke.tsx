import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { chuckNorrisDBGetOneJoke } from '../../remote/chuck-norris-db/get-jokes'


export const ChuckNorrisJoke:React.FunctionComponent<any> = (props)=>{

    const [joke, changejoke] = useState('The chemical formula for the highly toxic cyanide ion is CN-. These are also Chuck Norris\' initials. This is not a coincidence.')

    const getNewJoke= async ()=>{
        let newJoke = await chuckNorrisDBGetOneJoke()//our remote function
        changejoke(newJoke)
    }


    useEffect(()=>{
        toast.dark(joke,{
            position: 'top-center'
        })
    },[joke])

    return(
        <div>
            <Button onClick={getNewJoke} variant="outlined" color='secondary'>Get A Joke</Button>
        </div>
    )
}
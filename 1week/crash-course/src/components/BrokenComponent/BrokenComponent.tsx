import React from 'react'


export const BrokenComponent:React.FunctionComponent<any> = (props) =>{

    const Boom = ():any =>{
        throw new Error("Broken React Stuff")
    }

    return (
        <div>
            {Boom()}
        </div>
    )
}
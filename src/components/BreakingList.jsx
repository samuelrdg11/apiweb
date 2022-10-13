import React from 'react'
import Peticion from './Peticion'

const BreakingList = ({ personajes }) => {
    return (
        <div>
            <ul>
                {
                    personajes.map((personajes, i) => (
                        <Peticion key={i} personajes={personajes.char_id} {...personajes} />
                    ))
                }
            </ul>


        </div>

    )
}

export default BreakingList
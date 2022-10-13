import React from 'react'
const Peticion = ({ img, name, nickname, birthday }) => {

    return (
        <div>
            <section className='card'>
                <img className='card-img-top' src={img} alt={name} />
                </section>
                <center>
                <p>Name: {name}</p>
                <p>Nickname: {nickname}</p>
                <p>Birthday: {birthday}</p>
                </center>
               
            
        </div>

    )
}

export default Peticion
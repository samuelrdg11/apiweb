import React from 'react'

const Peticion = ({ img, name, nickname, birthday }) => {

    return (
        <div>
            <section className='card info'>
                <img className='img' src={img} alt={name}/>
                <center>
                    <p><i>Name:</i> {name}</p>
                    <p><i>Nickname:</i> {nickname}</p>
                    <p><i>Birthday:</i> {birthday}</p>
                </center>
            </section>
        </div>
    )
}


export default Peticion
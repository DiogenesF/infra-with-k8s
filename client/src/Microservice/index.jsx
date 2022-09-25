import React, { useState } from 'react'
import axios from 'axios'
import '../App.css'

export const Microservice = () => {
    const [pokemons, setPokemons] = useState()

    const requestToMicroservice = async () => {
        setPokemons([])
        const { data } = await axios.get('/microservice/pokemon_data')
        setPokemons(data)
    }

    return (
        <div className="aligned-content">
            <span>Microservice</span>
            <button className="submit-button" onClick={requestToMicroservice}>Send request</button>
            <h3>Data from the API:</h3>
            {pokemons?.map(({ name }) => (
                <h5 key={name}>{name}</h5>
            ))}
        </div>
    )
}

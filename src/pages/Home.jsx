import {useState} from 'react';
import { useGetPokemonByNameQuery } from 'redux/pokemon/pokemon';

const HomePage = () => {
    const [pokemonName, setPokemonName] = useState('');
    const { data, error, isFetching, isError } = useGetPokemonByNameQuery(pokemonName, {
        skip: pokemonName === '',
        refetchOnReconnect: true,
    });

    const handleSubmit = event => {
        event.preventDefault();
        setPokemonName(event.currentTarget.elements.pokemonName.value);
        event.currentTarget.reset();
    };
    
    return (
        <>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input type="text" name="pokemonName" />
                <button type="submit">Search</button>
            </form>

            {isError && <p>{error.data}</p>}

            {data && !isFetching && !isError && <h1>{data.name}</h1>}
        </>
    )
};

export default HomePage;
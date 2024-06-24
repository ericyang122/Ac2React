// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Componentes/Banner/Banner';

function Home() {
    const [filmes, setFilmes] = useState([]);
    const apiKey = "api_key=d1bef122d48992b960cc79c7306f5c1b";
    const urlBase = "https://api.themoviedb.org/3/movie/";
    const urlImg = "https://image.tmdb.org/t/p/w342/";

    useEffect(() => {
        fetch(`${urlBase}popular?${apiKey}&language=pt-BR`)
            .then((response) => response.json())
            .then((response) => setFilmes(response.results))
            .catch((erro) => console.log(erro));
    }, []);

    return (
        <main className="bg-black px-12">
            {filmes.length > 0 && <Banner id={filmes[0].id.toString()} />}
            <h1 className='text-3xl mb-3 text-white'>
                    Filmes em Alta
            </h1>
            <div className="grid grid-cols-6 gap-2">
                {filmes.map((filme) => (
                    <div className="card-filme" key={filme.id}>
                        <Link to={`filmes/${filme.id}`} className="bg-blue-500">
                            <img className="rounded-xl" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                            <div className='bg-zinc-600 mt-2 rounded-lg px-2 py-1 mb-4'>
                                <h1 className="text-white text-xl">{filme.title}</h1>
                                <h2 className="text-white">Lançamento: {filme.release_date}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Home;

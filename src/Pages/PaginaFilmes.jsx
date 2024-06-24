import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Footer from "../Componentes/Footer/Footer";

function PaginaFilmes(){
        const {id} = useParams();

        const [filme, setFilme] = useState([])

        const apiKey='api_key=d1bef122d48992b960cc79c7306f5c1b'
        const urlBase = 'https://api.themoviedb.org/3/movie/'
        const urlImg = 'https://image.tmdb.org/t/p/w1280/'

    useEffect( () => {
        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(erro => console.log(erro))
    },[id])

    return(
        <>
            <img className="absolute z-0 w-full h-full" src= {`${urlImg}${filme.backdrop_path}`} alt="" />
            <div className="relative z-2 text-center text-white h-full p-96 backdrop-blur">
                <h1 className="text-3xl font-bold text-red-700">{filme.title}</h1>
                <p className="text-2xl">{filme.overview}</p>
            </div>  
        </>
        
    )
}

export default PaginaFilmes
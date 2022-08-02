import React, {useState} from "react";



const MovieForm = ({onMovieSubmit}) => {
    const [name, setName] = useState("");
    const [url, setURL] = useState("");

    const handleURLChange = (event) => {
        setURL(event.target.value)
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const URLToSubmit = url.trim();
        const nameToSubmit = name.trim();
        if(!URLToSubmit || !nameToSubmit){
        }
        onMovieSubmit({
            name: nameToSubmit,
            url: URLToSubmit
        });
        setName("");
        setURL("");
    }



    return(
        <form className="movie-form" onSubmit={handleFormSubmit}>
            <input 
            type="text" 
            placeholder="Movie Title" 
            value={name}
            onChange={handleNameChange}
            />
            <input 
            type="text" 
            placeholder="Paste URL" 
            value={url}
            onChange={handleURLChange}
            />
            <input 
            type="submit" 
            value="Post"
            /> 
        </form>
    )
}

export default MovieForm
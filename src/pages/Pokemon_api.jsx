import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Pokemon_api() {
    const [name,setName] = useState("")
  const[pokemonHeight, setHeight] = useState(0)
  const[pokemonSprite, setSprite] = useState("null")
  const[species, setSpecies] = useState("")
  const[weight, setWeight] = useState("0")
  const[move, setMove] = useState("")

  

    const fetchData = ()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res)=>{
      console.log(res.data)
        setMove(res.data.moves[36].move.name)
        setWeight(res.data.weight);
        setSpecies(res.data.species.name);
        setHeight(res.data.height);
        setSprite(res.data.sprites.front_default);

      // Takes img from api but in other way
      // const pokemonSprite = res.data.sprites.front_default;
      // const imgElement = document.getElementById("spriteIMG");
      // imgElement.src= pokemonSprite;
        
      });
    };

  

  return (
    <div className="DisplayBox">
      <input id="input"  type="text" placeholder="Pokemon name" onChange={(event)=>{setName(event.target.value.toLocaleLowerCase());}}/>
      <button onClick={fetchData} className='button'>Fetch info</button>
      
      <div className="container">
        <img src={pokemonSprite} id='spriteIMG' width="300px"/>
        <p>Height: {pokemonHeight*10}cm</p>
        <p>Species: {species} </p>
        <p>Weight: {(weight/10)}kg</p>
        <p>Move: {move}</p>
      </div>
    </div>
  );
}

export default Pokemon_api;
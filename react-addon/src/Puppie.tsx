import React from 'react';
import {PuppieProps} from './types';

function Puppie({ puppie, deletePuppie, getPuppie, updatePuppie }: PuppieProps) {
  const handleUpdate = (id:number) => {
    getPuppie(id)
  }
  const handleDelete = (id:number) => {
    deletePuppie(id);
  }
  return <>
  <h1>{puppie.name}</h1>
  <p>{puppie.breed}</p>
  <p>{puppie.birthdate}</p>
  <img src={puppie.imgUrl} alt="dog" />
  <button onClick={() => handleUpdate(puppie.id)}>Update</button>
  <button onClick={() => handleDelete(puppie.id)}>Delete</button>
  </> 
}

export default Puppie;
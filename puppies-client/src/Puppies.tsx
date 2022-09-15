import React from 'react';
import {IPuppies, PuppiesProps} from './types';
import Puppie from "./Puppie"

function Puppies({ puppies, deletePuppie, getPuppie, updatePuppie }: PuppiesProps) {

  return <>
    {puppies.map((puppie: IPuppies, index: number) => 
    <Puppie key={puppie.id} puppie={puppie} deletePuppie={deletePuppie} getPuppie={getPuppie} updatePuppie={updatePuppie}
    />)}
  </>;
}

export default Puppies;
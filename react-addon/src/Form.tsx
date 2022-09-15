import React, { useEffect, useState } from "react";
import { FormProps, NewPuppie } from "./types";
function Form({ addPuppie, puppieToUpdate, updatePuppie }: FormProps) {
  const [name, setName] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  useEffect(() => {
    setName(
      Object.keys(puppieToUpdate).length !== 0 ? puppieToUpdate.name : name
    );
    setBreed(
      Object.keys(puppieToUpdate).length !== 0 ? puppieToUpdate.breed : breed
    );
    setBirthdate(
      Object.keys(puppieToUpdate).length !== 0
        ? puppieToUpdate.birthdate
        : birthdate
    );
  }, [puppieToUpdate]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(puppieToUpdate).length !== 0) {
        let imgUrl = puppieToUpdate.imgUrl;
      updatePuppie({ name, breed, birthdate, imgUrl}, puppieToUpdate.id);
    } else addPuppie({ name, breed, birthdate });
    setName("");
    setBreed("");
    setBirthdate("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onInput={(e: React.FormEvent<HTMLInputElement>): void =>
          setName(e.currentTarget.value)
        }
        type="text"
        placeholder={name}
        name="name"
        autoComplete="off"
      />
      <input
        value={breed}
        onInput={(e: React.FormEvent<HTMLInputElement>): void =>
          setBreed(e.currentTarget.value)
        }
        type="text"
        placeholder={breed}
        name="breed"
      />
      <input
        value={birthdate}
        onInput={(e: React.FormEvent<HTMLInputElement>): void =>
          setBirthdate(e.currentTarget.value)
        }
        type="text"
        placeholder={birthdate}
        name="birthdate"
      />
      <button type="submit">
        {Object.keys(puppieToUpdate).length !== 0 ? "Update" : "Submit"}
      </button>
    </form>
  );
}

export default Form;

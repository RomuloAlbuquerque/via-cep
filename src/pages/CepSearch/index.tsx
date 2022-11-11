import "./styles.css";

import ResultCard from "components/ResultCard";
import React from "react";
import { useState } from "react";
import axios from "axios";

type FormData = {
  cep: string;
};

type Address = {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  ddd: string;
};

const CepSearch = () => {
  const [address, setAddress] = useState<Address>();

  const [formData, setFormData] = useState<FormData>({
    cep: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://viacep.com.br/ws/${formData.cep}/json`)
      .then((response) => setAddress(response.data))
      .catch((error) => {
        setAddress(undefined);
        console.log("aqui deu erro ", error);
      });
  };

  return (
    <div className="cep-search-container">
      <h1 className="">Buscar Endereço</h1>
      <div className="search-container">
        <form onSubmit={handleSubmit} className="formulario">
          <div className="form-containerr">
            <input
              type="text"
              name="cep"
              value={formData.cep}
              className="search-inputt"
              placeholder="CEP (somente números)"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>
        {address && (
          <>
            <ResultCard title="Logradouro" description={address.logradouro} />
            <ResultCard title="Complemento" description={address.complemento} />
            <ResultCard title="Bairro" description={address.bairro} />
            <ResultCard title="Localidade" description={address.localidade} />
            <ResultCard title="UF" description={address.uf} />
            <ResultCard title="IBGE" description={address.ibge} />
            <ResultCard title="DDD" description={address.ddd} />
          </>
        )}
      </div>
    </div>
  );
};

export default CepSearch;

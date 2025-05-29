import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data"; 
import { useCryptoStore } from "../store";
import { pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {

  const cryptocurrencies =  useCryptoStore((state) => state.cryptoCurrencies) 
  const fetchData = useCryptoStore((state) => state.fetchData)
  
  const [pair, setPair] = useState<pair>({
    currency: '',
    criptoCurrency: ''
  })

  const [error, setError] = useState('')
  const handleChange = (e: ChangeEvent<HTMLSelectElement> ) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // "pair" es un objeto, con el Object.values lo convierte a un array y con includes revisamos si tiene strings vacíos 
    if(Object.values(pair).includes('')) {
      setError('Todos los Campos son Obligatorios')
      return
    }
    setError('')
    // llamamos a la api 
    fetchData(pair)
  }

  return (
      <form 
        className="form"
        onSubmit={handleSubmit}
        >

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="field">
          <label htmlFor="currency">Moneda:</label>
          <select 
            name="currency" 
            id="currency"
            value={pair.currency}
            onChange={handleChange}
          >
            <option value="">-- Seleccione --</option>
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="criptocurrency">Criptomoneda:</label>
          <select 
            name="criptoCurrency" 
            id="criptocurrency"
            value={pair.criptoCurrency}
            onChange={handleChange} 
          >
            <option value="">-- Seleccione --</option>
            {cryptocurrencies.map((crypto) => (
              <option key={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name}>
                {crypto.CoinInfo.FullName}
              </option>
            ))}
          </select>
        </div>

        <input type="submit" value="Cotizar" />
      </form>
  );
}

import axios from "axios";
import { cryptoCurrenciesResponseSchema } from "../schema/crypto-schema";
import { pair } from "../types";

export async function getCryptos () {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=COP'
  const {data: {Data}} = await axios.get(url)
  const cryptoResponseResult = cryptoCurrenciesResponseSchema.safeParse(Data)
  if (cryptoResponseResult.success) {
    return cryptoResponseResult.data
  }
} 

export async function fetchCurrentCryptoPrice (pair: pair) {
  const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptoCurrency}&tsyms=${pair.currency}`
  const {data: { DISPLAY } } = await axios(URL)
  // Accede dinámicamente al objeto DISPLAY usando el nombre de la criptomoneda y la moneda destino,
  // y muestra los datos formateados del precio actual (por ejemplo, DISPLAY["BTC"]["USD"])
  console.log(DISPLAY[pair.criptoCurrency][pair.currency])
}
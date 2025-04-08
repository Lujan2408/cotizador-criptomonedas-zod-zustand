import { create } from "zustand";
import axios from "axios";
import { cryptoCurrenciesResponseSchema } from "./schema/crypto-schema";

async function getCryptos () {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=COP'
  const {data: {Data}} = await axios.get(url)
  const cryptoResponseResult = cryptoCurrenciesResponseSchema.safeParse(Data)
  console.log(cryptoResponseResult)
}


export const useCryptoStore = create(() => ({
  fetchCryptos: () => { // Mandamos a llamar la función cuando la app esté lista
    getCryptos()
  }
}))
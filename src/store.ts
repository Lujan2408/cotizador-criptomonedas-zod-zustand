import { create } from "zustand";
import axios from "axios";
import { cryptoCurrenciesResponseSchema } from "./schema/crypto-schema";
import { cryptoCurrency } from "./types";

type CryptoStore = {
  cryptoCurrencies: cryptoCurrency[],
  fetchCryptos: () => Promise<void>
}

async function getCryptos () {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=COP'
  const {data: {Data}} = await axios.get(url)
  const cryptoResponseResult = cryptoCurrenciesResponseSchema.safeParse(Data)
  if (cryptoResponseResult.success) {
    return cryptoResponseResult.data
  }
} 

export const useCryptoStore = create<CryptoStore>((set) => ({
  cryptoCurrencies: [], // State

  fetchCryptos: async () => { // Mandamos a llamar la función cuando la app esté lista
    const cryptoCurrencies = await getCryptos()
    set(() => ({
      cryptoCurrencies
    }))
  }
}))
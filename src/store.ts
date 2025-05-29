import { create } from "zustand";
import {devtools} from "zustand/middleware"
import { cryptoCurrency, pair } from "./types";
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService";


type CryptoStore = {
  cryptoCurrencies: cryptoCurrency[],
  fetchCryptos: () => Promise<void>,
  fetchData: (pair : pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptoCurrencies: [], // State

  fetchCryptos: async () => { // Mandamos a llamar la función cuando la app esté lista
    const cryptoCurrencies = await getCryptos()
    set(() => ({
      cryptoCurrencies
    }))
  },
  fetchData: async (pair) => {
   const result = await fetchCurrentCryptoPrice(pair)
   console.log(result)
  }
})))
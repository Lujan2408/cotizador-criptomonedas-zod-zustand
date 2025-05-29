import { create } from "zustand";
import { z } from "zod" 
import {devtools} from "zustand/middleware"
import { cryptoCurrency, cryptoPrice, pair } from "./types";
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService";


type CryptoStore = {
  cryptoCurrencies: cryptoCurrency[],
  result: cryptoPrice
  fetchCryptos: () => Promise<void>,
  fetchData: (pair : pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    // State
    cryptoCurrencies: [],
    result: {
      IMAGEURL: z.string(),
      PRICE: z.string(),
      HIGHDAY: z.string(),
      LOWDAY: z.string(),
      CHANGEPCT24HOUR: z.string(),
      LASTUPDATE: z.string(),
    },

    fetchCryptos: async () => {
      // Mandamos a llamar la función cuando la app esté lista
      const cryptoCurrencies = await getCryptos();
      set(() => ({
        cryptoCurrencies,
      }));
    },
    fetchData: async (pair) => {
      const result = await fetchCurrentCryptoPrice(pair);

      set(() => ({
        result
      }))
    },
  }))
);
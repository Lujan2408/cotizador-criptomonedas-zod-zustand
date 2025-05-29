import { create } from "zustand";
import {devtools} from "zustand/middleware"
import { cryptoCurrency, cryptoPrice, pair } from "./types";
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService";

type CryptoStore = {
  cryptoCurrencies: cryptoCurrency[],
  result: cryptoPrice
  loading: boolean
  fetchCryptos: () => Promise<void>,
  fetchData: (pair : pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    // State
    cryptoCurrencies: [],
    result: {} as cryptoPrice,
    loading: false,

    fetchCryptos: async () => {
      // Mandamos a llamar la función cuando la app esté lista
      const cryptoCurrencies = await getCryptos();
      set(() => ({
        cryptoCurrencies,
      }));
    },
    fetchData: async (pair) => {
      // Spinner de carga, cuando hacemos llamado a la API
      set(() => ({
        loading: true
      }))

      const result = await fetchCurrentCryptoPrice(pair);

      set(() => ({
        result,
        loading: false
      }));
    },
    
  }))
);
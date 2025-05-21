import { create } from "zustand";
import {devtools} from "zustand/middleware"
import { cryptoCurrency } from "./types";
import { getCryptos } from "./services/CryptoService";


type CryptoStore = {
  cryptoCurrencies: cryptoCurrency[],
  fetchCryptos: () => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptoCurrencies: [], // State

  fetchCryptos: async () => { // Mandamos a llamar la función cuando la app esté lista
    const cryptoCurrencies = await getCryptos()
    set(() => ({
      cryptoCurrencies
    }))
  }
})))
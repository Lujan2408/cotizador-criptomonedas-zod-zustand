import { create } from "zustand";

export const useCryptoStore = create(() => ({
  fetchCryptos: () => { // Mandamos a llamar la función cuando la app esté lista
    console.log("Desde fetchCryptos") 
  }
}))
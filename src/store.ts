import { create } from "zustand";
import axios from "axios";

async function getCryptos () {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=COP'
  const {data: {Data}} = await axios.get(url)
  console.log(Data)
}


export const useCryptoStore = create(() => ({
  fetchCryptos: () => { // Mandamos a llamar la función cuando la app esté lista
    getCryptos()
  }
}))
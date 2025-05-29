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
  console.log(pair)
}
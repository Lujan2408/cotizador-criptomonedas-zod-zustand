import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string()
})

export const cryptoCurrencyResponseSchema = z.object({
  CoinInfo: z.object({
    Name: z.string(),
    FullName: z.string()  
  })
})
// Le pasamos el z.array ya que la rspuesta es un array de objetos
export const cryptoCurrenciesResponseSchema = z.array(cryptoCurrencyResponseSchema) 

export const pairSchema = z.object({
  currency: z.string(),
  criptoCurrency: z.string()
})
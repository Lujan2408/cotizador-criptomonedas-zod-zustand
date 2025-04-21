import { z } from "zod";
import { CurrencySchema, cryptoCurrencyResponseSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type cryptoCurrency = z.infer<typeof cryptoCurrencyResponseSchema>
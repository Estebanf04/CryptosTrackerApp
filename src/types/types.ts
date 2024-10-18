import { z } from "zod"
import { CryptoItemSchema, InformationSearchSchema } from "../schemas/schemas"

export type Divisa = {
    name: string,
    code: string
}

export type CryptoItem = z.infer<typeof CryptoItemSchema>

export type Search = {
    divisa: string,
    crypto: string
}

export type ResultSearch = z.infer<typeof InformationSearchSchema>
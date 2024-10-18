import {z} from 'zod'

export const CryptoItemSchema = z.object({
    CoinInfo: z.object({
        Name: z.string(),
        FullName: z.string()
    })
})

export const CryptoItemsSchema = z.array(CryptoItemSchema)

export const InformationSearchSchema = z.object({
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    IMAGEURL: z.string(),
    LASTUPDATE: z.string()
})
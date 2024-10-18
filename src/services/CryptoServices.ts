import axios from "axios"
import { CryptoItemsSchema, InformationSearchSchema } from "../schemas/schemas"
import { Search } from "../types/types"

export async function getCryptoItems(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios(url)
    const result = CryptoItemsSchema.safeParse(Data)
    if(result.success){
       return result.data
    }
}

export async function getInfoOfTheSearch(search : Search){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${search.crypto}&tsyms=${search.divisa}`
    const {data: { DISPLAY }} = await axios(url)
    const result = InformationSearchSchema.safeParse(DISPLAY[search.crypto][search.divisa])
    if(result.success){
        return result.data
    }
}


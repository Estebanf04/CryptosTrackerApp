import { create } from "zustand";
import { getCryptoItems, getInfoOfTheSearch } from "./services/CryptoServices";
import { CryptoItem, ResultSearch, Search } from "./types/types";

type StoreCrypto = {
    cryptoList: CryptoItem[],
    resultsInformationSearch: ResultSearch
    loading: boolean
    fetchCryptosItems: () => Promise<void>
    fetchPriceSearch: (search : Search) => Promise<void>
}

export const useStoreCrypto = create<StoreCrypto>((set) => ({
    cryptoList: [],
    resultsInformationSearch: {
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        IMAGEURL: '',
        LASTUPDATE: ''
    },
    loading: false,

    fetchCryptosItems: async () => {
        const cryptoItems = await getCryptoItems()
        set({
            cryptoList: cryptoItems
        })
    },
    
    fetchPriceSearch: async (search) => {
        set({
            loading: true
        })
        const resultsInformationSearch = await getInfoOfTheSearch(search)
        set({
            resultsInformationSearch,
            loading: false
        })
    }
}))
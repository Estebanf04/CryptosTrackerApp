import { divisas } from "../data/divisas"
import { useStoreCrypto } from "../storeCrypto"
import { useMemo, useState } from "react"
import { ChangeEvent, FormEvent } from "react"
import { Search } from "../types/types"
import Error from "./Error"
import {Select, SelectItem} from '@nextui-org/select'


export default function FormSearchCrypto() {

  const cryptoList = useStoreCrypto((state) => state.cryptoList)
  const fetchPriceSearch = useStoreCrypto((state) => state.fetchPriceSearch)

  const initialState = {
    divisa: '',
    crypto: ''
  }

  const [search, setSearch] = useState<Search>(initialState)
  const [error, setError] = useState('')
  
  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearch({
        ...search,
        [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(Object.values(search).includes('')){
        setError('Campos obligatorios')
        return
    }

    fetchPriceSearch(search)
  }

  const isNotSubmitValid = useMemo(() => {
    return Object.values(search).includes("")
  }, [search])


  return (
        <form className="flex flex-col gap-3 w-full md:w-1/2 mx-auto" onSubmit={handleSubmit}>

            {error && <Error>{error}</Error>}

                <Select
                name="divisa" 
                id="divisa"
                label="Currency"
                value={search.divisa}
                onChange={handleSelectionChange}
                className="font-semibold"
                >
                    {
                        divisas.map(divisa => (
                            <SelectItem 
                            key={divisa.code} 
                            value={divisa.code}
                            >
                            {divisa.name}
                            </SelectItem>
                        ))
                        
                    }
                </Select>
            

                <Select 
                name="crypto" 
                id="crypto"
                label="Cryptocurrency"
                value={search.crypto}
                onChange={handleSelectionChange}
                className="font-semibold"
                >
                    {
                    cryptoList.map(crypto => (
                        <SelectItem 
                        key={crypto.CoinInfo.Name} 
                        value={crypto.CoinInfo.Name}
                        >
                        {crypto.CoinInfo.FullName}
                        </SelectItem>
                    ))
                    }
                </Select>

            <div>
                <input 
                type="submit" 
                value="Quote"
                className="bg-teal-700 py-3 w-full text-white font-semibold text-md uppercase cursor-pointer my-1 hover:bg-teal-800 disabled:bg-gray-500 disabled:opacity-45 disabled:cursor-auto disabled:"
                disabled={isNotSubmitValid}
                />
            </div>

        </form>
  )
}

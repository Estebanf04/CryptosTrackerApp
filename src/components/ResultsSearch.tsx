import { useMemo } from "react"
import { useStoreCrypto } from "../storeCrypto"
import SpinnerLoading from "./SpinnerLoading"

export default function ResultsSearch() {
    const resultsInformationSearch = useStoreCrypto((state) => state.resultsInformationSearch)
    const hasResult = useMemo(() => !Object.values(resultsInformationSearch).includes(''), [resultsInformationSearch])
    const loading = useStoreCrypto((state) => state.loading)

    return (
        <>
            {
                loading ? <SpinnerLoading/> 
                : 
                hasResult && (
                    <div className="inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center rounded-xl w-full md:w-1/2 mx-auto ">
                        <div className="flex justify-center py-2">
                            <img src={`https://cryptocompare.com${resultsInformationSearch.IMAGEURL}`} className="w-[55px]"/>                    
                        </div>

                        <div className="flex flex-col gap-3 md:flex-row md:justify-between w-full px-6 md:pt-2">
                            <div className="text-left md:text-center p-2 text-white ">
                                <p className="text-lg md:text-xl">{resultsInformationSearch.LOWDAY}</p>
                                <p className="font-medium text-sm">Lowest price of the day</p>
                            </div>
                            <div className="text-left md:text-center p-2 md:px-8 rounded-lg shadow-sm text-white shadow-teal-500">
                                <p className="text-lg md:text-xl font-semibold">{resultsInformationSearch.PRICE}</p>
                                <p className="font-bold text-sm">Current price</p>
                            </div>
                            <div className="text-left md:text-center p-2 text-white">
                                <p className="text-lg md:text-xl">{resultsInformationSearch.HIGHDAY}</p>
                                <p className="font-medium text-sm">Highest price of the day </p>
                            </div>
                        </div>
                        <div className="pt-6 pb-3 text-right">
                            <p className="font-medium text-white">Last update: <span className="font-bold text-green-700">{resultsInformationSearch.LASTUPDATE}</span></p>
                        </div>
                    </div>
                )
            }
        </>
    )
}

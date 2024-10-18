import { useEffect } from "react"
import FormSearchCrypto from "./components/FormSearchCrypto"
import { useStoreCrypto } from "./storeCrypto"
import ResultsSearch from "./components/ResultsSearch"
import Footer from "./components/Footer"

function App() {
  const fetchCryptosItems = useStoreCrypto((state) => state.fetchCryptosItems)

  useEffect(() => {
    fetchCryptosItems()
  },[])

  return (
    <>
    <div className="bg-gray-900 bg-opacity-90 py-16 min-h-[97vh]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white px-5">Cryptocurrency <span className="text-5xl md:text-6xl font-black text-teal-500"> Quoter </span></h1>
        <div className="flex flex-col py-8 px-5 w-full gap-8">
            <FormSearchCrypto/>
            <ResultsSearch/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default App

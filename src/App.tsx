import { useEffect, useMemo } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {

  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)
  const result = useCryptoStore((state) => state.result)
  const hasResult = useMemo(() => Object.keys(result).length > 0,[result])

  useEffect(() => {
    fetchCryptos()
  }, [fetchCryptos])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchForm />
          {hasResult && 
            <CryptoPriceDisplay 
          />}
        </div>
      </div>
    </>
  );
}

export default App

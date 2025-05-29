import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {

  const result = useCryptoStore((state) => state.result)
  const loading = useCryptoStore((state) => state.loading)
  const IMAGE_CRYPTO = `https://cryptocompare.com/${result.IMAGEURL}` 


  return (
    <div className="result-wrapper">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2>Cotización</h2>

          <div className="result">
            <img src={IMAGE_CRYPTO} alt="Imagen-criptomoneda-seleccionada" />

            <div>
              <p>
                El precio es de: <span>{result.PRICE}</span>
              </p>
              <p>
                Precio más Alto del día: <span>{result.HIGHDAY}</span>
              </p>
              <p>
                Precio más Bajo del día: <span>{result.LOWDAY}</span>
              </p>
              <p>
                Cambio en las Ultimas 24h: <span>{result.CHANGEPCT24HOUR}</span>
              </p>
              <p>
                Ultima Actualización: <span>{result.LASTUPDATE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

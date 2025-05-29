import { useCryptoStore } from "../store"

export default function CryptoPriceDisplay() {

  const result = useCryptoStore((state) => state.result)

  return (
    <div>
      <h2>Cotización</h2>
      <div className="result">
        <div>
          <p>
            El precio es de: <span>{result.PRICE}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

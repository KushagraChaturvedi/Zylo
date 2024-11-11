import { OfferCardData } from "../types"

function PricingCard({ data }: { data: OfferCardData }) {
  const bgColors = {
    blue: "from-blue-50 to-blue-200 text-blue-900",
    orange: "from-orange-50 to-orange-200 text-orange-900",
    pinkPurple: "from-pink-50 to-purple-200 text-purple-900",
  };

  const selectedPalette = bgColors[data.colorPalette || "blue"];

  return (
    <div
      className={`max-w-sm rounded-lg overflow-hidden shadow-xl bg-gradient-to-r ${selectedPalette} p-6`}
    >
      <div className="text-center text-lg font-bold tracking-wider">
        {data.duration}
      </div>

      <div className="text-center mt-4">
        <div className="text-4xl font-extrabold">₹{data.price}</div>
        <div className="text-sm font-semibold line-through">
          ₹{data.originalPrice}
        </div>
        <div className="text-md font-bold">₹{data.monthlyPrice}/month</div>
      </div>

      <div className="mt-6 text-center bg-green-100 text-green-800 font-semibold py-2 px-4 rounded-full">
        No-cost EMI available
      </div>

      <div className="mt-6 bg-yellow-50 rounded-md py-4 px-4 text-left">
        <div className="text-lg font-bold text-yellow-700">ONLY TODAY</div>
        <ul className="mt-2 text-sm space-y-2">
          {data.offerDetails.map((detail, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="font-bold">+ </span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg">
          {data.buttonText}
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
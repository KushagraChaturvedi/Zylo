import { SVGDecorations, PricingCard } from "../components";
import { OfferCardData } from "../types"

function OffersCard({ offerData }: { offerData: OfferCardData[] }) {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          Zylo Special Offers
        </h2>
        <div className="relative">
          <SVGDecorations />

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8">
            {offerData.map((data, index) => (
              <PricingCard key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersCard;
import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import {
  DancingBoy,
  HeroBannerSection,
  Instructor,
  MainFooter,
  MainHeader,
  OffersCard,
  SignUp,
} from "../sections";
import { Loadable } from "../components";

// Lazy-load OffersCard with Loadable
const OffersCardSection = Loadable(OffersCard);

const Home = () => {
  const { request, loading, error } = useApi();
  const [offersData, setOffersData] = useState([]);

  const fetchOffersData = async () => {
    const response = await request("get", "/offers");
    if (response.data) {
      console.log("Data:", response.data);
      setOffersData(response.data);
    } else {
      console.log("Error:", response.error);
    }
  };

  useEffect(() => {
    const data = fetchOffersData();
    // const data = [
    //   {
    //     price: "14,790",
    //     originalPrice: "42,990",
    //     monthlyPrice: "1,096",
    //     duration: "12 MONTH",
    //     offerDetails: [
    //       "FREE 1.5 months extension",
    //       "Extra ₹4,500 OFF applied",
    //       "1.5 months of membership pause",
    //     ],
    //     buttonText: "BUY NOW",
    //     colorPalette: "blue",
    //     highlights: ["No-cost EMI", "Limited time offer"],
    //   },
    //   {
    //     price: "19,990",
    //     originalPrice: "45,990",
    //     monthlyPrice: "1,666",
    //     duration: "12 MONTH",
    //     offerDetails: [
    //       "FREE 2 months extension",
    //       "Extra ₹5,000 OFF applied",
    //       "2 months of membership pause",
    //     ],
    //     buttonText: "BUY NOW",
    //     colorPalette: "orange",
    //     highlights: ["No-cost EMI", "Limited time offer"],
    //   },
    //   {
    //     price: "24,790",
    //     originalPrice: "49,990",
    //     monthlyPrice: "2,066",
    //     duration: "18 MONTH",
    //     offerDetails: [
    //       "FREE 3 months extension",
    //       "Extra ₹6,000 OFF applied",
    //       "3 months of membership pause",
    //     ],
    //     buttonText: "BUY NOW",
    //     colorPalette: "pinkPurple",
    //     highlights: ["No-cost EMI", "Limited time offer"],
    //   },
    // ]
    setOffersData(data);
  }, []);

  return (
    <div className="">

      {/* Hero Section */}
      <HeroBannerSection />

      {/* Dancing Boy */}
      <DancingBoy />

      {/* Zumba Festival Cards Section */}
      {loading ? (
        <OffersCardSection loading={true} offerData={[]} />
      ) : !error && offersData.length > 0 ? (
        <OffersCardSection offerData={offersData} loading={false} />
      ) : null}

      {/* Sign Up for Classes Section */}
      <SignUp />

      {/* Our Instructors Section */}
      <Instructor />

    </div>
  );
};

export default Home;

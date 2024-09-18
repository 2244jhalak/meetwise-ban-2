import AutoRecord from "./components/Homepage/AutoRecord";
import Banner from "./components/Homepage/Banner";
import TryMeet from "./components/Homepage/TryMeet";
import Footer from "./components/shared/Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <AutoRecord></AutoRecord>
      <TryMeet />
      <Footer />
    </div>
  );
}

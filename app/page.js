import NavBar from "./HomePage/NavBar";
import Banner from './HomePage/Banner.jsx'
import Category from "./HomePage/Category";
import Popular_Things from "./HomePage/Popular_Things";
import Featured_Trips from "./HomePage/Featured_Trips";

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Category />
      <Popular_Things />
      <Featured_Trips />
    </>
  );
}

import NavBar from "./HomePage/NavBar";
import Banner from './HomePage/Banner.jsx'
import Category from "./HomePage/Category";
import Popular_Things from "./HomePage/Popular_Things";

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Category />
      <Popular_Things />
    </>
  );
}

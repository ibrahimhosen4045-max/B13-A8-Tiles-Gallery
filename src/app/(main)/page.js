import About from "@/componet/About";
import Banner from "@/componet/Banner";
import HomeCard from "@/componet/HomeCard";
import HomeQualities from "@/componet/HomeQualities";
import Marquees from "@/componet/Marquees";




export default function Home() {
  return (
    <div className="">
        <Banner></Banner>
        <Marquees></Marquees>
        <About></About>
        <HomeCard></HomeCard>
        <HomeQualities></HomeQualities>
    </div>
  );
}

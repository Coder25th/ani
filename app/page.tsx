import Banner from "./components/final/Banner";
import HeadingWithAnimation from "./components/client/HeadingWithAnimation";
import PlayerWithAnimations from "./components/client/PlayerWithAnimations";

const Home = () => {
  return (
    <main>
      <div
        id="page"
        className="sm:min-h-[100vh] min-h-[70vh] w-[100%] sm:p-[0_1vw] p-[0_3vw] relative font-futura pt-[25vh] sm:pt-[18vh]"
      >
        <HeadingWithAnimation />
        <PlayerWithAnimations />
        <Banner />
      </div>
    </main>
  );
};

export default Home;

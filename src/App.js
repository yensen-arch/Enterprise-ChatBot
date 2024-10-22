import Navbar from "./components/Navbar.js";
import Carousel from "./components/Carousel.js";
import Cardgroup from "./components/Cardgroup.js";
function App() {
  return (
    <div className="min-h-screen bg-blue-300">
      <div className="w-1/3 min-h-screen  bg-white flex flex-col  mx-auto">
        <Navbar />
        <Carousel />
        <Cardgroup/>
      </div>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Rentals from "./components/Rentals";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      {/* navbar */}
      <Navbar />
      <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        {/* Filter */}
        <Filters />
        {/* Rentals */}
        <Rentals />
      </div>
      {/* Footer */}
      <div className="sticky flex items-center h-50 my-15 my-30">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;

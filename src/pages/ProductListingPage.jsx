import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import plants from '../data/plants';
import '../styles/listing.css'; // for LandingPage

const ProductListingPage = () => {
  return (
    <div>
      <Header />
      <main className="product-listing">
        <h2>Our Houseplants</h2>
        <div className="plant-grid">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListingPage;

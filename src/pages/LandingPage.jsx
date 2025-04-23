import { Link } from 'react-router-dom';
import '../styles/landing.css'; // for LandingPage

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-background">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p>Welcome to Paradise Nursery – your home for vibrant, healthy houseplants. We make plant care simple and joyful.</p>
          <Link to="/products">
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderAnnouncement from './component/HeaderAnnouncement';
import { Navbar} from './component/Navbar';
import CategoriesBar from './component/CategoriesBar';
import { HeroSlider, type HeroSlide } from './component/HeroSlider';



interface Saree {
  id: number;
  name: string;
  price: number;
  category: string;
}

function App() {
  const [sarees, setSarees] = useState<Saree[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Saree[]>('http://localhost:3001/api/sarees')
      .then((res) => {
        setSarees(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load sarees');
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: 24 }}>Loading Trivaah sarees...</div>;
  if (error) return <div style={{ padding: 24, color: 'red' }}>{error}</div>;
  // temporary static hero slides (replace with real images in /public/hero)
  const slides: HeroSlide[] = [
    {
      id: "salwar-under-2499",
      desktopImage: "/hero/hero1.jpeg",
      mobileImage: "/hero/hero1.jpeg",
      title: "Test hero",
      subtitle: "SALWAR SUITS\nUNDER ₹2499",
      badgeText: "",
      ctaLabel: "SHOP NOW",
      ctaLink: "#",
    },
    {
      id: "hero-2",
      desktopImage: "/hero/hero2.jpeg",
      mobileImage: "/hero/hero2.jpeg",
      title: "Ready-to-wear. Ready to wow.",
      subtitle: "SALWAR SUITS\nUNDER ₹2499", // we’ll split this into 2 lines via CSS
      badgeText: "",
      ctaLabel: "SHOP NOW",
      ctaLink: "#",
    },
    {
      id: "hero-3",
      desktopImage: "/hero/hero3.jpeg",
      mobileImage: "/hero/hero3.jpeg",
      title: "Test hero",
      subtitle: "SALWAR SUITS\nUNDER ₹2499",
      badgeText: "",
      ctaLabel: "SHOP NOW",
      ctaLink: "#",
    }
  ];
  
  
  return (
    <div>
    <HeaderAnnouncement />
    <Navbar />

    {/* nav bar with black line */}
    <CategoriesBar />

    {/* hero occupies full width under the menu */}
    <HeroSlider slides={slides} autoplayMs={5000} />
  </div>
  );
}

export default App;

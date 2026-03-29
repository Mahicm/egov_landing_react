import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { StatsSection } from './sections/StatsSection';
import { SustainingChange } from './sections/SustainingChange';
import { DigitPlatform } from './sections/DigitPlatform';
import { ProductList } from './sections/ProductList';
import { Supporters } from './sections/Supporters';
import { mockProducts } from './data/mockProducts';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <SustainingChange />
        <DigitPlatform />
        <ProductList products={mockProducts} />
        <Supporters />
      </main>
      <Footer />
    </div>
  );
}

export default App;

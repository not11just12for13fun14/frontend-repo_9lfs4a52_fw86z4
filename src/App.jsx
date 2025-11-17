import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Tracks, Schedule, Community, FAQ, CTA } from './components/Sections';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen" style={{
      ['--bg']: '#050B12',
      ['--elevated']: '#0C1824',
      ['--surface']: '#112031',
      ['--border']: '#1A2D44',
      ['--text']: '#E6EEF2',
      ['--muted']: '#90A4B4',
    }}>
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <Community />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import { Fragment } from 'react';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;

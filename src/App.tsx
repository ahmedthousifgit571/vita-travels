import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/home/Hero";
import { Stats } from "./components/home/Stats";
import { Destinations } from "./components/home/Destinations";
import { Categories } from "./components/home/Categories";
import { Testimonials } from "./components/home/Testimonials";
import { Quiz } from "./components/home/Quiz";
import { Newsletter } from "./components/home/Newsletter";
import { Pricing } from "./components/home/Pricing";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Categories />
        <Destinations />
        <Quiz />
        <Pricing />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;

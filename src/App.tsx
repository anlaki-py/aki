import { Analytics } from "@vercel/analytics/react";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <main>
        <header>
          <h1>anlaki</h1>
          <p className="subtitle">builds things</p>
        </header>
        <Projects />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-200 font-sans flex flex-col items-center">
      <div className="max-w-lg w-full p-8 md:p-12 flex-grow flex flex-col justify-center">
        <header className="mb-8">
          <h1 className="text-xl font-bold text-white tracking-tight">aki</h1>
          <p className="text-sm text-slate-400 mt-1">tech nerd who build things</p>
        </header>

        <Projects />
      </div>

      <Footer />
      <Analytics />
    </div>
  );
};

export default App;

import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="min-h-dvh bg-black text-slate-200 font-sans flex flex-col items-center relative overflow-hidden">
      {/* Background disk */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1200px] md:h-[1200px] bg-indigo-900/20 rounded-full blur-[100px]"></div>

      <div className="max-w-lg w-full p-8 md:p-12 flex-grow flex flex-col justify-center z-10">
        <header className="mb-8 animate-blur-in">
          <h1 className="text-xl font-bold text-white tracking-tight">aki</h1>
          <p className="text-sm text-slate-400 mt-1">tech nerd who builds things</p>
        </header>

        <div className="animate-blur-in delay-150">
          <Projects />
        </div>
      </div>

      <div className="w-full flex justify-center animate-fade-in delay-300 z-10">
        <Footer />
      </div>
      <Analytics />
    </div>
  );
};

export default App;

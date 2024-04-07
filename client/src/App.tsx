import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/home/HomePage";
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <main className="bg-slate-950 text-white">
      <Header />
      <div className="pt-20">
      <Toaster></Toaster>
        <HomePage />
      </div>
    </main>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MainSection, RoleSection } from './components/MainSection';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="h-[2px]" />
      <main className="flex-grow">
        <MainSection />
        <RoleSection />
        {/* Your main content here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
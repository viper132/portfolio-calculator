import ThemeToggler from '@components/ThemeToggler';
import Body from './parts/Body';
import Footer from './parts/Footer';

const App = () => {
  return (
    <section className="transition-all duration-300 h-screen w-screen flex flex-col bg-[#FFD369] dark:bg-[#4C3D3D]">
      <ThemeToggler />
      <Body />
      <Footer />
    </section>
  );
};

export default App;

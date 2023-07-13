import useTheme from '@hooks/Theme';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeToggler = () => {
  const { toggle, currentTheme } = useTheme();
  return (
    <button
      className="transition-all duration-300 absolute top-4 right-4 p-4 bg-[#4C3D3D] dark:bg-[#FFF7D4] text-[#FFF7D4] dark:text-[#4C3D3D] hover:opacity-90 active:opacity-80 rounded-full font-semibold outline-none shadow-md"
      onClick={toggle}
    >
      {currentTheme === 'dark' ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
};

export default ThemeToggler;

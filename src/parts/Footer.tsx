import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className=" flex items-center justify-center p-2">
      <a
        href="https://github.com/viper132"
        target="_blank"
        className="text-[#4C3D3D] dark:text-[#FFF7D4] hover:drop-shadow-md active:opacity-80 font-semibold flex gap-2 items-center"
      >
        <AiFillGithub />
        <p>Hugo Mulana Christon</p>
      </a>
    </div>
  );
};

export default Footer;

import { useState } from "react";
import { Button } from "./ui/button";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <header className="flex justify-center items-center w-full fixed bg-neutral-100/20 backdrop-blur-xl shadow-xl z-50">
      <div className="flex justify-between items-center container px-4 lg:px-10 py-4">
        <section className="bg-slate-300 px-4 py-3 rounded-lg">
          <a href="/">
            <div className="w-28">
              <img
                src="https://dataneuron.ai/logo2.png"
                alt=""
                className="object-contain w-full"
              />
            </div>
          </a>
        </section>
        <section>
          <Button onClick={toggleMenu}>
            <p className="text-2xl">{menuVisible ? <IoClose /> : <IoMenu />}</p>
          </Button>
        </section>
      </div>
    </header>
  );
};

export default Header;

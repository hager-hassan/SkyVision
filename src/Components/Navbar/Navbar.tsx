import { useContext } from "react";
import SearchInput from "../SearchInput/SearchInput";
import { ThemeContext } from "../../Context/ThemeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function Navbar() {
  const {theme , changeTheme} = useContext(ThemeContext)!;

  return (
    <nav>
      <div className="container px-3 py-3.5 bg-white-transparent dark:bg-black-transparent sm:border-2 
      sm:border-white dark:sm:border-gray-300 sm:rounded-xl sm:mt-5 transition-all duration-300">
        <div className="flex items-center justify-between">
          <div>
            <div>
              <h1 className="font-bold text-sky-600 dark:text-white sm:text-lg transition-all duration-300">SkyVision</h1>
            </div>
          </div>

          <div className="sm:flex sm:items-center sm:gap-4">
            <div className="hidden sm:block">
              <SearchInput />
            </div>

            <div>
              <button 
              onClick={() =>{changeTheme(theme)}}
              className="rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm px-3 py-1.5 border-2 
              border-slate-900 dark:border-white cursor-pointer min-w-21 transition-all duration-300">
                {theme === 'dark' ?
                <span className="flex items-center gap-1.5">
                  <MdOutlineLightMode className="text-[17px] font-bold"/> 
                  <span>Light</span>
                </span>
                :
                <span className="flex items-center gap-1.5">
                  <MdOutlineDarkMode className="text-[17px] font-bold"/> 
                  <span>Dark</span>
                </span>
                }
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 sm:hidden">
        <SearchInput />
      </div>
    </nav>
  );
}

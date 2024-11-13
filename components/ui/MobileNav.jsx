import { IoCloseOutline } from "react-icons/io5";
const MobileNav = ({ setIsShowing }) => {
  return (
    <nav className="text-white">
      <div className="cursor-pointer" onClick={() => setIsShowing(false)}>
        <IoCloseOutline className="text-4xl" />
      </div>
    </nav>
  );
};

export default MobileNav;

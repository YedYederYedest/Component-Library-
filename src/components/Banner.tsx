import type { ReactNode } from "react";
import { useState, createContext } from "react";
import classnames from "classnames";

type BannerContextType = {
  open: boolean;
  toggle: () => void;
};

const BannerContext = createContext<BannerContextType>({
  open: false,
  toggle: () => {},
});

type BannerProps = {
  children: ReactNode;
  className?: string;
  color?: string;
  [key: string]: any;
};

export default function Banner({children, className, color, ...rest}: BannerProps) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  const colorClass = color && `banner-${color}`;
  const allClasses = classnames(colorClass, className);

  return (
    <BannerContext.Provider value={{ open, toggle }}>
      <div className={allClasses} {...rest}>
        {children}
      </div>
    </BannerContext.Provider>
  );
}

export { BannerContext };

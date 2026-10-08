import type { ReactNode } from "react";
import { useState, useEffect, createContext } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

type ToastContextType = {
  open: boolean;
  toggle: () => void;
};

const ToastContext = createContext<ToastContextType>({
  open: false,
  toggle: () => {},
});

type ToastProps = {
  children: ReactNode;
  className?: string;
  color?: string;
  title: string;
  [key: string]: any;
};

export default function Toast({
  children,
  className,
  color,
  title,
  ...rest
}: ToastProps) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  useEffect(() => {
    const target = document.querySelector(
      ".general-toast-container"
    );

    if (!target) {
      console.error(
        "Element with class 'general-toast-container' not found."
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setOpen(true);
        }
      },
      {
        threshold: 1.0,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  const colorClass = color && `toast-${color}`;
  const allClasses = classNames(colorClass, className);

  return (
    <div className="toast-individual-container">
      {createPortal(
        <ToastContext.Provider value={{ open, toggle }}>
          {open && (
            <div className={allClasses} {...rest}>
              <div className={`toast-icon-${color}`}></div>

              <div className={`toast-title-${color}`}>
                {title}
              </div>

              <p className={`toast-text-${color}`}>
                {children}
              </p>
            </div>
          )}
        </ToastContext.Provider>,
        document.body
      )}
    </div>
  );
}

export { ToastContext };

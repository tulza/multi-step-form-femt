import clsx from "clsx";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "default" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={clsx(
        "h-12 w-32 select-none rounded-lg bg-marineBlue font-medium text-white",
        props.className,
      )}
    >
      {props.label}
    </button>
  );
});

export default Button;

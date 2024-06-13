import { forwardRef, type InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  description: string;
  variants?: "default";
}
const InputVariants =
  "h-12 w-full rounded-md border pl-4 text-marineBlue placeholder:text-coolGray";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 text-marineBlue">
        <p className="select-none">{props.description}</p>
        <input className={InputVariants} {...props} ref={ref} />
      </div>
    );
  },
);

export { TextInput };

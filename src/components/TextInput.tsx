import { forwardRef, type InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  description: string;
}
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 text-marineBlue">
        <p>{props.description}</p>
        <input
          className="h-12 w-full rounded-md border pl-4 text-marineBlue placeholder:text-coolGray"
          {...props}
          ref={ref}
        />
      </div>
    );
  },
);

export default TextInput;

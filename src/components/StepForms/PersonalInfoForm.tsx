import { useForm } from "react-hook-form";
import { TextInput } from "../TextInput";
import StepHeader from "../StepHeader";

type Input = {
  name: string;
  email: string;
  phone: string;
};

const PersonalInfoForm = () => {
  const { register } = useForm<Input>();
  return (
    <div className="w-full">
      <StepHeader
        title="Personal Info"
        description="Please provide your name, email address, and phone number."
      />
      <form className="flex flex-col gap-4">
        <TextInput
          placeholder="e.g. stephen King"
          description="Name"
          {...register("name")}
        />
        <TextInput
          placeholder="e.g. stephenking@lorem.com"
          description="Email Address"
          {...register("email")}
        />
        <TextInput
          placeholder="e.g. +1 234 567 890"
          description="Phone Number"
          {...register("phone")}
        />
      </form>
    </div>
  );
};

export default PersonalInfoForm;

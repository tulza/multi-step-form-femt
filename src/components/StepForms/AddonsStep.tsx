import { Checkmark } from "@/assets/images";
import StepHeader from "@components/StepHeader";

const AddonsStep = () => {
  return (
    <div className="h-full">
      <StepHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <div className="flex flex-col gap-4">
        <CheckBox
          label="Online service"
          description="Access to multiplayer games"
        />
        <CheckBox label="Large storage" description="Extra 1TB of cloud save" />
        <CheckBox
          label="Customizable profile"
          description="Custom theme on your profile"
        />
      </div>
    </div>
  );
};

type checkboxProps = {
  label?: string;
  description?: string;
  value?: string;
};
const CheckBox = ({ label, description }: checkboxProps) => {
  return (
    <div className="relative flex h-[80px] items-center rounded-lg  ">
      <input
        type="checkbox"
        className="peer absolute h-full w-full opacity-0"
      />
      <div className="pointer-events-none absolute h-full w-full rounded-[inherit] border peer-checked:border-purplishBlue peer-checked:bg-purplishBlue/5" />
      <div className="pointer-events-none m-6 grid aspect-square w-[20px] place-items-center rounded border peer-checked:bg-purplishBlue">
        <img src={Checkmark} className="select-none" />
      </div>
      <div className="flex select-none flex-col">
        <p className="font-bold text-marineBlue">{label}</p>
        <p className="text-coolGray">{description}</p>
      </div>
    </div>
  );
};

export default AddonsStep;

import StepHeader from "../StepHeader";

const SelectPlan = () => {
  return (
    <div className="h-full">
      <StepHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <div className="flex justify-between">
        <RadioSelectBox />
        <RadioSelectBox />
        <RadioSelectBox />
      </div>
    </div>
  );
};

const RadioSelectBox = ({ value }: { value?: string }) => {
  return (
    <div className="relative h-40 w-[135px] rounded-md border border-marineBlue">
      <input
        type="radio"
        name="plan"
        className="absolute h-full w-full"
        value={value}
      />
    </div>
  );
};

export default SelectPlan;

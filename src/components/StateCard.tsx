import ProcessStep from "./ProcessStep";

type StateCardProps = {
  currentStep: number;
};
const StateCard = ({ currentStep }: StateCardProps) => {
  return (
    <div className="sideBarImage flex min-h-[568px] min-w-[274px] flex-col gap-8 p-8 pt-10">
      <ProcessStep id={1} currentStep={currentStep} description="your info" />
      <ProcessStep id={2} currentStep={currentStep} description="select plan" />
      <ProcessStep id={3} currentStep={currentStep} description="add-ons" />
      <ProcessStep id={4} currentStep={currentStep} description="summary" />
    </div>
  );
};

export default StateCard;

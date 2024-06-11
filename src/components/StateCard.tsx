import ProcessStep from "./ProcessStep";

type StateCardProps = {
  currentStep: number;
};
const StateCard = ({ currentStep }: StateCardProps) => {
  return (
    <div className="sideBarImage flex h-[568px] w-[274px] flex-col gap-8 p-8 pt-10">
      <ProcessStep stateId={1} description="your info" />
      <ProcessStep stateId={2} description="select plan" />
      <ProcessStep stateId={3} description="add-ons" />
      <ProcessStep stateId={4} description="summary" />
    </div>
  );
};

export default StateCard;

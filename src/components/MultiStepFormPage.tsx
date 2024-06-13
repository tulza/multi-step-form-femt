import { useState } from "react";
import SinglePage from "./SinglePage";
import StateCard from "./StateCard";
import PersonalInfoForm from "./StepForms/PersonalInfoForm";
import Button from "./Button";
import SelectPlan from "./StepForms/SelectPlan";
import AddonsStep from "./StepForms/AddonsStep";

const stateComponent = [
  <PersonalInfoForm />,
  <SelectPlan />,
  <AddonsStep />,
  <PersonalInfoForm />,
];

const MultiStepFormPage = () => {
  const [state, setState] = useState(1);

  const handleNext = () => {
    if (state >= stateComponent.length) return;
    setState(state + 1);
  };
  const handlePrevious = () => {
    if (state <= 1) return;
    setState(state - 1);
  };

  return (
    <SinglePage classname="bg-magnolia overflow-hidden" centerObj>
      <div className="flex w-[940px] gap-4 rounded-2xl bg-white p-4 shadow-sm">
        <StateCard currentStep={state} />
        <div className="flex w-full justify-center">
          <div className=" m-8 mb-4 flex w-[450px] flex-col justify-between">
            {stateComponent[state - 1]}
            <div className="flex flex-row-reverse items-center justify-between">
              <Button label="Next Step" onClick={handleNext} />
              {state != 1 && <button onClick={handlePrevious}>Go back</button>}
            </div>
          </div>
        </div>
      </div>
    </SinglePage>
  );
};

export default MultiStepFormPage;

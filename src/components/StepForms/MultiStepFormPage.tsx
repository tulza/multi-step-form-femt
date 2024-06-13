import { useState } from "react";
import SinglePage from "../SinglePage";
import StateCard from "../StateCard";
import PersonalInfoForm from "./PersonalInfoForm";
import Button from "../Button";
import SelectPlan from "./SelectPlan";
import AddonsStep from "./AddonsStep";
import FinishUpStep from "./FinishUpStep";

const stateComponent = [
  <PersonalInfoForm />,
  <SelectPlan />,
  <AddonsStep />,
  <FinishUpStep />,
];

const MultiStepFormPage = () => {
  const [state, setState] = useState(0);

  const handleNext = () => {
    if (state >= stateComponent.length - 1) return;
    setState(state + 1);
  };
  const handlePrevious = () => {
    if (state <= 0) return;
    setState(state - 1);
  };

  return (
    <SinglePage classname="bg-magnolia overflow-hidden text-coolGray" centerObj>
      <div className="flex w-[940px] gap-4 rounded-2xl bg-white p-4 shadow-sm">
        <StateCard currentStep={state} />
        <div className="flex w-full justify-center">
          <div className=" m-8 mb-4 flex w-[450px] flex-col justify-between">
            {stateComponent[state]}
            <div className="flex flex-row-reverse items-center justify-between">
              <Button label="Next Step" onClick={handleNext} />
              {state != 0 && (
                <button className="font-medium" onClick={handlePrevious}>
                  Go back
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </SinglePage>
  );
};

export default MultiStepFormPage;

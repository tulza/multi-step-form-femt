import { useState } from "react";
import SinglePage from "./SinglePage";
import StateCard from "./StateCard";
import PersonalInfoForm from "./PersonalInfoForm";
import Button from "./Button";

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

  const stateComponent = [
    <PersonalInfoForm />,
    <PersonalInfoForm />,
    <PersonalInfoForm />,
  ];

  return (
    <SinglePage classname="bg-magnolia overflow-hidden" centerObj>
      <div className="flex w-[940px] gap-[52px] rounded-2xl bg-white p-4 shadow-sm">
        <StateCard currentStep={state} />
        <div className="flex w-full flex-col justify-between p-8 pb-4">
          {stateComponent[state - 1]}
          <div className="flex flex-row-reverse items-center justify-between">
            <Button label="Next Step" onClick={handleNext} />
            {state != 1 && <button onClick={handlePrevious}>Go back</button>}
          </div>
        </div>
      </div>
    </SinglePage>
  );
};

export default MultiStepFormPage;

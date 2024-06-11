import { useState } from "react";
import SinglePage from "./SinglePage";
import StateCard from "./StateCard";
import PersonalInfoForm from "./PersonalInfoForm";

const MultiStepFormPage = () => {
  const [state, setState] = useState(1);

  const stateComponent = [<PersonalInfoForm />];

  return (
    <SinglePage classname="bg-magnolia overflow-hidden" centerObj>
      <div className="flex w-[940px] gap-[52px] rounded-2xl bg-white p-4 shadow-lg">
        <StateCard currentStep={state} />
        {stateComponent[state - 1]}
      </div>
    </SinglePage>
  );
};

export default MultiStepFormPage;

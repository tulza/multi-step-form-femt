import { useState } from "react";
import SinglePage from "./SinglePage";
import StateCard from "./StateCard";

const MultiStepFormPage = () => {
  const [state, setState] = useState(1);
  return (
    <SinglePage classname="bg-magnolia" centerObj>
      <div className="flex h-[600px] w-[940px] gap-9 rounded-2xl bg-white p-4 shadow-lg">
        <StateCard />
        <div className="m-16 h-full">
          <h1>Personal Info</h1>
        </div>
      </div>
    </SinglePage>
  );
};

export default MultiStepFormPage;

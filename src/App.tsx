import "@styles/styles.css";
import "@styles/fonts.css";
import MultiStepFormPage from "@components/StepForms/MultiStepFormPage";
import { frontendMentorIcon } from "./assets/images";

function App() {
  return (
    <>
      <MultiStepFormPage />
      <div className="pointer-events-none absolute bottom-0 left-0 m-2 flex select-none items-center">
        <img src={frontendMentorIcon} className="rounded-full shadow-lg" />
        <p className="ml-2 font-bold text-gray-700">Tulza</p>
      </div>
    </>
  );
}

export default App;

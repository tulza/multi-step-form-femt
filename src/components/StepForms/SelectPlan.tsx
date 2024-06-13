import { motion } from "framer-motion";
import StepHeader from "../StepHeader";
import { IconAdvance, IconArcade, IconPro } from "@/assets/images";

const SelectPlan = () => {
  return (
    <div className="h-full">
      <StepHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <div className="flex justify-between">
        <RadioSelectBox icon={IconArcade} />
        <RadioSelectBox icon={IconAdvance} />
        <RadioSelectBox icon={IconPro} />
      </div>
      <div className="mt-8 flex h-12 w-full items-center justify-center gap-5 rounded-md bg-magnolia">
        <p>Yearly</p>
        <div className="flex h-5 w-10 rounded-full bg-marineBlue p-1">
          <motion.div
            className="aspect-square w-3 rounded-full bg-white"
            layout
          />
        </div>
        <p>Monthly</p>
      </div>
    </div>
  );
};

const RadioSelectBox = ({ value, icon }: { value?: string; icon?: string }) => {
  return (
    <motion.div className="relative h-40 w-[135px]" whileTap={{ scale: 0.9 }}>
      <input
        type="radio"
        name="plan"
        className="peer absolute h-full w-full opacity-0"
        value={value}
      />
      <div className="peer-checked:bg-purplishBlue/5 flex h-full flex-col justify-between rounded-md border p-4 pb-5 peer-checked:border-purplishBlue">
        <img src={icon} className="w-min select-none" />
        <div>
          <h3 className=" font-bold text-marineBlue">Arcade</h3>
          <p className="text-sm text-coolGray">$90/yr</p>
          <p className="text-sm text-marineBlue">2 months free</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SelectPlan;

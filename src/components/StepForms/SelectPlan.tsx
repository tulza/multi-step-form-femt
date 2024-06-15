import { motion } from "framer-motion";
import StepHeader from "../StepHeader";
import { IconAdvance, IconArcade, IconPro } from "@/assets/images";
import { useState } from "react";

const SelectPlan = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const toggle = () => setIsAnnual(!isAnnual);
  return (
    <div className="h-full">
      <StepHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <div className="flex justify-between">
        <RadioSelectBox icon={IconArcade} isAnnual={isAnnual} />
        <RadioSelectBox icon={IconAdvance} isAnnual={isAnnual} />
        <RadioSelectBox icon={IconPro} isAnnual={isAnnual} />
      </div>
      <div className="mt-8 flex h-12 w-full items-center justify-center gap-5 rounded-md bg-magnolia">
        <p>Yearly</p>
        <div
          className="relative flex h-5 w-10 rounded-full bg-marineBlue p-1"
          style={isAnnual ? {} : { justifyContent: "end" }}
        >
          <button className="absolute h-full w-full" onClick={toggle} />
          <motion.div
            className="pointer-events-none left-0 top-0 aspect-square w-3 rounded-full bg-white"
            layout
          />
        </div>
        <p>Monthly</p>
      </div>
    </div>
  );
};

const RadioSelectBox = ({
  value,
  icon,
  isAnnual,
}: {
  value?: string;
  icon?: string;
  isAnnual?: boolean;
}) => {
  return (
    <motion.div className="relative w-[135px] " whileTap={{ scale: 0.9 }}>
      <input
        type="radio"
        name="plan"
        className="peer absolute h-full w-full opacity-0"
        value={value}
      />
      <div className="flex h-full flex-col justify-between rounded-md border p-4 pb-5 peer-checked:border-purplishBlue peer-checked:bg-purplishBlue/5">
        <img src={icon} className="w-min select-none" />
        <motion.div className="mt-10 h-min *:!scale-100">
          <h3 className=" font-bold text-marineBlue">Arcade</h3>
          <p className="text-sm">$90/yr</p>
          <motion.div
            animate={
              isAnnual
                ? { opacity: 1, scaleY: 1 }
                : { opacity: 0, height: 0, filter: "blur(4px)" }
            }
          >
            <p className="text-sm text-marineBlue">2 months free</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SelectPlan;

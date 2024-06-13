import { memo } from "react";
import clsx from "clsx";

interface StateIndicatorProps {
  id: number;
  description: string;
  currentStep: number;
  mobile?: boolean;
}

const ProcessStep = memo(
  ({ id, description, currentStep, mobile }: StateIndicatorProps) => {
    if (mobile) {
      return <StepBubble id={id} />;
    }

    return (
      <div className="flex items-center gap-4">
        <StepBubble id={id + 1} active={currentStep === id} />
        <div className="flex h-full flex-col justify-between leading-3">
          <p className="text-[14px] uppercase tracking-tighter">
            Step {id}
          </p>
          <h3 className="text-base font-bold uppercase tracking-wider text-white">
            {description}
          </h3>
        </div>
      </div>
    );
  },
);

const StepBubble = memo(({ id, active }: { id: number; active?: boolean }) => {
  return (
    <div
      className={clsx(
        "grid aspect-square w-8 place-items-center rounded-full border text-sm font-bold text-white",
        active && "border-none bg-lightBlue !text-marineBlue",
      )}
    >
      {id}
    </div>
  );
});

export default ProcessStep;

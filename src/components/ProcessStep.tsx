interface StateIndicatorProps {
  stateId: number;
  description: string;
  mobile?: boolean;
}

const ProcessStep = ({ ...props }: StateIndicatorProps) => {
  if (props.mobile) {
    return <StepBubble id={props.stateId} />;
  }

  return (
    <div className="flex items-center gap-4">
      <StepBubble id={props.stateId} />
      <div className="flex flex-col leading-3">
        <p className="text-sm uppercase tracking-tighter text-coolGray">
          Step {props.stateId}
        </p>
        <h3 className="text-sm font-bold uppercase tracking-wider text-white">
          {props.description}
        </h3>
      </div>
    </div>
  );
};

const StepBubble = ({ id }: { id: number }) => {
  return (
    <div className="grid aspect-square w-8 place-items-center rounded-full border text-sm text-white">
      {id}
    </div>
  );
};

export default ProcessStep;

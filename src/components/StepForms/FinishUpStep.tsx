import StepHeader from "@components/StepHeader";

const FinishUpStep = () => {
  return (
    <div className="h-full">
      <StepHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <div className="flex flex-col rounded-md bg-magnolia p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-marineBlue">Arcade (Yearly)</p>
            <p className=" underline">Change</p>
          </div>
          <p className="font-bold text-marineBlue">$9/yr</p>
        </div>
        <hr className="my-5 border-lightGray" />
        <div className="flex flex-col gap-4">
          <ServiceFeeDisplay label="Online service" cost={1} />
          <ServiceFeeDisplay label="Larger storage" cost={2} />
        </div>
      </div>
      <div className="flex justify-between p-6">
        <p>Total (per month)</p>
        <p className="text-lg font-bold text-purplishBlue">+$12/yr</p>
      </div>
    </div>
  );
};

type ServiceDisplayProps = {
  label: string;
  cost: number;
};
const ServiceFeeDisplay = ({ label, cost }: ServiceDisplayProps) => {
  return (
    <div className="flex justify-between">
      <p>{label}</p>
      <p className="text-marineBlue">+${cost}/yr</p>
    </div>
  );
};
export default FinishUpStep;

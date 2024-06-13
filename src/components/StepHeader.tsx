type StepHeaderProps = {
  title: string;
  description: string;
};
const StepHeader = ({ title, description }: StepHeaderProps) => {
  return (
    <>
      <h1 className="text-[32px] font-bold text-marineBlue">{title}</h1>
      <h3 className="mb-10 text-coolGray">{description}</h3>
    </>
  );
};

export default StepHeader;

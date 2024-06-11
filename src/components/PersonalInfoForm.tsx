import TextInput from "./TextInput";

const PersonalInfoForm = () => {
  return (
    <div className="m-12 h-full">
      <h1 className="text-3xl font-bold text-marineBlue">Personal Info</h1>
      <h3 className="text-coolGray">
        Please provide your name, email address, and phone number.
      </h3>
      <form className="mt-8 flex flex-col gap-4">
        <TextInput placeholder="e.g. stephen King" description="Name" />
        <TextInput
          placeholder="e.g. stephenking@lorem.com"
          description="Email Address"
        />
        <TextInput
          placeholder="e.g. +1 234 567 890"
          description="Phone Number"
        />
      </form>
    </div>
  );
};

export default PersonalInfoForm;

import clsx from "clsx";

interface PageProps {
  children: React.ReactNode;
  scrollable?: boolean;
  centerObj?: boolean;
  classname?: string;
}

const SinglePage = ({ ...props }: PageProps) => {
  return (
    <div
      className={clsx(
        "min-h-dvh w-dvw",
        props.centerObj && "grid place-items-center",
        props.scrollable && "overflow-y-scroll",
        props.classname,
      )}
    >
      {props.children}
    </div>
  );
};

export default SinglePage;

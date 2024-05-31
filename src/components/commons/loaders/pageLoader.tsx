import { MutatingDots } from "./react-loader-spinner";

export default function Loading() {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#76ABAE"
      secondaryColor="#76ABAE"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperClass="flex justify-center items-center"
    />
  );
}

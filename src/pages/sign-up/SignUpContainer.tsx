import SignUpHeader from "./SignUpHeader";
import SignUpForm from "./SignUpForm";
import SignUpImage from "./SignUpImage";

const SignUpContainer = () => {
  return (
    <div className="flex flex-row w-full h-full bg-[#E3D9C7]">
      <SignUpImage />
      <div className="lg:w-1/2 md:w-full p-8 flex flex-col items-center justify-center bg-[#E3D9C7] shadow-lg rounded-l-3xl lg:rounded-tl-none lg:rounded-bl-none">
        <SignUpHeader />
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpContainer;

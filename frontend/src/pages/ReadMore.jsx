import { useLocation } from "react-router-dom";
import GrainyBackground from "../components/GrainyBackground";
import { RenderText } from "../components/RenderRichText";
import Transition from "../utils/transition";

function ReadMore() {
  const { state } = useLocation();
  const message = state?.message; // Get the message object

  if (!message) {
    return <p className="text-center text-white">No message found.</p>;
  }

  return (
    <div className="container mx-auto max-w-6xl flex flex-col justify-center items-center h-auto py-[100px] md:py-[200px] font-karla px-5">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-anton text-center text-black  mb-4">
        {message.title}
      </h1>
      <p className="text-2xl text-center text-black">
        <span className="font-semibold">Preacher: </span>
        {message.preacher}
      </p>
      <p className="text-2xl text-center text-black">
        <span className="font-semibold">Bible Portion: </span>
        {message.portion}
      </p>
      <div className="mt-20  text-black text-justify ">
        <RenderText content={message.content} />
      </div>
    </div>
  );
}

export default Transition(ReadMore);

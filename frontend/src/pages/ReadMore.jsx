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
    <GrainyBackground
      bgImg="images/noise5.webp"
      content={
        <div className="flex flex-col justify-center items-center h-auto py-[100px] md:py-[200px] font-karla px-5">
          <h1 className="text-xl md:text-4xl font-anton text-center text-white mb-4">
            {message.title}
          </h1>
          <p className="text-lg text-center text-white">
            <span className="font-semibold">Preacher: </span>
            {message.preacher}
          </p>
          <p className="text-lg text-center text-white">
            <span className="font-semibold">Bible Portion: </span>
            {message.portion}
          </p>
          <div className="mt-12 text-white text-xl lg:text-4xl max-w-3xl text-justify">
            <RenderText content={message.content} />
          </div>
        </div>
      }
    />
  );
}

export default Transition(ReadMore);

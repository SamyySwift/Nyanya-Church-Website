import { Link } from "react-router-dom";
import Transition from "../utils/transition";

const New = () => {
  return (
    <div className="container mx-auto px-5">
      <section className="my-32 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl md:text-6xl lg:text-8xl text-black">
              <span className="font-anton">I'm </span>
              <span className="font-saol italic">New</span>
            </h1>
            <p className="mt-5 text-black text-lg md:text-xl max-w-xl font-karla leading-loose">
              We're passionate about people feeling like they belong to our
              family! No matter who you are or where you come from, our aim is
              for you to feel welcomed and comfortable as soon as you arrive.
            </p>

            {/* Buttons */}
            <div className="mt-[60px] grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0 font-karla">
              <a
                href="mailto:tacnna2024@gmail.com"
                className="border border-black px-6 py-4 rounded-lg text-center hover:bg-[#F7F2E9] text-black hover:text-black"
              >
                Pastoral Care
              </a>
              <Link
                className="border border-black px-6 py-4 rounded-lg text-center hover:bg-[#F7F2E9] text-black hover:text-black"
                to="/daily-word"
              >
                Daily Word
              </Link>

              <Link
                className="border border-black px-6 py-4 rounded-lg text-center hover:bg-[#F7F2E9] text-black hover:text-black col-span-2"
                to="/join-a-group"
              >
                Join a Team
              </Link>
              <Link
                className="border border-black px-6 py-4 rounded-lg text-center hover:bg-[#F7F2E9] text-black hover:text-black col-span-2"
                to="/plan-your-visit"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full  lg:w-1/2 mt-[50px]">
            <img
              src="images/welcome-bg-2.webp"
              alt="Church members"
              className="rounded-xl shadow-md w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
    // <GrainyBackground
    //   bgImg="images/noise.webp"
    //   content={
    //     <section className="py-[100px] md:py[150px]">
    //       <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center gap-12">
    //         {/* Text Section */}
    //         <div className="w-full lg:w-1/2">
    //           <h1 className="text-5xl sm:text-7xl text-black">
    //             <span className="font-anton">I'm </span>
    //             <span className="font-saol italic">New</span>
    //           </h1>
    //           <p className="mt-5 text-black text-lg md:text-xl max-w-xl font-karla leading-loose">
    //             We're passionate about people feeling like they belong to our
    //             family! No matter who you are or where you come from, our aim is
    //             for you to feel welcomed and comfortable as soon as you arrive.
    //           </p>

    //           {/* Buttons */}
    //           <div className="mt-[60px] grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0 font-karla">
    //             <a
    //               href="mailto:tacnna2024@gmail.com"
    //               className="border border-black px-6 py-4 rounded-lg text-center hover:bg-[#F7F2E9] text-black hover:text-black"
    //             >
    //               Pastoral Care
    //             </a>
    //             <Link
    //               className="border border-black px-6 py-4 rounded-lg text-center hover:bg-[#F7F2E9] text-black hover:text-black"
    //               to="/daily-word"
    //             >
    //               Daily Word
    //             </Link>

    //             <Link
    //               className="border border-black px-6 py-4 rounded-lg text-center hover:bg-[#F7F2E9] text-black hover:text-black col-span-2"
    //               to="/join-a-group"
    //             >
    //               Join a Team
    //             </Link>
    //             <Link
    //               className="border border-black px-6 py-4 rounded-lg text-center hover:bg-[#F7F2E9] text-black hover:text-black col-span-2"
    //               to="/plan-your-visit"
    //             >
    //               Plan Your Visit
    //             </Link>
    //           </div>
    //         </div>

    //         {/* Image Section */}
    //         <div className="w-full  lg:w-1/2 mt-[50px]">
    //           <img
    //             src="images/welcome-bg-2.webp"
    //             alt="Church members"
    //             className="rounded-xl shadow-md w-full h-[400px] md:h-[600px] object-cover"
    //           />
    //         </div>
    //       </div>
    //     </section>
    //   }
    // />
  );
};

export default Transition(New);

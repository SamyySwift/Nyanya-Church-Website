import React from "react";
import Label from "./ui/label";
import Input from "./ui/input";
import { cn } from "../utils/cn";
import { useState } from "react";

export function ContactForm({ team }) {
  const [result, setResult] = React.useState("");
  const [techAreas, setTechAreas] = useState({
    sound: false,
    lighting: false,
    media: false,
  });

  const handleTechAreaChange = (e) => {
    const { name, checked } = e.target;
    setTechAreas((prevTechAreas) => ({
      ...prevTechAreas,
      [name]: checked,
    }));
  };

  const accessKey = "2fe1f226-b3df-4223-b2ae-01222c28aabb";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending your request...");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your request has been submitted successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="max-w-sm md:max-w-xl w-full mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black font-grotesque">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {team} Contact Form
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Use the form to submit your request.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              // value={firstName}
              name="firstname"
              // onChange={(e) => setFirstName(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              name="lastname"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            placeholder="08023354663"
            type="number"
            name="Phone Number"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            name="Email Address"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            placeholder="I would like to join the team..."
            type="text"
            name="message"
          />
        </LabelInputContainer>
        {/* {team === "Tech Team" && (
          <LabelInputContainer className="mb-8">
            <Label htmlFor="choice">
              In which area of tech would you like to volunteer? (Check all that
              apply)
            </Label>
            <div className="flex space-x-5 ">
              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="sound"
                  name="sound"
                  checked={techAreas.sound}
                  onChange={handleTechAreaChange}
                />
                <Label htmlFor="sound">Sound</Label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="lighting"
                  name="lighting"
                  checked={techAreas.lighting}
                  onChange={handleTechAreaChange}
                />
                <Label htmlFor="lighting">Lighting</Label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="media"
                  name="media"
                  checked={techAreas.media}
                  onChange={handleTechAreaChange}
                />
                <Label htmlFor="media">Media</Label>
              </div>
            </div>
          </LabelInputContainer>
        )} */}

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
      <h1 className="text-white font-thin font-grotesque text-sm md:text-lg">
        {result}
      </h1>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ContactForm;

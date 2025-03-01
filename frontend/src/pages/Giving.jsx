import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import PageTitle from "../components/PageTitle";
import Transition from "../utils/transition";
import HeroSection from "../components/HeroSection";

const GivingPage = () => {
  return (
    <>
      <PageTitle
        title="Giving | Nyanya Assembly"
        description="Chucrh giving page"
      />
      <HeroSection backgroundVideo="/bg.mp4" svg_color="#F7F2E9" />

      <OnlineGiving />
    </>
  );
};

const OnlineGiving = () => {
  // const publicKey = "pk_live_59554d542cddaae21f2933b293e009041f62f4f6";
  // const [email, setEmail] = useState("");
  // const [amount, setAmount] = useState(1000);
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [purpose, setPurpose] = useState("Tithes");

  // const amountInKobo = amount * 100; // Convert amount to kobo for Paystack

  // const componentProps = {
  //   email,
  //   amount: amountInKobo,
  //   metadata: {
  //     name,
  //     phone,
  //     purpose,
  //   },
  //   publicKey,
  //   text: "Donate Now",
  //   onSuccess: () => alert("Thanks for your donation!"),
  //   onClose: () => alert("Transaction was not completed"),
  // };

  // // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="bg-[#F7F2E9]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl lg:max-w-4xl  py-[90px]">
        <section className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-alfa mb-5">Why We Give</h2>
          <p className="text-xl lg:text-2xl leading-normal lg:leading-relaxed text-justify font-karla">
            Giving is a vital part of our worship and relationship with God. It
            is a way for us to express our gratitude for the blessings we
            receive and to contribute to the work of the church in spreading the
            gospel and serving our community. Your generosity allows us to
            continue supporting various ministries, outreach programs, and
            missionary work, making a lasting impact both locally and globally.
          </p>
          <p className="text-xl lg:text-2xl  leading-normal lg:leading-relaxed text-justify font-karla">
            We believe that giving is a reflection of our heart's devotion to
            God and an opportunity to participate in His work. Whether through
            tithes, offerings, or special donations, your support helps us to
            fulfill our mission and extend the love of Christ to others.
          </p>
        </section>

        <h1 className="text-2xl md:text-3xl font-alfa mt-[60px]">
          Make A Bank Transfer
        </h1>
        <p className="text-xl lg:text-2xl leading-normal font-karla mt-5 lg:leading-relaxed ">
          <div className="mb-3 font-semibold underline">
            Our account details are: <br />
          </div>
          Account Number: <strong>0053120230</strong>
          <br />
          Account Name:{" "}
          <strong> The Apostolic Church Nigeria Nyanya Assembly </strong>
          <br />
          Bank Name:<strong> Access Bank</strong> <br />
          <br />
          Once you’ve made a transfer please, email the team at{" "}
          <strong>tacnna2024@gmail.com</strong> to let us know about your
          giving. This allows us to identify your giving, and send you a thank
          you note.
        </p>
        {/* <h1 className="text-2xl md:text-3xl mb-6 md:mb-10">
          <span className="font-semibold">Make A Card Payment</span>
        </h1>
        <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg font-karla max-w-md mx-auto">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-sm md:text-base">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-2 md:p-3 border rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm md:text-base">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 md:p-3 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm md:text-base">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-2 md:p-3 border rounded-md"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm md:text-base">
                Amount (NGN)
              </label>
              <input
                type="number"
                className="w-full p-2 md:p-3 border rounded-md"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm md:text-base">
                Payment Purpose
              </label>
              <select
                className="w-full p-2 md:p-3 border rounded-md"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              >
                <option value="Tithes">Tithes</option>
                <option value="Offerings">Offerings</option>
                <option value="Missions">Missionary Offerings</option>
              </select>
            </div>
            <div>
              <PaystackButton
                {...componentProps}
                className="w-full bg-[#f7f2e9] text-black px-4 py-2 md:px-6 md:py-3 rounded-md cursor-pointer hover:bg-black hover:text-white transition duration-300"
              />
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Transition(GivingPage);

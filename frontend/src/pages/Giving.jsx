import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";
import Transition from "../utils/transition";

const GivingPage = () => {
  return (
    <>
      <PageTitle
        title="Giving | Nyanya Assembly"
        description="Different church groups"
      />
      <Hero text="Giving" background="video" src="/bg.webm" />

      <OnlineGiving />
    </>
  );
};

const OnlineGiving = () => {
  const publicKey = "pk_live_59554d542cddaae21f2933b293e009041f62f4f6";
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(1000);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("Tithes");

  const amountInKobo = amount * 100; // Convert amount to kobo for Paystack

  const componentProps = {
    email,
    amount: amountInKobo,
    metadata: {
      name,
      phone,
      purpose,
    },
    publicKey,
    text: "Donate Now",
    onSuccess: () => alert("Thanks for your donation!"),
    onClose: () => alert("Transaction was not completed"),
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl lg:max-w-3xl my-10 font-grotesque space-y-10">
        <section className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Why We Give</h2>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-justify">
            Giving is a vital part of our worship and relationship with God. It
            is a way for us to express our gratitude for the blessings we
            receive and to contribute to the work of the church in spreading the
            gospel and serving our community. Your generosity allows us to
            continue supporting various ministries, outreach programs, and
            missionary work, making a lasting impact both locally and globally.
          </p>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-justify">
            We believe that giving is a reflection of our heart's devotion to
            God and an opportunity to participate in His work. Whether through
            tithes, offerings, or special donations, your support helps us to
            fulfill our mission and extend the love of Christ to others.
          </p>
        </section>

        <h1 className="font-bold text-2xl md:text-3xl">Make A Bank Transfer</h1>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
          Our account details are: <br />
          <strong>Account Name: </strong> The Apostolic Church Nyanya Assembly{" "}
          <br />
          <strong>Account Number: </strong>0053120230
          <br />
          <strong>Bank Name:</strong> Access Bank <br />
          <br />
          Once you’ve made a transfer please, email the team at{" "}
          <strong>tacnna2024@gmail.com</strong> to let us know about your
          giving. This allows us to identify your giving, and send you a thank
          you note.
        </p>
        <h1 className="text-2xl md:text-3xl mb-6 md:mb-10">
          <span className="font-semibold">Make A Card Payment</span>
        </h1>
        <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg font-grotesque max-w-md mx-auto">
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
        </div>
      </div>
    </>
  );
};

export default Transition(GivingPage);

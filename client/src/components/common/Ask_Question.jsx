import { useState } from "react";

export default function QuestionForm() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("general");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ question, category, details });
    alert("Question submitted successfully!");
    setQuestion("");
    setCategory("general");
    setDetails("");
  };

  return (
    <div className="mt-10 lg:mt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg lg:w-[80%] mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-bgprimary text-center">
          Any Question
        </h2>
        <div>
          <div className="mb-4">
            <label className="block font-semibold mb-1  text-gray-700">
              Subject
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-gray-700">
              Describe
            </label>
            <textarea
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="8"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-textsecondary text-white p-2 rounded-md hover:bg-bgprimary cursor-pointer transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

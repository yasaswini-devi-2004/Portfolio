import React, { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0); // 1–5
  const [hoverRating, setHoverRating] = useState(0);

  const [answerDesign, setAnswerDesign] = useState("");
  const [answerContent, setAnswerContent] = useState("");
  const [answerUsability, setAnswerUsability] = useState("");

  const [status, setStatus] = useState(null); // success / error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!name || rating === 0) {
      setStatus("Please enter your name and give a rating.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          rating,
          answerDesign,
          answerContent,
          answerUsability,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit feedback");
      }

      setStatus("Thank you! Your feedback has been submitted.");
      // reset form
      setName("");
      setRating(0);
      setHoverRating(0);
      setAnswerDesign("");
      setAnswerContent("");
      setAnswerUsability("");
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again later.");
    }
  };

  // Star component
  const renderStar = (starValue) => {
    const filled = starValue <= (hoverRating || rating);

    return (
      <button
        key={starValue}
        type="button"
        onClick={() => setRating(starValue)}
        onMouseEnter={() => setHoverRating(starValue)}
        onMouseLeave={() => setHoverRating(0)}
        className="text-3xl focus:outline-none"
      >
        <span className={filled ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      </button>
    );
  };

  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-white to-amber-50/40 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white/90 border border-amber-100 rounded-2xl shadow-xl px-8 py-10"
      >
        <h1 className="text-3xl font-extrabold mb-2 text-center">
          Website Feedback
        </h1>
        <p className="text-center text-gray-600 mb-8 text-sm">
          Help me improve this portfolio by sharing your honest feedback.
        </p>

        {/* Name */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-amber-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Enter your name"
          />
        </div>

        {/* Star Rating */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">
            Overall rating of this website
          </label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map(renderStar)}
            {rating > 0 && (
              <span className="ml-3 text-sm text-gray-600">
                {rating} / 5
              </span>
            )}
          </div>
        </div>

        {/* Question 1 */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">
            What do you think about the design (colors, layout)?
          </label>
          <textarea
            value={answerDesign}
            onChange={(e) => setAnswerDesign(e.target.value)}
            rows="2"
            className="w-full border border-amber-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Your thoughts on the design..."
          />
        </div>

        {/* Question 2 */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">
            Do you think anything needs to be added or removed here?
          </label>
          <textarea
            value={answerContent}
            onChange={(e) => setAnswerContent(e.target.value)}
            rows="2"
            className="w-full border border-amber-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Is anything missing or confusing?"
          />
        </div>

        {/* Question 3 */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">
            Is the website easy to use and navigate?
          </label>
          <textarea
            value={answerUsability}
            onChange={(e) => setAnswerUsability(e.target.value)}
            rows="2"
            className="w-full border border-amber-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Any suggestions to improve usability?"
          />
        </div>

        {/* Status message */}
        {status && (
          <p className="mb-4 text-sm text-center text-gray-700">
            {status}
          </p>
        )}

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-amber-500 text-white font-semibold shadow-md hover:bg-amber-600 transition"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </section>
  );
}

export default Feedback;

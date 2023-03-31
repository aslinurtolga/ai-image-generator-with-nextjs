"use client";

import fetchSuggestionFromChatGPT from "@/lib/fetchSuggestionFromChatGPT";
import { useState } from "react";
// useSWR hook'u, verilerin önbelleğe alınmasını ve gerektiğinde yenilenmesini sağlar.
import useSWR from "swr";

function PromptInput() {
  const [input, setInput] = useState("");

  const {
    data: suggestion,
    isLoading,
    mutate,
    isValidating,
  } = useSWR("/api/suggestion", fetchSuggestionFromChatGPT, {
    revalidateOnFocus: false,
  });

  return (
    <div className="m-10 ">
      <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a prompt..."
          className="flex-1 p-4 outline-none rounded-md"
        />
        <button
          type="submit"
          className={`p-4 font-bold ${
            input
              ? "bg-green-500 text-white transtion-colors duration-200"
              : "text-gray-300 cursor-not-allowed"
          }`}
          disabled={!input}
        >
          Generate
        </button>
        <button
          type="button"
          className="p-4 bg-green-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Use Suggestion
        </button>
        <button
          type="button"
          className="p-4 bg-white text-green-500 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold "
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
}

export default PromptInput;

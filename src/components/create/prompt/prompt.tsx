"use client";

import { Button } from "@/components/ui/button";
import CreateIcon from "@/assets/icon/create.svg";
import AlertIcon from "@/assets/create/alert.svg";
import QuestionIcon from "@/assets/create/question.svg";
import ButtonHover from "./button-hover";
import { HELP_TEXTS, WARNING_TEXTS } from "@/constants/notices";
import useCreateImage from "@/hooks/create/use-create-image";
import { useState } from "react";

function Prompt({ placeholder }: { placeholder: string }) {
  const [prompt, setPrompt] = useState("");
  const { handleSubmit } = useCreateImage({ prompt });

  return (
    <div className="flex h-full max-h-222 flex-col items-end justify-between gap-2 rounded-22 border bg-white px-20 pb-12 pt-16">
      <textarea
        placeholder={placeholder}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="h-full w-full resize-none overflow-hidden overflow-y-auto text-Type-18-medium text-coolGray-600 placeholder:text-coolGray-300 focus:outline-none"
      />
      <div className="flex items-center gap-12">
        <ButtonHover icon={<AlertIcon />} content={WARNING_TEXTS} />
        <ButtonHover icon={<QuestionIcon />} content={HELP_TEXTS} />

        <Button
          onClick={handleSubmit}
          className="flex w-fit gap-13 rounded-24 bg-cBlue-400 px-13 py-12 text-coolGray-50 hover:border-cBlue-600 hover:bg-cBlue-500"
        >
          생성하기
          <CreateIcon />
        </Button>
      </div>
    </div>
  );
}

export default Prompt;

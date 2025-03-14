import { Button } from "@/components/ui/button";
import CreateIcon from "@/assets/icon/create.svg";
import AlertIcon from "@/assets/create/alert.svg";
import QuestionIcon from "@/assets/create/question.svg";
import ButtonHover from "./button-hover";

function Prompt({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex h-full max-h-222 flex-col items-end justify-between gap-2 rounded-22 border bg-white px-20 pb-12 pt-21">
      <textarea
        placeholder={placeholder}
        className="h-full w-full resize-none overflow-hidden overflow-y-auto text-Type-18-medium placeholder:text-coolGray-600 focus:outline-none"
      />
      <div className="flex items-center gap-12">
        <ButtonHover
          icon={<AlertIcon />}
          content="문구 예시 문구 예시 문구 예시 문구 예시 문구 예시 문구 예시 문구 예시 문구 예시"
        />
        <ButtonHover icon={<QuestionIcon />} content="문구 예시2" />

        <Button className="flex w-fit gap-13 rounded-24 bg-cBlue-400 px-13 py-12 text-coolGray-50">
          생성하기
          <CreateIcon />
        </Button>
      </div>
    </div>
  );
}

export default Prompt;

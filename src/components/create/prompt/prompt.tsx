import { Button } from "@/components/ui/button";
import CreateIcon from "@/assets/icon/create.svg";
import AlertIcon from "@/assets/create/alert.svg";
import QuestionIcon from "@/assets/create/question.svg";
import { HELP_TEXTS, WARNING_TEXTS } from "@/constants/notices";
import ToolTip from "./tool-tip";
import LoginChecker from "@/components/common/auth/LoginChecker";

interface Props {
  prompt: string;
  setPrompt: (prompt: string) => void;
  placeholder: string;
  onClick: () => void;
  isLoading: boolean;
}

function Prompt({ prompt, setPrompt, placeholder, onClick, isLoading }: Props) {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-end justify-between gap-2 rounded-22 border bg-white px-20 pb-12 pt-16">
      <textarea
        placeholder={placeholder}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={isLoading}
        className="h-full w-full resize-none overflow-hidden overflow-y-auto text-Type-16-medium text-coolGray-600 placeholder:text-coolGray-300 focus:outline-none disabled:cursor-not-allowed disabled:bg-white"
      />
      <div className="flex items-center gap-12">
        <ToolTip icon={<AlertIcon />} content={WARNING_TEXTS} />
        <ToolTip icon={<QuestionIcon />} content={HELP_TEXTS} />
        <LoginChecker>
          <Button
            onClick={onClick}
            disabled={!prompt || isLoading}
            className="flex w-fit gap-13 rounded-24 bg-cBlue-400 px-13 py-12 text-coolGray-50 hover:border-cBlue-600 hover:bg-cBlue-500"
          >
            생성하기
            <CreateIcon />
          </Button>
        </LoginChecker>
      </div>
    </div>
  );
}

export default Prompt;

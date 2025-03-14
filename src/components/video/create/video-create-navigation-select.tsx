import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CREATE_VIDEO_SELECT_MENU } from "@/constants/select-menu";
import cn from "@/utils/cn";
import VideoCreateNavigationSelectItem from "./video-create-navigation-select-item";

function VideoCreateNavigationSelect({
  selectedValue,
  setSelectedValue,
}: {
  selectedValue: keyof typeof CREATE_VIDEO_SELECT_MENU;
  setSelectedValue: (value: keyof typeof CREATE_VIDEO_SELECT_MENU) => void;
}) {
  return (
    <Select
      value={selectedValue}
      onValueChange={(value) =>
        setSelectedValue(value as keyof typeof CREATE_VIDEO_SELECT_MENU)
      }
    >
      <SelectTrigger
        className={cn(
          "h-38 rounded-20 border border-coolGray-100 bg-coolGray-100 p-12",
          "data-[state=open]:border-coolGray-400 data-[state=open]:shadow-custom",
        )}
      >
        <SelectValue>
          <VideoCreateNavigationSelectItem
            content={CREATE_VIDEO_SELECT_MENU[selectedValue].content}
            describe={CREATE_VIDEO_SELECT_MENU[selectedValue].describe}
            className="w-200 overflow-hidden text-ellipsis whitespace-nowrap"
          />
        </SelectValue>
      </SelectTrigger>

      <SelectContent className="mt-9 w-254 rounded-20 border-coolGray-400 bg-white p-4">
        <SelectGroup>
          {Object.entries(CREATE_VIDEO_SELECT_MENU).map(([key, menu]) => (
            <SelectItem
              key={key}
              value={key}
              className={cn(
                "h-fit w-246 rounded-20 border-none p-8",
                selectedValue === key
                  ? "bg-coolGray-200"
                  : "hover:bg-coolGray-50",
              )}
            >
              <VideoCreateNavigationSelectItem
                content={menu.content}
                describe={menu.describe}
              />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default VideoCreateNavigationSelect;

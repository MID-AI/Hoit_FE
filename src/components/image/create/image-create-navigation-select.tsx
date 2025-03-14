import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import cn from "@/utils/cn";
import { CREATE_IMAGE_SELECT_MENU } from "@/constants/select-menu";
import ImageCreateNavigationSelectItem from "./image-create-navigation-select-item";

function ImageCreateNavigationSelect({
  selectedValue,
  setSelectedValue,
}: {
  selectedValue: keyof typeof CREATE_IMAGE_SELECT_MENU;
  setSelectedValue: (value: keyof typeof CREATE_IMAGE_SELECT_MENU) => void;
}) {
  return (
    <Select
      value={selectedValue}
      onValueChange={(value) =>
        setSelectedValue(value as keyof typeof CREATE_IMAGE_SELECT_MENU)
      }
    >
      <SelectTrigger
        className={cn(
          "h-38 rounded-20 border border-coolGray-100 bg-coolGray-100 p-12",
          "data-[state=open]:border-coolGray-400 data-[state=open]:shadow-custom",
        )}
      >
        <SelectValue>
          <ImageCreateNavigationSelectItem
            content={CREATE_IMAGE_SELECT_MENU[selectedValue].content}
            width={CREATE_IMAGE_SELECT_MENU[selectedValue].width}
          />
        </SelectValue>
      </SelectTrigger>

      <SelectContent className="mt-9 w-254 rounded-20 border-coolGray-400 bg-white p-4">
        <SelectGroup>
          {Object.entries(CREATE_IMAGE_SELECT_MENU).map(([key, menu]) => (
            <SelectItem
              key={key}
              value={key}
              className={cn(
                "h-30 w-246 rounded-20 border-none p-8",
                selectedValue === key
                  ? "bg-coolGray-200"
                  : "hover:bg-coolGray-50",
              )}
            >
              <ImageCreateNavigationSelectItem
                content={menu.content}
                width={menu.width}
              />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default ImageCreateNavigationSelect;

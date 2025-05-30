import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import cn from "@/utils/cn";
import {
  type AspectRatio,
  CREATE_IMAGE_SELECT_MENU,
} from "@/constants/select-menu";
import ImageCreateNavigationSelectItem from "./ImageCreateNavigationSelectItem";

function ImageCreateNavigationSelect({
  selectedValue,
  setSelectedValue,
  disabled,
}: {
  selectedValue: AspectRatio;
  setSelectedValue: (value: AspectRatio) => void;
  disabled: boolean;
}) {
  return (
    <Select
      disabled={disabled}
      value={selectedValue}
      onValueChange={(value) => setSelectedValue(value as AspectRatio)}
    >
      <SelectTrigger
        className={cn(
          "h-38 rounded-20 border border-coolGray-200 bg-coolGray-100 p-12",
          "data-[state=open]:border-coolGray-400 data-[state=open]:shadow-custom",
        )}
      >
        <SelectValue>
          <ImageCreateNavigationSelectItem
            content={selectedValue}
            width={CREATE_IMAGE_SELECT_MENU[selectedValue].width}
          />
        </SelectValue>
      </SelectTrigger>

      <SelectContent className="mt-10 rounded-20 border-coolGray-400 bg-white">
        <SelectGroup>
          {Object.entries(CREATE_IMAGE_SELECT_MENU).map(([key, menu]) => (
            <SelectItem
              key={key}
              value={key}
              className={cn(
                "h-30 rounded-20 p-8",
                selectedValue === key
                  ? "bg-coolGray-200"
                  : "hover:bg-coolGray-50",
              )}
            >
              <ImageCreateNavigationSelectItem
                content={key}
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

"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NavigationSelectItem from "./navigation-select-item";
import cn from "@/utils/cn";

export const selectMenu = {
  "1": { content: "1:1", width: "w-14" },
  "2": { content: "3:4", width: "w-15" },
  "3": { content: "16:9", width: "w-19" },
} as const;

function NavigationSelect({
  selectedValue,
  setSelectedValue,
}: {
  selectedValue: keyof typeof selectMenu;
  setSelectedValue: (value: keyof typeof selectMenu) => void;
}) {
  return (
    <Select
      value={selectedValue}
      onValueChange={(value) =>
        setSelectedValue(value as keyof typeof selectMenu)
      }
    >
      <SelectTrigger
        className={cn(
          "h-38 rounded-20 border border-coolGray-100 bg-coolGray-100 p-12",
          "data-[state=open]:border-coolGray-400 data-[state=open]:shadow-custom",
        )}
      >
        <SelectValue>
          <NavigationSelectItem
            content={selectMenu[selectedValue].content}
            width={selectMenu[selectedValue].width}
          />
        </SelectValue>
      </SelectTrigger>

      <SelectContent className="mt-9 w-254 rounded-20 border-coolGray-400 bg-white p-4">
        <SelectGroup>
          {Object.entries(selectMenu).map(([key, menu]) => (
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
              <NavigationSelectItem content={menu.content} width={menu.width} />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default NavigationSelect;

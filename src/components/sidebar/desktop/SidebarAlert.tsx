"use client";

import BellIcon from "@/assets/icon/bell.svg";
import NotificationContent from "@/components/notification/NotificationContent";
import { Popover, PopoverTrigger } from "@/components/ui/popover";

import { useState } from "react";

function SidebarAlert() {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <Popover onOpenChange={setPopoverOpen} open={popoverOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="box-border flex h-48 w-48 items-center justify-center gap-8 rounded-76 p-12 text-coolGray-500 lg:w-full lg:justify-start lg:px-8"
        >
          <span className="shrink-0">
            <BellIcon className="h-24 w-24" />
          </span>
          <span className="hidden shrink-0 text-Type-16-medium lg:flex">
            알림
          </span>
        </button>
      </PopoverTrigger>
      <NotificationContent setPopoverOpen={setPopoverOpen} />
    </Popover>
  );
}

export default SidebarAlert;

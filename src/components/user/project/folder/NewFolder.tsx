"use client";

import AddFolderIcon from "@/assets/my/add_folder.svg";
import DashedIcon from "@/assets/my/rectangle_dashed.svg";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import NewFolderModal from "./NewFolderModal";
import { useState } from "react";

function NewFolder() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative flex h-286 w-full max-w-415 cursor-pointer flex-col items-center justify-center gap-21 rounded-22">
          <DashedIcon className="absolute inset-0 -z-10 flex w-full items-center justify-center" />
          <AddFolderIcon />
          <span className="text-Type-16-medium">새로운 폴더 만들기</span>
        </div>
      </DialogTrigger>
      {isOpen && <NewFolderModal />}
    </Dialog>
  );
}

export default NewFolder;

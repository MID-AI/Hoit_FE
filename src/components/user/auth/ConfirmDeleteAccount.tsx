import { WITHDRAWAL_MASSAGE } from "@/constants/withdrawal-messages";
import useDeleteAccount from "@/hooks/user/auth/useDeleteAccount";
import React from "react";

function ConfirmDeleteAccount({
  setCommentOpen,
}: {
  setCommentOpen: (open: boolean) => void;
}) {
  const { mutate: deleteAccount } = useDeleteAccount();

  return (
    <div>
      <ul className="my-12 flex flex-col gap-4">
        {WITHDRAWAL_MASSAGE.map((comment, idx) => (
          <li
            key={idx}
            className="relative pl-16 before:absolute before:left-0 before:top-0 before:content-['•']"
          >
            {comment}
          </li>
        ))}
      </ul>
      <div className="flex w-full justify-end gap-12">
        <button
          onClick={() => setCommentOpen(false)}
          className="rounded-18 border border-coolGray-500 px-16 py-4 text-coolGray-500 hover:bg-coolGray-100"
        >
          취소
        </button>
        <button
          onClick={() => deleteAccount()}
          className="rounded-18 border border-red-600 px-16 py-4 text-red-600 hover:bg-red-100"
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}

export default ConfirmDeleteAccount;

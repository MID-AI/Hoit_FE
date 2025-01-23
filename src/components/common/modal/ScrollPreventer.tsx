import { useEffect } from "react";
import type { PropsWithChildren } from "react";

interface PreventScrollObserverProps extends PropsWithChildren {
  isOpen?: boolean;
}

export default function ScrollPreventer({
  isOpen = true,
  children,
}: PreventScrollObserverProps) {
  useEffect(() => {
    const preventTouchMove = (event: TouchEvent) => event.preventDefault();

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("touchmove", preventTouchMove, {
        passive: false,
      });
    } else {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("touchmove", preventTouchMove);
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("touchmove", preventTouchMove);
    };
  }, [isOpen]);

  return <>{children}</>;
}

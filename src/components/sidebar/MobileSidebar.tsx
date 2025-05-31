// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import PAGE_ROUTES from "@/constants/page-routes";
// import BellIcon from "@/assets/icon/bell.svg";
// import CreditIcon from "@/assets/icon/credit.svg";
// import MenuIcon from "@/assets/icon/hamburger.svg";
// import Logo from "@/assets/logo/mobile_logo.svg";

// const menuItems = [
//   { label: "홈", href: PAGE_ROUTES.HOME },
//   { label: "이미지 생성", href: PAGE_ROUTES.IMAGE_CREATE },
//   { label: "영상 생성", href: PAGE_ROUTES.VIDEO_CREATE },
//   { label: "내 활동", href: PAGE_ROUTES.MY_ACTIVITY_POST },
//   { label: "내 프로젝트", href: PAGE_ROUTES.MY_PROJECT_ALL },
// ];

// export default function MobileSidebar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* 상단 헤더 */}
//       <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:hidden bg-[#F8F8F8]">
//         <div className="flex items-center ml-[16px] mt-[15px]">
//           <Link href="/">
//             <Logo width={68} height={35} />
//           </Link>
//         </div>
//         <div className="flex items-center space-x-[12px] pr-1">
//           <div className="w-26 h-24 flex items-center justify-center p-1">
//             <BellIcon className="w-24 h-24 text-gray-600" />
//           </div>
//           <div className="w-26 h-24 flex items-center justify-center p-1">
//             <CreditIcon className="w-24 h-24 text-gray-600" />
//           </div>
//           <button onClick={() => setOpen(!open)} className="w-24 h-24 flex items-center justify-center p-1">
//             <MenuIcon className="w-24 h-24 text-gray-800 translate-y-[2px]" />
//           </button>
//         </div>
//       </header>

//       {/* 햄버거 메뉴 열렸을 때 */}
//       {open && (
//         <nav className="fixed top-[64px] left-0 right-0 z-40 bg-white shadow-md md:hidden">
//           <ul className="flex flex-col divide-y">
//             {menuItems.map((item) => (
//               <li key={item.label}>
//                 <Link
//                   href={item.href}
//                   className="flex items-center px-4 py-3 hover:bg-gray-100"
//                   onClick={() => setOpen(false)}
//                 >
//                   <span className="text-sm text-gray-800">{item.label}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import PAGE_ROUTES from "@/constants/page-routes";
import BellIcon from "@/assets/icon/bell.svg";
import CreditIcon from "@/assets/icon/credit.svg";
import MenuIcon from "@/assets/icon/hamburger.svg";
import Logo from "@/assets/logo/mobile_logo.svg";

const menuItems = [
  { label: "홈", href: PAGE_ROUTES.HOME },
  { label: "이미지 생성", href: PAGE_ROUTES.IMAGE_CREATE },
  { label: "영상 생성", href: PAGE_ROUTES.VIDEO_CREATE },
  { label: "내 활동", href: PAGE_ROUTES.MY_ACTIVITY_POST },
  { label: "내 프로젝트", href: PAGE_ROUTES.MY_PROJECT_ALL },
];

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 상단 헤더 */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-[#F8F8F8] px-4 py-3 md:hidden">
        <div className="ml-[16px] mt-[15px] flex items-center">
          <Link href="/">
            <Logo width={68} height={35} />
          </Link>
        </div>
        <div className="flex items-center space-x-[12px] pr-1">
          <div className="flex h-24 w-26 items-center justify-center p-1">
            <BellIcon className="h-24 w-24 text-gray-600" />
          </div>
          <div className="flex h-24 w-26 items-center justify-center p-1">
            <CreditIcon className="h-24 w-24 text-gray-600" />
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-24 w-24 items-center justify-center p-1"
          >
            <MenuIcon className="h-24 w-24 translate-y-[2px] text-gray-800" />
          </button>
        </div>
      </header>
      {/* 햄버거 메뉴 열렸을 때 */}
      {open && (
        <nav className="fixed left-0 right-0 top-[64px] z-40 bg-white shadow-md md:hidden">
          <ul className="flex flex-col divide-y">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-3 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-sm text-gray-800">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

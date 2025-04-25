"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import PAGE_ROUTES from "@/constants/page-routes";

function TabWrapper({
  activeTab,
  children,
}: {
  activeTab?: string;
  children: React.ReactNode;
}) {
  return (
    <Tabs value={activeTab} className="w-full">
      <TabsList className="h-44">
        <Link href={`${PAGE_ROUTES.MY_PROJECT_ALL}`}>
          <TabsTrigger value="all">전체</TabsTrigger>
        </Link>
        <Link href={`${PAGE_ROUTES.MY_PROJECT_FOLDER}`}>
          <TabsTrigger value="folder">폴더</TabsTrigger>
        </Link>
      </TabsList>
      {children}
    </Tabs>
  );
}

export default TabWrapper;

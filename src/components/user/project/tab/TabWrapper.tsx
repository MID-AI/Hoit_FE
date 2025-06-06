"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import PAGE_ROUTES from "@/constants/page-routes";
import TabAllToolbar from "../all/toolbar/TabAllToolbar";

function TabWrapper({
  activeTab,
  children,
}: {
  activeTab?: string;
  children: React.ReactNode;
}) {
  return (
    <Tabs value={activeTab} className="w-full">
      <div className="mb-29 flex w-full justify-between">
        <TabsList className="h-44">
          <Link href={`${PAGE_ROUTES.MY_PROJECT_ALL}`}>
            <TabsTrigger value="all">전체</TabsTrigger>
          </Link>
          <Link href={`${PAGE_ROUTES.MY_PROJECT_FOLDER}`}>
            <TabsTrigger value="folder">폴더</TabsTrigger>
          </Link>
        </TabsList>
        <TabAllToolbar />
      </div>
      {children}
    </Tabs>
  );
}

export default TabWrapper;

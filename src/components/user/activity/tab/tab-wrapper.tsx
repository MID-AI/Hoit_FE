"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import PAGE_ROUTES from "@/constants/page-routes";

function TabWrapper({
  activeTab,
  children,
}: {
  activeTab: string;
  children: React.ReactNode;
}) {
  return (
    <Tabs value={activeTab} className="w-full">
      <TabsList className="h-44">
        <Link href={`${PAGE_ROUTES.MY_ACTIVITY_POST}`}>
          <TabsTrigger value="post">포스트</TabsTrigger>
        </Link>
        <Link href={`${PAGE_ROUTES.MY_ACTIVITY_LIKE}`}>
          <TabsTrigger value="like">좋아요</TabsTrigger>
        </Link>
      </TabsList>
      <TabsContent value={activeTab}>{children}</TabsContent>
    </Tabs>
  );
}

export default TabWrapper;

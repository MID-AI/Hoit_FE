"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabFolder from "../folder/tab-folder";
import { useRouter, useSearchParams } from "next/navigation";

function TabWrapper({
  tabAll,
  editToolbar,
}: {
  tabAll: React.ReactNode;
  editToolbar: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get("tab") ?? "all";

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", value);
    router.replace(`?${params.toString()}`);
  };

  return (
    <Tabs value={tab} onValueChange={handleTabChange} className="w-full">
      <span className="flex items-start justify-between">
        <TabsList className="h-44">
          <TabsTrigger value="all">전체</TabsTrigger>
          <TabsTrigger value="folder">폴더</TabsTrigger>
        </TabsList>
        {tab === "all" && editToolbar}
      </span>

      <TabsContent value="all">{tabAll}</TabsContent>
      <TabsContent value="folder">
        <TabFolder />
      </TabsContent>
    </Tabs>
  );
}

export default TabWrapper;

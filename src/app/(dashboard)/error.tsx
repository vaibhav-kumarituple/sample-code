"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { Bug } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const router = useRouter();

  return (
    <div className="flex ">
      <div className="flex flex-col gap-4 w-2/3 h-2/3 border shadow-md scroll-auto m-4 ">
        <div className=" flex gap-4  items-center mx-auto mt-4 text-red-500">
          <Bug className="w-16 h-16" />
          <p className="text-2xl font-bold">ERROR</p>
        </div>
        <p className="text-lg font-bold inline">Unhandled Runtime Error</p>

        <pre>
          <p className="">{error.stack}</p>
        </pre>
        <div className="flex justify-center m-4 break-words">
          <Button className="w-48" size={"lg"} onClick={() => router.back()}>
            Click to go Back
          </Button>
        </div>
      </div>
    </div>
  );
}

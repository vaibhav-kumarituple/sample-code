"use client";
import React from "react";
import { DateRange } from "react-day-picker";
import { useRouter } from "next/navigation";
import { useURLParams, useGetSearchParamValue } from "@/components/hooks/request";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useEffect } from "react";
import Icons from "@/components/common/Icons";
import { formatDate, dateToGMT } from "@/lib/common/dateutils";

export function DatePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const router = useRouter();
  const { addMultpleSearchParams } = useURLParams();

  function handleDateChange(date: any) {
    console.log("date1", date);

    if (!date.to) {
      date.to = date.from
    }
    const startDate = formatDate(date.from, "YYYY-MM-DD")
    const endDate = formatDate(date.to, "YYYY-MM-DD")

    const param1 = { name: "startDate", value: startDate };
    const param2 = { name: "endDate", value: endDate };
    router.push(addMultpleSearchParams([param1, param2]));
    console.log("date2", date);
  }

  let paramStartDate = useGetSearchParamValue("startDate", "");
  let paramEndDate = useGetSearchParamValue("endDate", "");
  useEffect(() => {
    const dateFrom = paramStartDate ? dateToGMT(paramStartDate, "YYYY-MM-DD") : undefined;
    const dateTo = paramEndDate ? dateToGMT(paramEndDate, "YYYY-MM-DD") : undefined;
    setDate({ from: dateFrom, to: dateTo });

  }, [paramStartDate, paramEndDate]);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "justify-center text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <Icons iconName="calender" className="m-1" />
            {date?.from ? (
              date.to ? (
                <>
                  {formatDate(date.from, "MMM DD YYYY")} - {formatDate(date.to, "MMM DD YYYY")}
                </>
              ) : (
                formatDate(date.from, "MMM DD YYYY")
              )
            ) : (
              ""
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={1}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

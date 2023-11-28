"use client";
import { TableHead } from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { useURLParams, useGetSearchParamValue } from "@/components/hooks/request";
import { cn } from "@/lib/utils";
import { Label } from "@/components/common/Label";

const _paramKeys = {
  sortColumn: "sortColumn",
  sortOrder: "sortOrder",
};

const _sortOrder = { asc: "asc", desc: "desc" };
interface ISortableHeaderProps {
  columnName: string;
  label: string;
  defaultSortColumn?: boolean;
  defaultSortOrder?: string;
  className?: string;
}

export default function SortableHeaderCell({
  columnName,
  label,
  defaultSortColumn,
  defaultSortOrder,
  className,
}: ISortableHeaderProps) {
  const router = useRouter();
  const { appendSearchParams } = useURLParams();
  let _defaultSortColumn = defaultSortColumn ? columnName : "";
  let sortOrder = useGetSearchParamValue(_paramKeys.sortOrder, defaultSortOrder);
  let sortColumn = useGetSearchParamValue(_paramKeys.sortColumn, _defaultSortColumn);

  const handleSort = (column: string) => {
    console.log("column sort order", column, sortOrder);
    if (column === sortColumn) {
      const order = sortOrder === _sortOrder.asc ? _sortOrder.desc : _sortOrder.asc;

      router.push(appendSearchParams(_paramKeys.sortOrder, order));
    } else {
      router.push(appendSearchParams(_paramKeys.sortColumn, column));
    }
  };

  return (
    // <TableHead className={cn("text-center cursor-pointer", className)} onClick={() => handleSort(columnName)}>
    <div className={cn("text-center cursor-pointer", className)} onClick={() => handleSort(columnName)}>
      <Label variant={"semibold"} className={cn("cursor-pointer inline")}>
        {label}
      </Label>

      {sortColumn === columnName && <SortArrow direction={sortOrder} />}
    </div>
    // </TableHead>
  );
}

export function SortArrow({ direction: direction }: { direction: string }) {
  return <span className="text-violet-600 px-0.5 h-2 w-2">{direction === "asc" ? " ▲" : " ▼"}</span>;
}

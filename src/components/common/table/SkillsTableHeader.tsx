import { TableHeader, TableHead, TableRow } from "@/components/ui/table";
import SortableHeaderCell from "@/components/common/table/SortableHeaderCell";
import { ITableMetadata } from "@/components/common/table/SkillsTable";
import { cn } from "@/lib/utils";
import { Label } from "@/components/common/Label";

export default function SkillsTableHeader({ metadata, className }: { metadata: ITableMetadata[]; className?: string }) {
  return (
    // <TableHeader className={cn("bg-violet-100", props.className)}>
    <div className={cn("bg-violet-100 lg:flex lg:justify-around py-3 hidden ", className)}>
      {/* <TableRow> */}

      {metadata.map((meta, index) =>
        meta.sortable ? (
          <SortableHeaderCell
            key={index}
            columnName={meta.columnName}
            label={meta.headerLabel || ""}
            defaultSortColumn={meta.defaultSortColumn}
            defaultSortOrder={meta.defaultSortOrder}
            className={cn("hidden lg:table-cell", meta.columnClass)}
          />
        ) : (
          // <TableHead key={index} className={"hidden md:table-cell " + meta.columnClass}>
          <div key={index} className={"hidden lg:table-cell " + meta.columnClass}>
            <Label variant={"semibold"}>{meta.headerLabel}</Label>
          </div>

          // </TableHead>
        )
      )}

      {/* </TableRow> */}
    </div>

    // </TableHeader>
  );
}

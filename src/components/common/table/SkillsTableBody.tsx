import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ITableMetadata } from "./SkillsTable";
import moment from "moment";
import { cn } from "@/lib/utils";
import { Label } from "@/components/common/Label";
import { EyeIcon, PencilIcon, PlusCircle, Trash2 } from "lucide-react";

export interface ITableBodyProps {
  metadata: ITableMetadata[];
  data?: any;
}

export default function SkillsTableBody(props: ITableBodyProps) {
  return (
    // <TableBody>
    //   {props.data?.map((row: any, index: number) => (
    //     <TableRow key={index}>
    //       {/* <Dialog>
    //         <DialogTrigger key={index}> */}
    //       {props.metadata.map((meta) => (
    //         <TableCell key={meta.columnName} className={cn("py-3.5", meta.className)}>
    //           <Label size={"sm"} className={meta.className}>
    //             {getCellValue(meta, row)}
    //           </Label>
    //         </TableCell>
    //       ))}
    //       {/* </DialogTrigger>
    //         {/* <NotificationDetail notification={row} />
    //       </Dialog> */}
    //     </TableRow>
    //   ))}
    // </TableBody>
    <div>Nothing here. Outdated</div>
  );
}

function getCellValue(meta: ITableMetadata, row: any) {
  switch (meta.type) {
    case "datetime":
      return dateTimeCell(row[meta.columnName]);
    case "icon":
      return getIcon(meta?.icon?.name || "");
    default:
      return row[meta.columnName] || "-";
  }
}

function getIcon(icon: string) {
  switch (icon) {
    case "eye":
      return <EyeIcon className="w-6 h-6 text-gray-500 hidden md:block" />;
    case "edit":
      return <PencilIcon className="w-6 h-6 text-blue-500 hidden md:block" />;
    case "add":
      return <PlusCircle className="w-6 h-6 text-blue-500 hidden md:block" />;
    case "delete":
      return <Trash2 className="w-6 h-6 text-red-500 hidden md:block" />;
    default:
      return icon;
  }
}

const dateTimeCell = (value: string) => {
  return value ? moment(value).fromNow() : "";
};

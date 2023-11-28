import moment from "moment";
import { Label } from "@/components/common/Label";
import { cn } from "@/lib/utils";
import { ITableMetadata } from "./SkillsTable";
import Icons from "@/components/common/Icons";
import WidgetLibrary from "@/components/common/WidgetLibrary";

interface ITableCellProps {
  value: any;

  meta: ITableMetadata;
  rowdata?: any;
}

export default function SkillsTableCell({ value, meta, rowdata }: ITableCellProps) {
  return (
    <div className={cn("lg:px-1 lg:py-1.5 p-0 bg-transparent", meta.cellClass)}>
      {(() => {
        if (meta.type === "widget") {
          return <CellWidget value={value} meta={meta} rowData={rowdata} />;
        } else if (meta.type === "icon" || meta.type === "stringWithIcon") {
          return <CellIcon value={value} meta={meta} />;
        } else {
          return <CellLabel value={value} meta={meta} />;
        }
      })()}
    </div>
  );
}

// function CellWidget({ value, meta }: { value: string; meta: ITableMetadata }) {{
//   return (<div>Widget</div>)
// }

function CellLabel({ value, meta }: { value: any; meta: ITableMetadata }) {
  return (
    <Label size={"sm"} className={cn("", "")}>
      <span className="lg:hidden font-semibold">{`${meta.headerLabel} : `}</span>
      {getCellValue(value, meta.type, meta?.icon?.name)}
    </Label>
  );
}

function CellIcon({ meta, value }: { meta: ITableMetadata; value?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-2 ", meta.cellClass)}>
      {value && <CellLabel value={value} meta={meta} />}
      <Icons iconName={meta?.icon?.name!} className={meta.icon?.className || ""} />
    </div>
  );
}

function CellWidget({ value, meta, rowData }: { value: string; meta: ITableMetadata; rowData?: any }) {
  return (
    <>
      <Label size={"sm"} className={cn("", "")}>
        <span className="lg:hidden font-semibold">{`${meta.headerLabel} : `}</span>

        <WidgetLibrary widgetName={meta.widgetName!} value={value} rowData={rowData} />
      </Label>
    </>
  );
}

function getCellValue(value: any, type?: string, icon?: string) {
  if (!value) return "-";
  switch (type) {
    case "datetime":
      return dateTimeCell(value);
    default:
      return typeof value === "object" ? JSON.stringify(value) : value;
  }
}

const dateTimeCell = (value: string) => {
  return value ? moment(value).fromNow() : "";
};

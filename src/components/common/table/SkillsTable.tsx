import { Table } from "@/components/ui/table";
import SkillsTableHeader from "@/components/common/table/SkillsTableHeader";
import SkillsTableBody from "@/components/common/table/SkillsTableBody";

export interface ITableMetadata {
  columnName: string;
  headerLabel?: string;
  sortable?: boolean;
  defaultSortColumn?: boolean;
  columnClass?: string;
  cellClass?: string;
  defaultSortOrder?: "asc" | "desc";
  type?: "date" | "datetime" | "time" | "currency" | "number" | "string" | "icon" | "stringWithIcon" | "widget";
  icon?: IIcon;
  widgetName?: string;
}

export interface IIcon {
  name: string;
  className?: string;
  onClick?: () => void;
}

export default function SkillsTable({ data, metadata }: { data: any; metadata: ITableMetadata[] }) {
  return (
    <div>
      {data?.length > 0 && (
        <Table className="rounded-lg w-full ">
          <SkillsTableHeader metadata={metadata} />
          <SkillsTableBody data={data} metadata={metadata} />
        </Table>
      )}
    </div>
  );
}

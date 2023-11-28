import SkillsTableCell from "@/components/common/table/SkillsTableCell";
import { ITableMetadata } from "@/components/common/table/SkillsTable";

interface ITableRowProps {
  metadata: ITableMetadata[];
  data: any;
}

export default function SkillsTableRow(props: ITableRowProps) {
  return (
    <div className="flex w-[90%] mx-auto  flex-wrap lg:flex-nowrap bg-white gap-4  lg:w-full lg:justify-around  shadow-lg lg:shadow-none p-2 lg:p-1 hover:bg-gray-100 transition-all duration-200 ">
      {props.metadata.map((meta) => (
        <SkillsTableCell key={meta.columnName} meta={meta} value={props.data[meta.columnName]} rowdata={props.data} />
      ))}
    </div>
  );
}

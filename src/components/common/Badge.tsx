import { Label } from "@/components/common/Label";
import { cn } from "@/lib/utils";

export default function Badge({ label, className }: { label: string | number | boolean; className?: string }) {
  return (
    <div className={cn("flex text-center bg-purple-100  border border-purple-200 rounded-lg py-0.5 px-1", className)}>
      <Label size={"xs"} className="p-0">
        {label.toString()}
      </Label>
    </div>
  );
}

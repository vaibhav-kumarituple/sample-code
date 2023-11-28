import { Label } from "@/components/common/Label";
import { cn } from "@/lib/utils";

export default function PageHeader({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        " flex justify-center md:block pt-1 md:pb-6 pb-2",
        className
      )}
    >
      <Label
        variant="semibold"
        className={cn("text-xl md:text-2xl ", className)}
      >
        {label}
      </Label>
    </div>
  );
}

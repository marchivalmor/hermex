import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/cn";

export type VehicleSpecsProps = {
  /** Model, e.g. "Hyundai HB20 1.0". */
  name: string;
  /** Body style and transmission, e.g. "Hatch Manual". */
  category: string;
  className?: string;
};

/** Model name over its category line, as shown in the vehicle card. */
export function VehicleSpecs({ name, category, className }: VehicleSpecsProps) {
  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <Text size="lg">{name}</Text>
      <Text size="md">{category}</Text>
    </div>
  );
}

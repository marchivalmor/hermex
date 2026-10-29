import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/cn";

export type PriceTagProps = {
  /** Daily rate in BRL, e.g. `120`. */
  value: number;
  /** Period suffix shown after the amount. */
  period?: string;
  className?: string;
};

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/** Daily rate: bold amount in Exo 2 followed by the period in Inter. */
export function PriceTag({ value, period = "/diária", className }: PriceTagProps) {
  return (
    <p className={cn("flex items-center text-black", className)}>
      <Heading as="span" size="xs">
        {currency.format(value)}
      </Heading>
      <Text as="span" size="lg">
        {period}
      </Text>
    </p>
  );
}

import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<"a"> & {
  size?: "md" | "sm";
  external?: boolean;
};

const sizeClasses = {
  md: "gap-2 rounded-2xl px-6 py-3",
  sm: "gap-1.5 rounded-xl px-4 py-2 text-sm",
};

export default function ButtonLink({
  size = "md",
  external = false,
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center font-semibold neu-raised-sm transition-[box-shadow,color] duration-300 hover:text-accent active:neu-inset-sm ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}

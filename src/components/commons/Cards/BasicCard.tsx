import type { ChildrenProps } from "@/interfaces";

export interface BasicCardProps extends ChildrenProps {
  className?: string;
  as?: "main" | "section" | "div" | "article";
  [key: string]: any;
}

export default function BasicCard({
  children,
  className = "",
  as,
  ...rest
}: BasicCardProps) {
  const classname = `rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md ${className}`;

  switch (as) {
    case "main":
      <main data-testid="card" className={classname} {...rest}>
        {children}
      </main>;
    case "section":
      <section data-testid="card" className={classname} {...rest}>
        {children}
      </section>;
    case "article":
      <article data-testid="card" className={classname} {...rest}>
        {children}
      </article>;
    case "div":
    default:
      return (
        <div data-testid="card" className={classname} {...rest}>
          {children}
        </div>
      );
  }
}

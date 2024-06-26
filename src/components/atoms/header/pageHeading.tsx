export interface PageHeadingProps {
  title: string;
  desc?: string;
}

export default function PageHeading({ title, desc }: PageHeadingProps) {
  return (
    <hgroup>
      <h1 className="font-sora text-2xl font-medium capitalize">{title}</h1>
      <p className="mb-6 border-b border-dashed border-neutral-600 pb-6 pt-2 text-neutral-600 dark:text-neutral-400">
        {desc}
      </p>
    </hgroup>
  );
}

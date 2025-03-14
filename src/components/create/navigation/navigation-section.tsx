import { ReactNode } from "react";

function NavigationSection({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-10 text-Type-16-medium">{title}</h2>
      {content}
    </div>
  );
}

export default NavigationSection;

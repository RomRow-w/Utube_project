import placeholderAlert from "../../utils/placeholderAlert";
import { LucideIcon } from "lucide-react";
import Button from "./Button";

type SidebarItemProps = {
  Icon: LucideIcon;
  title: string;
};

export default function SidebarItem({ Icon, title }: SidebarItemProps) {
  return (
    <Button
      variant="ghost"
      className={"py-4 px-1 flex flex-col items-center rounded-lg gap-1"}
      onClick={() => placeholderAlert()}
    >
      <Icon className="w-6 h-6"></Icon>
      <div className="text-sm">{title}</div>
    </Button>
  );
}

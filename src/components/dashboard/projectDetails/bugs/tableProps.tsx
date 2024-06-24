export function FeatureBadge({ s }: { s: string }) {
  const labels = [
    {
      value: "bug",
      label: "Bug",
      color: "text-red-700",
    },
    {
      value: "feature",
      label: "Feature",
      color: "text-blue-700",
    },
    {
      value: "documentation",
      label: "Documentation",
      color: "text-green-700",
    },
  ];

  const styles =
    "inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium ring-1 ring-inset ring-indigo-700/10";

  const label = labels.find((label) => label.value === s);
  return (
    <>
      {label && (
        <span className={`${styles} ${label.color}`}>{label.label}</span>
      )}
    </>
  );
}

import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export function StatusBadge({ s }: { s: string }) {
  const statuses = [
    {
      value: "backlog",
      label: "Backlog",
      icon: QuestionMarkCircledIcon,
      color: "text-muted-foreground",
    },
    {
      value: "todo",
      label: "Todo",
      icon: CircleIcon,
      color: "text-blue-500",
    },
    {
      value: "in progress",
      label: "In Progress",
      icon: StopwatchIcon,
      color: "text-yellow-500",
    },
    {
      value: "done",
      label: "Done",
      icon: CheckCircledIcon,
      color: "text-green-500",
    },
    {
      value: "canceled",
      label: "Canceled",
      icon: CrossCircledIcon,
      color: "text-red-500",
    },
  ];
  const status = statuses.find((status) => status.value === s);

  if (!status) {
    return null;
  }
  return (
    <>
      <status.icon
        className={`mr-2 h-4 w-4 text-muted-foreground ${status.color}`}
      />
      <span>{status.label}</span>
    </>
  );
}

export function PriorityBadge({ s }: { s: string }) {
  const priorities = [
    {
      label: "Low",
      value: "low",
      icon: ArrowDownIcon,
      color: "text-blue-500",
    },
    {
      label: "Medium",
      value: "medium",
      icon: ArrowRightIcon,
      color: "text-yellow-500",
    },
    {
      label: "High",
      value: "high",
      icon: ArrowUpIcon,
      color: "text-red-500",
    },
  ];

  const priority = priorities.find((priority) => priority.value === s);

  if (!priority) {
    return null;
  }

  return (
    <>
      {priority.icon && (
        <priority.icon
          className={`mr-2 h-4 w-4 text-muted-foreground ${priority.color}`}
        />
      )}
      <span>{priority.label}</span>
    </>
  );
}

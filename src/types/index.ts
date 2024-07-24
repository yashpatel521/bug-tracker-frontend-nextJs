import { Icons } from "@/components/ui/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  access: string[];
}

export interface SidebarProps {
  className?: string;
}

export interface ContentProps {
  title: string;
  svg: string;
  value: number;
  description: string;
}

export interface RepoCardProps {
  content: ContentProps;
}

export interface AvatarListType {
  src?: string;
  alt?: string;
  fallback: string;
}

export interface UserProject {
  id: number;
  user: User;
}

export type TeamMember = {
  id: number;
  name: string;
  src: string;
  role: string;
};

export interface UserPaginateType {
  items: User[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

export type Bug = {
  id: number;
  title: string;
  description: string;
  status: bugStatus;
  priority: bugPriority;
  type: bugType;
  reportedBy: User;
  assignedTo: User[];
  createdAt: string;
  updatedAt: string;
};

export type bugStatus =
  | "backlog"
  | "todo"
  | "inprogress"
  | "complete"
  | "closed"
  | "assigned"
  | "new";

export type bugPriority = "low" | "medium" | "high";

export type bugType = "bug" | "feature" | "enhancement";

export interface BugPaginateType {
  items: Bug[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

export interface Role {
  id: number;
  name: string;
  createdAt: string;
}

export interface SubRole {
  id: number;
  name: string;
  createdAt: string;
}

export interface LoginUser {
  accessToken?: string;
  refreshToken?: string;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
  password: string;
  status: string;
  createdAt: string;
  role: Role;
  subRole: SubRole;
}

export interface ResponseType {
  success: boolean;
  message?: string;
  data: any;
}

export interface ProjectDetails {
  id: number;
  title: string;
  summary: string;
  score: number;
  scoreText: string;
  description: string;
  descriptionHTML: string;
  appId: string;
  appUrl: string;
  appIcon: string;
  developer: string;
  developerId: string;
  developerEmail: string;
  firebaseAccount: string;
  privacyPolicyUrl: string;
  status: "complete" | "inprogress" | "onhold" | "inreview";
  LiveUpdatedAt: string;
  createdAt: string;
  updatedAt: string;
  userProjects?: UserProject[];
  dailyStats?: DailyStats[];
  versions?: Version[];
  maxInstalls: number;
  ratings: number;
  reviews: number;
  isPinned: boolean;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
  password: string;
  status: string;
  createdAt: string;
  role?: Role;
  subRole?: SubRole;
  projectAssigned?: number;
}

export interface DailyStats {
  id: number;
  installCount: string;
  ratingCount: string;
  reviewCount: string;
  date: string;
}

export interface Version {
  id: number;
  versionNumber: string;
  repositoryUrl: string;
  liveUrl: string;
  createdAt: string;
  createdBy: User;
}

export interface PinProject {
  id: number;
  project: ProjectDetails;
}

export interface SearchableDropdownProps {
  onSelect: (value: string) => void;
  placeholder: string;
  name: string;
}

export interface SearchDropdownProps {
  title: string;
  icon: string;
  appId: string;
}

export interface PlayStoreAppDetails {
  title: string;
  summary: string;
  score: number;
  scoreText: string;
  description: string;
  descriptionHTML: string;
  appId: string;
  appUrl: string;
  appIcon: string;
  developer: string;
  developerId: string;
  developerEmail: string;
  firebaseAccount: string;
  privacyPolicyUrl: string;
  status: string;
  LiveUpdatedAt: string;
  maxInstalls: number;
  ratings: number;
  reviews: number;
  createdAt: string;
  updatedAt: string;
}

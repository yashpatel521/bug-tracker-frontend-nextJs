import { Icons } from "@/components/ui/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
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

interface Histogram {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
}

interface Category {
  name: string;
  id: string | null;
}

interface Feature {
  title: string;
  description: string;
}

export interface pinProjectCardType {
  title: string;
  description: string;
  descriptionHTML: string;
  summary: string;
  installs: string;
  minInstalls: number;
  maxInstalls: number;
  score: number;
  scoreText: string;
  ratings: number;
  reviews: number;
  histogram: Histogram;
  price: number;
  free: boolean;
  currency: string;
  priceText: string;
  offersIAP: boolean;
  IAPRange: undefined;
  size: string;
  androidVersion: string;
  androidVersionText: string;
  androidMaxVersion: string;
  developer: string;
  developerId: string;
  developerEmail: string;
  developerWebsite: string;
  developerAddress: string;
  privacyPolicy: string;
  developerInternalID: string;
  genre: string;
  genreId: string;
  categories: Category[];
  icon: string;
  headerImage: string;
  screenshots: string[];
  video: undefined;
  videoImage: undefined;
  previewVideo: undefined;
  contentRating: string;
  contentRatingDescription: undefined;
  adSupported: boolean;
  released: undefined;
  updated: number;
  version: string;
  recentChanges: string;
  comments: string[];
  preregister: boolean;
  earlyAccessEnabled: boolean;
  isAvailableInPlayPass: boolean;
  editorsChoice: boolean;
  features: Feature[];
  appId: string;
  url: string;
}

export interface avatarListType {
  src?: string;
  alt?: string;
  fallback: string;
}

export interface projectCardType {
  id: number;
  title: string;
  description: string;
  descriptionHTML: string;
  summary: string;
  appId: string;
  url: string;
  appIcon: string;
  developer: string;
  developerId: string;
  developerEmail: string;
  privacyPolicy: string;
  score: number;
  scoreText: string;
  updated: number;
  reviews: number;
  ratings: number;
  maxInstalls: number;
  userProjects: userProject[];
}

export interface userProject {
  id: number;
  user: User;
}

export type teamMember = {
  id: number;
  name: string;
  src: string;
  role: string;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
  status: string;
  createdAt: string;
};

export interface userPaginateType {
  items: User[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

export type Bug = {
  id: string;
  title: string;
  status: string;
  label: string;
  priority: string;
};

export interface bugPaginateType {
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
  data: any | never[];
}

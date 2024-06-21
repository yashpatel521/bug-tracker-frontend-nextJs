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
  appId: string | number;
  title: string;
  developer: string;
  src: string;
  teamMembers: avatarListType[];
}

export interface projectCardPanigateType {
  items: projectCardType[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export type User = {
  id: number;
  name: string;
  src: string;
  role: string;
  status: string;
  projectAssigned?: number[] | any[];
};

export interface userPaginateType {
  items: User[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

export type Bug = {
  id: number | string;
  title: string;
  status: string;
  label: string;
  priority: string;
};

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


export interface GridImageTemplate {
  alt_description: string;
  blur_hash: string;
  categories: []
  color: string;
  created_at: string;
  current_user_collections: any;
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: any;
  promoted_at: string;
  sponsorship: any;
  tags: any;
  topic_submissions: any;
  updated_at: string;
  urls: any;
  user: any;
  width: number;
  userName?: string;
  userLocation?: string;
}

export interface serachPayload  {
  query: string
}

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  body?: {
    html: string;
  };
  city?: string;
  restaurants?: {
    alias: string;
    name: string;
    display_phone: string;
    rating: number;
    is_closed: boolean;
    location: {
      city: string;
      address1: string;
    };
    photos: string[];
  }[];
};

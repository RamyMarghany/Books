export type Book = {
  id: id;
  title: string;
  authors: string;
  genres?: string;
  description?: string;
  image_url: string;
  rating: number;
  num_pages?: number;
  onClick?: () => void;
  redirectToBookDetails?: () => void;
};

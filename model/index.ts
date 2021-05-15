export type Review = {
  id: number;
  quote: string;
  author: string;
  stars: number;
  published_at: string;
  created_at: string;
  updated_at: string;
};

export type Service = {
  id: number;
  name: string;
  description: string;
  published_at: string;
  created_at: string;
  updated_at: string;
};

export type HeadlineText = {
  id: number;
  title: string;
  content: string;
  published_at: string;
  created_at: string;
  updated_at: string;
};

export type Profile = {
  about: string;
  name: string;
  photo: {
    url: string;
    width: number;
    height: number;
  };
};

export type Product = {
  id: number;
  titulo: string;
  descricao: string;
  foto: {
    url: string;
    width: number;
    height: number;
  };
};

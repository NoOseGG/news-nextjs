export interface IResponseArticles {
  status: string;
  totalResults: number;
  articles: IArcticle[];
}

export interface IArcticle {
  source: IArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface IArticleSource {
  id: null | number;
  name: string;
}

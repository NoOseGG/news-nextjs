import React from "react";

import styles from "./articlesList.module.css";

import { URLS } from "@/app/constants/constants";
import { IResponseArticles } from "@/interfaces/types";
import { clearTitleArticle, formatDate } from "@/app/utils/utils";

async function getArticles(): Promise<IResponseArticles> {
  const url = `${URLS.BASE_URL}${URLS.TOP_HEADLINE}country=ru&category=business&apiKey=1fb89f5fa9384a55add07e131ca41e3b`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  return res.json();
}

const ArticlesList: React.FC = async () => {
  const arcticles = await getArticles();

  console.log(arcticles);

  return (
    <div className={styles.container}>
      {arcticles.articles.map((arcticle, index) => (
        <div className={styles["article-box"]} key={index}>
          <div className={styles.article__title}>
            {clearTitleArticle(arcticle.title)}
          </div>
          {arcticle.urlToImage && (
            <img className={styles.image} src={arcticle.urlToImage} alt="img" />
          )}
          <div>{formatDate(arcticle.publishedAt)}</div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;

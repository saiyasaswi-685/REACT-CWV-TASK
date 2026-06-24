import { articles } from "../data/articles";
import ArticleCard from "./ArticleCard";

function ArticleGrid() {
  const sortedArticles = [...articles].sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  return (
    <div>
      {sortedArticles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
}

export default ArticleGrid;
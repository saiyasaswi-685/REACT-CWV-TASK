type ArticleProps = {
  article: {
    id: number;
    title: string;
    author: string;
    date: string;
    thumbnail: string;
  };
};

function ArticleCard({ article }: ArticleProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img
        src={article.thumbnail}
        alt={article.title}
      />

      <h3>{article.title}</h3>

      <p>Author: {article.author}</p>

      <p>Date: {article.date}</p>
    </div>
  );
}

export default ArticleCard;
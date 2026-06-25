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
        width={300}
        height={200}
        loading="lazy"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />

      <h3>{article.title}</h3>

      <p>Author: {article.author}</p>

      <p>Date: {article.date}</p>
    </div>
  );
}

export default ArticleCard;
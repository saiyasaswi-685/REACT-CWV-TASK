import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import ArticleGrid from "./components/ArticleGrid";
import Sidebar from "./components/Sidebar";
import Skeleton from "./components/Skeleton";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  const [loading, setLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false);

  // Simulated API loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Show banner after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Deferred analytics (doesn't block initial render)
  useEffect(() => {
    const initAnalytics = () => {
      console.log("Analytics initialized");
    };

    setTimeout(initAnalytics, 0);
  }, []);

  return (
    <div>
      {/* Reserve banner space to prevent CLS */}
      <div style={{ minHeight: "90px" }}>
        {showBanner && (
          <div
            style={{
              height: "90px",
              background: "orange",
              textAlign: "center",
              padding: "20px",
              fontWeight: "bold",
            }}
          >
            🚀 Special Advertisement Banner
          </div>
        )}
      </div>

      <Hero />

      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div style={{ flex: 3 }}>
          {loading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            <ArticleGrid />
          )}
        </div>

        <div style={{ flex: 1 }}>
          <Sidebar />
        </div>
      </div>

      <InfiniteScroll />
    </div>
  );
}

export default App;
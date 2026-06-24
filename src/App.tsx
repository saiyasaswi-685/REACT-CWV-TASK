import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import ArticleGrid from "./components/ArticleGrid";
import Sidebar from "./components/Sidebar";
import Skeleton from "./components/Skeleton";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  const [loading, setLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false);

  // Fake API loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Late loading ad banner (CLS issue)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Heavy blocking task (TBT issue)
  useEffect(() => {
    console.log("Simulating heavy analytics initialization...");

    const start = performance.now();

    while (performance.now() - start < 600) {
      // Block main thread
    }

    console.log("Analytics initialized.");
  }, []);

  return (
    <div>
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
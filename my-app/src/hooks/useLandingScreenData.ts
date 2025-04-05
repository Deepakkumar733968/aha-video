import { useEffect, useState } from "react";
import { fetchCatalogData } from "../services/api";

export const useLandingScreenData = () => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMore = async () => {
    try {
      setLoading(true);
      const result = await fetchCatalogData(page);

      console.log("API Result:", result);

      const allContainers = result?.t?.map((item: any) => item?.c || []).flat();

      if (!allContainers || allContainers.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...allContainers]);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Error fetching:", err);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMore();
  }, []);

  return { data, loading, error, fetchMore, hasMore };
};

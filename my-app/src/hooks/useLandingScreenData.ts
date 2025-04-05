import { useEffect, useRef, useState } from "react";
import { fetchCatalogData } from "../services/api";

export const useLandingScreenData = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const pageRef = useRef(1);
  const isFetchingRef = useRef(false);
  const fetchMore = async () => {
    if (isFetchingRef.current || !hasMore) return;

    isFetchingRef.current = true;
    setLoading(true);

    try {
      const result = await fetchCatalogData(pageRef.current);
      const allContainers = result?.t?.map((item: any) => item?.c || []).flat();

      if (!allContainers || allContainers.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...allContainers]);
        pageRef.current += 1;
      }
    } catch (err) {
      setError("Failed to fetch data");
      setHasMore(false);
    } finally {
      setLoading(false);
      isFetchingRef.current = false;
    }
  };

  useEffect(() => {
    fetchMore();
  }, []);

  return { data, loading, error, fetchMore, hasMore };
};

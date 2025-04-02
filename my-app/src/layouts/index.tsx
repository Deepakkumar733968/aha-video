// //
// const [catalog, setCatalog] = useState<any[]>([]);
// const [loading, setLoading] = useState<boolean>(true);
// const [error, setError] = useState<string | null>(null);

// useEffect(() => {
//   const getData = async () => {
//     try {
//       const data = await fetchCatalogData();
//       console.log("Fetched data:", data);
//       setCatalog(Array.isArray(data) ? data : []);
//     } catch (err) {
//       const errorMessage =
//         err instanceof Error ? err.message : "Something went wrong";
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   getData();
// }, []);

// //

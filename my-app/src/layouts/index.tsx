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

// function App() {
//   return (
//     <main>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<MoviesList data={MOVIES_LIST} />} />
//         <Route path="/movie/:id" element={<MovieDetail />} />
//       </Routes>
//       {/* static card data */}
//       {/* <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} />
//       <MoviesList data={MOVIES_LIST} /> */}
//     </main>
//   );
// }

// export default App;

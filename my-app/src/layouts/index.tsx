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

// old hero harosel:

// import "./style.css";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IHeroCarousel } from "../../utils/HeroCarousel/heroCarousel";
// import { useState, useEffect } from "react";

// export const HeroSlider = ({ data }: { data: any }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   console.log(data, "data");
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex, data.length]);

//   const getVisibleThumbnails = () => {
//     const prevIndex = (currentIndex - 1 + data.length) % data.length;
//     const nextIndex = (currentIndex + 1) % data.length;
//     return [data[prevIndex], data[currentIndex], data[nextIndex]];
//   };

//   return (
//     <div
//       className="hero-main cursor-pointer"
//       style={{
//         backgroundImage: `url(${data[currentIndex]?.heroImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="left-pos-main">
//         <div>
//           <h1 className="pos-hed">{data[currentIndex]?.heading}</h1>
//           <p className="pos-sup-hed">{data[currentIndex]?.subHeading}</p>
//         </div>
//         <p className="pos-des">{data[currentIndex]?.description}</p>
//       </div>
//       <div className="l-a-r-main">
//         <div className="bg-left-div-main"></div>
//         <div className="m-left-main"></div>
//         <div className="m-right-main">
//           {/* <video width="600" controls className="video-main">
//             <source src={data[currentIndex]?.heroVideo} type="video/mp4" />
//           </video> */}
//         </div>
//       </div>
//       <div className="all-btn-img-ali-main">
//         <div className="bg-min-arr-size min-arr-l min-arr-l-bg"></div>
//         <div className="bg-min-arr-size min-arr-r min-arr-r-bg"></div>
//         <MdKeyboardArrowLeft
//           size={26}
//           className="add-arr-hover arrow-left-pos"
//           onClick={prevSlide}
//         />
//         <div className="last-left-carousel-main">
//           {getVisibleThumbnails().map((item) => (
//             <img
//               key={item.id}
//               src={item.smallHeroImage}
//               alt="carousel-thumbnail"
//               className={`left-carousel-img ${
//                 item.id === data[currentIndex].id ? "selected" : ""
//               }`}
//             />
//           ))}
//         </div>
//         <MdKeyboardArrowRight
//           size={26}
//           className="add-arr-hover arrow-right-pos"
//           onClick={nextSlide}
//         />
//       </div>
//     </div>
//   );
// };

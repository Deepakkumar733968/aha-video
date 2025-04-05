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

///

// export const fetchCatalogData = async (): Promise<any> => {
//   const url =
//     "https://catalog-service-cdn.api.aha.firstlight.ai/catalog/storefront/landingscreen?ipr=true&ivg=false&sfInfo=true&itvod=true&acl=ta&reg=in&dt=mobileweb&cPageNumber=1&cPageSize=5";

//   const headers = {
//     "sec-ch-ua-platform": '"Android"',
//     Referer: "https://www.aha.video/",
//     "User-Agent":
//       "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
//     "sec-ch-ua":
//       '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
//     "sec-ch-ua-mobile": "?1",
//   };

//   const response = await fetch(url, {
//     method: "GET",
//     headers: headers,
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return response.json();
// };

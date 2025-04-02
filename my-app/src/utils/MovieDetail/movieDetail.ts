interface IMovieDetail {
  movieListHeader: string;
  seeAll: string;
  image: string;
  value: string;
  Premium: boolean;
}

export const MOVIES_DETAIL_LIST: IMovieDetail[] = new Array(30).fill({
  movieListHeader: "New Releases",
  seeAll: "See all",
  image:
    "https://image-resizer-cloud-api.akamaized.net/image/DF887F04-ED8F-4767-BCA8-10336625AD3D/0-16x9.jpg?width=300&updatedTime=2025-02-03T11:59:45Z&dt=web",
  value: "Mr Housekeeping",
  Premium: true,
});

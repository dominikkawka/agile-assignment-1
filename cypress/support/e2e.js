export const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

export const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

export const getRevenue = (revenue) => {
  let rev = revenue.match(/.{1,3}/g);
  let r = rev.join(",");
  return r
}
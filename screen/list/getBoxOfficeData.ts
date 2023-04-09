export const todayDate = () => {
  const date = new Date();
  const [year, month, day] = date.toLocaleDateString().split(".");
  const MONTH: string = 0 + month.trim();
  const DAY: string = day.trim();

  const currentDate: string = year.concat(MONTH, DAY);

  return currentDate;
};

type GenreProps = {
  genreNm: [{ genreNm: string }];
  peopleNm?: [{ peopleNm: string }];
};

export const getBoxOfficeData = async () => {
  const boxOfficeList = [];
  for (let i = 0; i < 10; i++) {
    let URL = `https://port-0-sixman-movie-r8xoo2mlenkvdnc.sel3.cloudtype.app/${todayDate()}/${i}`;
    try {
      const response = await fetch(URL);
      const Json = await response.json();

      if (Json.actor.length === 0) {
        let directorNm = "Director";
        if (Json.directors.length != 0) {
          directorNm = `감독 : ${Json.directors[0].peopleNm} / 성우`;
        }
        const movieCode = Json.movieCode;
        const titleNm = Json.koTitle;
        const rank = i + 1;
        const poster = Json.posterUrl;
        const overView = Json.tmdbOverview;
        const genre = Json.genreNm;

        let genreName = "";
        genre.forEach((e: GenreProps) => {
          genreName = genreName + e.genreNm + ",";
        });
        genreName = `장르 : ${genreName.slice(0, genreName.length - 1)}`;

        boxOfficeList.push({
          movieCode: movieCode,
          peopleNm: directorNm,
          titleNm: titleNm,
          poster: poster,
          rank: rank,
          overView: overView,
          genreName: genreName,
        });
      } else {
        let directorNm = "Director";
        if (Json.directors.length != 0) {
          directorNm = `감독 : ${Json.directors[0].peopleNm} / 성우`;
        }
        const rank = i + 1;
        const movieCode = Json.movieCode;
        const titleNm = Json.koTitle;
        const poster = Json.posterUrl;
        const overView = Json.tmdbOverview;
        const genre = Json.genreNm;

        let genreName = "";
        genre.forEach((e: GenreProps) => {
          genreName = genreName + e.genreNm + ",";
        });
        genreName = `장르 : ${genreName.slice(0, genreName.length - 1)}`;

        let actorNames = "";
        Json.actor.forEach((e: GenreProps) => {
          actorNames = actorNames + e.peopleNm + ", ";
        });
        actorNames = `${actorNames.slice(0, actorNames.length - 2)}`;

        boxOfficeList.push({
          movieCode: movieCode,
          directorNm: directorNm,
          peopleNm: `감독 : ${directorNm} / 배우 : ${actorNames} `,
          titleNm: titleNm,
          poster: poster,
          rank: rank,
          genreName: genreName,
          overView: overView,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return boxOfficeList;
};

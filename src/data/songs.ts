import { getPublicUrl } from "../util";

export interface ISong {
  song: string;
  image: string;
  songName: string;
  artist: string;
}

export const songs: ISong[] = [
  {
    songName: "This girl",
    artist: "Kungs",
    song: getPublicUrl("/songs/this-girl/this-girl.mp3"),
    image: getPublicUrl("/songs/this-girl/this-girl.jpeg"),
  },
  {
    songName: "Sugar",
    artist: "Robin Schulz",
    song: getPublicUrl("/songs/sugar/sugar.mp3"),
    image: getPublicUrl("/songs/sugar/sugar.webp"),
  },
];

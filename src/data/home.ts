
export const categories = [
  "Все",
  "Домашние Животные",
  "Музыкальные видео",
  "Спортивные автомобили",
  "Прикольные кошечки",
  "Веселые Собачки",
  "Юмористические видео",
]

export interface IvideoItem {
  id: string;
  title: string;
  channel: {
      name: string;
      url: string;
      profileUrl: string;
  };
  tags: string[];
  views: number;
  duration: number;
  whenPosted: Date;
  thumbnailUrl: string;
  videoUrl: string;
}



export const videos = [ 
  {
      id: "1",
      title: "Самые смешные животные/Приколы с котами и собаками",
      channel: {
        name: "Pump Ace",
        url: "https://www.youtube.com/@DaNiece32",
        profileUrl:
          "https://yt3.googleusercontent.com/k4x-pDP_Gsb-00ECcVWyfJDpeCW2HTi4nwd-VuABzIPDc1DB63fytrMKY27pALf6Y_kLs9TG4A=s120-c-k-c0x00ffffff-no-rj",
      },
      tags: ["Все", "Прикольные кошечки", "Веселые Собачки", "Юмористические видео", "Домашние Животные"],
      views: 1207978,
      duration: 3557, 
      whenPosted: new Date('2023-11-29'),
      thumbnailUrl: "https://i3.ytimg.com/vi/xgM4cps5oZ8/maxresdefault.jpg",
      videoUrl:
        "https://www.youtube.com/embed/xgM4cps5oZ8?si=X5VTJidA0LpbqM6g&autoplay=1",
    },
  {
    id: "2",
    title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
    channel: {
      name: "Rick Astley",
      url: "https://www.youtube.com/channel/UCuAXFkgsw1L7xaCfnd5JJOw",
      profileUrl:
        "https://yt3.googleusercontent.com/coJBIm7rugfAkdb9_cw5Lry2NDnfSYDjL5MBu_R2st_YCLsZtDxYu28h2EAJzPfY8qudaF8U=s176-c-k-c0x00ffffff-no-rj",
    },
    tags: ["Все","Музыкальные видео"],
    views: 1524603953,
    duration: 213,
    whenPosted: new Date('2009-10-25'),
    thumbnailUrl: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/dQw4w9WgXcQ?si=RDSCn2t5LayC03if&autoplay=1",
  },
  {
    id: "3",
    title: "Самые смешные животные / Приколы с котами 2023 #2😇",
    channel: {
      name: "CRUELLA SMILE",
      url: "https://www.youtube.com/@Cruella_smile",
      profileUrl:
        "https://yt3.googleusercontent.com/uDN1-X9iyRY2Eu9KJ9cLZ5Npr1ZyY_11lZGPTtLwiUfqSPDNOfl1P_proU1V14mx8UFFjo6gN_M=s176-c-k-c0x00ffffff-no-rj",
    },
    tags: ["Все","Домашние Животные", "Прикольные кошечки","Юмористические видео"],
    views: 2881841,
    duration: 659,
    whenPosted: new Date('2023-09-09'),
    thumbnailUrl: "https://i.ytimg.com/vi/RgGqLNm6O68/mqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/RgGqLNm6O68?si=L0ec6urFroJgclvh&autoplay=1",
  },
  {
    id: "4",
    title: "Scandroid - Scandroid (Full Album)",
    channel: {
      name: "NewRetroWave",
      url: "https://www.youtube.com/@NewRetroWave",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/AIdro_mUNOKQGUK_JbpYN_9cZwpIigj1yyoSl5TQ8PONJ82GB0I=s176-c-k-c0x00ffffff-no-rj",
    },
    tags: ["Все", "Музыкальные видео"],
    views: 3372640,
    duration: 4318,
    whenPosted: new Date('2016-11-21'),
    thumbnailUrl: "https://i.ytimg.com/vi/wfxDIyYU9nM/mqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/wfxDIyYU9nM?si=mF4fjaFvzG9IOm-c&autoplay=1",
  },
  {
    id: "5",
    title: "Приколы с котами и собаками - Смешные животные видео 2022",
    channel: {
      name: "Fun with Animals",
      url: "https://www.youtube.com/@funwithanimls",
      profileUrl:
        "https://yt3.googleusercontent.com/-f6wzMuCrLXGXEvCIvmjp-JhpfGy6g4tY0thsYw58oS3MZw0eOBD2rCm4eZtvXdVIWE7VfyNt8Q=s176-c-k-c0x00ffffff-no-rj",
    },
    tags: ["Все", "Домашние Животные","Прикольные кошечки","Веселые Собачки","Юмористические видео"],
    views: 15135730,
    duration: 3694, 
    whenPosted: new Date('2022-11-30'),
    thumbnailUrl: "https://i.ytimg.com/vi/f9VbU_pCh8w/mqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/f9VbU_pCh8w?si=1033B36SxiYQJao6&autoplay=1",
  },
  {
    id: "6",
    title: "Acid Mammoth - Under Acid Hoof (Full Album 2020)",
    channel: {
      name: "666MrDoom",
      url: "https://www.youtube.com/@666MrDoom",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/AIdro_mmR4f4lEEP5waLHIogjDpYiZFlij3G--toXG7a548Xdw=s176-c-k-c0x00ffffff-no-rj",
    },
    tags: ["Все", "Музыкальные видео"],
    views: 2328168,
    duration: 2119,
    whenPosted: new Date('2020-01-27'),
    thumbnailUrl: "https://i3.ytimg.com/vi/4GwYrQeQpJk/maxresdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/4GwYrQeQpJk?si=_etc3Vd7gNIGtpC-&autoplay=1",
  },
  {
    id: "7",
    title: "Авто приколы дураки и дороги подборка дтп №48",
    channel: {
      name: "ДТП TV. Подборки аварий и ДТП.",
      url: "https://www.youtube.com/@dtptv",
      profileUrl:
        "https://yt3.googleusercontent.com/GK3uNz124n9dO9kjQnxUTU983dxhaQjVBz38U7AtdKSeGGRPZg522e3gEECh82_6xknDPPUliA=s120-c-k-c0x00ffffff-no-rj",
    },
    tags: ["Все", "Спортивные автомобили","Юмористические видео"],
    views: 2417,
    duration: 603,
    whenPosted: new Date('2023-02-15'),
    thumbnailUrl: "https://i3.ytimg.com/vi/3_uQKE_r6IE/maxresdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/3_uQKE_r6IE?si=Mel-7P2M8r8IwOC7&autoplay=1",
  },
  {
    id: "8",
    title: "Спорткары, истребитель, супербайк и болид; кто быстрее?",
    channel: {
      name: "NTDRussian",
      url: "https://www.youtube.com/@NTDRussian",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/AIdro_nF7J3A3Rf7PFsy7nyuEx8fST6yove1YR2XRpFV8Nq61A=s120-c-k-c0x00ffffff-no-rj",
    },
    tags: ["Все", "Спортивные автомобили"],
    views: 722478,
    duration: 87,
    whenPosted: new Date('2018-09-21'),
    thumbnailUrl: "https://i3.ytimg.com/vi/Y-jKJKqwQbg/maxresdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/Y-jKJKqwQbg?si=tLQcj-hH_Jr_tvh9&autoplay=1",
  },
  {
    id: "9",
    title: "Приколы на рыбалке! Нереальная ржака!",
    channel: {
      name: "Приколы на рыбалке",
      url: "https://www.youtube.com/@user-xx6lg7kn2u",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/AIdro_mEMJtsygF5kyhpc1VtHTqyw-cux_DBinfwxzsftthlfQ=s176-c-k-c0x00ffffff-no-rj",
    },
    tags: ["Все", "Юмористические видео"],
    views: 55056,
    duration: 131,
    whenPosted: new Date('2016-07-25'),
    thumbnailUrl: "https://i.ytimg.com/vi/W6INHK9aaoE/mqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/W6INHK9aaoE?si=xMTu1DBzr9_zNcmn&autoplay=1",
  },
  {
    id: "10",
    title: "Смешные собаки 2021 Попробуй не засмейся! Лучшие приколы про собак",
    channel: {
      name: "Синий пес",
      url: "https://www.youtube.com/@user-ey5qp1qj5d",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/AIdro_lDln3-NOlVwx1Jwe3Pq7hoLqZsXma9QerERh1eDD08Vw=s176-c-k-c0x00ffffff-no-rj",
    },
    tags: ["Все", "Домашние Животные","Веселые Собачки","Юмористические видео"],
    views: 95940, 
    duration: 683,
    whenPosted: new Date('2021-04-18'),
    thumbnailUrl: "https://i.ytimg.com/vi/vwSw184vKd0/mqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/vwSw184vKd0?si=C92zRU6bvk4tDvIH&autoplay=1",
  },
]
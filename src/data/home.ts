
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
  whenPosted: string;
  thumbnailUrl: string;
  videoUrl: string;
}



export const videos = [
  {
    id: "1",
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
    whenPosted: "3 года назад",
    thumbnailUrl: "https://i.ytimg.com/vi/vwSw184vKd0/mqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/vwSw184vKd0?si=C92zRU6bvk4tDvIH&autoplay=1",
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
    whenPosted: "14 лет назад",
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
    whenPosted: "7 месяцев назад",
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
    whenPosted: "7 лет назад",
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
    whenPosted: "1 год назад",
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
    whenPosted: "4 года назад",
    thumbnailUrl: "https://i3.ytimg.com/vi/4GwYrQeQpJk/maxresdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/4GwYrQeQpJk?si=_etc3Vd7gNIGtpC-&autoplay=1",
  },
  {
    id: "7",
    title: "РУССКИЕ ПРИКОЛЫ про АВТО 2024 лучшие до слез угар, ржач, 30 минут смеха с дорог #4",
    channel: {
      name: "ЦАРЬ ПРИКОЛОВ",
      url: "https://www.youtube.com/@TsarPrikolol",
      profileUrl:
        "https://yt3.googleusercontent.com/mRwfGe4KRMroTYteeiPaCfWJeMPFUsUmW6PWIxR3dHGqpEhQzL19_J8rnaZ58GA3gyxo99VLPis=s176-c-k-c0x00ffffff-no-rj",
    },
    tags: ["Все", "Спортивные автомобили","Юмористические видео"],
    views: 49445,
    duration: 1902,
    whenPosted: "2 месяца назад",
    thumbnailUrl: "https://i.ytimg.com/vi/HtysPnQvS9o/mqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/HtysPnQvS9o?si=lE9NSg0ar8n-9R9f&autoplay=1",
  },
  {
    id: "8",
    title: "Самые Удивительные Спорткары",
    channel: {
      name: "В поисках фактов",
      url: "https://www.youtube.com/@v_poiskah_faktov",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/AIdro_nPB9hRg6EMXjHITnnWQ8UPVyGPHdI5BZM1BKId0YpW5g=s176-c-k-c0x00ffffff-no-rj",
    },
    tags: ["Все", "Спортивные автомобили"],
    views: 116788,
    duration: 696,
    whenPosted: "5 лет назад",
    thumbnailUrl: "https://i.ytimg.com/vi/2H54GAUyak8/mqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/2H54GAUyak8?si=nY1ExdV_mVdIG7rE&autoplay=1",
  },
  {
    id: "9",
    title: "ПРИКОЛЫ 2019. НЕРЕАЛЬНАЯ РЖАКА. УГАР",
    channel: {
      name: "Приколы на рыбалке",
      url: "https://www.youtube.com/@user-xx6lg7kn2u",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/AIdro_mEMJtsygF5kyhpc1VtHTqyw-cux_DBinfwxzsftthlfQ=s176-c-k-c0x00ffffff-no-rj",
    },
    tags: ["Все", "Юмористические видео"],
    views: 55056,
    duration: 131,
    whenPosted: "7 лет назад",
    thumbnailUrl: "https://i.ytimg.com/vi/W6INHK9aaoE/mqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/W6INHK9aaoE?si=xMTu1DBzr9_zNcmn&autoplay=1",
  },
  {
    id: "10",
    title: "🐕 Я тебя не боюсь! 😺 Смешное видео с собаками, кошками и котятами! 😸",
    channel: {
      name: "Top Pets",
      url: "https://www.youtube.com/@TopPetsVideo",
      profileUrl:
        "https://yt3.googleusercontent.com/FEUaIm2YPzf_IrR7wTSG_4QpGoKi2GuymEytaa3QPU08q_5ozebXLmgznrTNJf12vSpxGnxmhg=s120-c-k-c0x00ffffff-no-rj",
    },
    tags: ["Все", "Прикольные кошечки", "Веселые Собачки", "Юмористические видео", "Домашние Животные"],
    views: 52338,
    duration: 662,
    whenPosted: "4 дня назад",
    thumbnailUrl: "https://i.ytimg.com/vi/Ad5y91VMLs0/mqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/embed/Ad5y91VMLs0?si=aWqrNz0lJnhCHvnV&autoplay=1",
  },
]
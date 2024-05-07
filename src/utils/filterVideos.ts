import { IvideoItem } from "../data/home";

export default function filterVideos(
  videos: IvideoItem[],
  selectedCategory: string,
  searchString: string
): IvideoItem[] {
  return videos.filter(
    (item) =>
      item.tags.includes(selectedCategory) &&
      item.title.toLowerCase().includes(searchString.toLowerCase())
  );
}

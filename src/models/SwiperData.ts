import { SwiperTypes } from "./SwiperTypes";


export class SwiperData {
  images: Array<{
      url: string[];
  }> = []
  title: string = '';
  contentType: string | undefined;
  seeMoreText?: string = '';
  type?: SwiperTypes;
}

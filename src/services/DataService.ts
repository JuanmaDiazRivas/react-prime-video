import * as data from "src/models/AmazonData.json";
import { SwiperData } from "src/models/SwiperData";
import { SwiperTypes } from "src/models/SwiperTypes";

export function getSwiperSlidesForType(type: SwiperTypes): SwiperData[] {
  const collections = data.props.collections;
  let swiperSlides: SwiperData[] = [];
  let swiperItems = collections.filter(
    (collection) =>
      collection.collectionType.toLowerCase() === type.toString().toLowerCase()
  );

  swiperItems?.forEach((collection) => {
    let swiperData = new SwiperData();
    swiperData.type = type;
    swiperData.title = collection.text;
    swiperData.contentType = collection.facet.facetType;
    swiperData.seeMoreText = collection.seeMoreLink?.label;

    /**
     * The images from Amazon are fetched troguh SSR so, in order to not take 2 JSON, 
     * i included manually the desktop version in the same JSON using the 'ç' char
     */
    collection.items.forEach((item) => {
      swiperData.images.push({ url: item?.image?.url.split("ç") });
    });

    swiperSlides.push(swiperData);
  });

  return swiperSlides;
}

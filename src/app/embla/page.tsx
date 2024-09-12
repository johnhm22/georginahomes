import React, { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import GetData from '@/src/components/GetData';

// const photos = [
//   'https://images.prismic.io/georginahomes/ZrnZB0aF0TcGI2wY_IMG_20210410_153524_hdr.jpg?auto=format,compress',
//   'https://images.prismic.io/georginahomes/ZrnZA0aF0TcGI2wW_IMG_20210410_152036_hdr.jpg?auto=format,compress',
//   'https://images.prismic.io/georginahomes/Zrjq-kaF0TcGI2IB_naomi-hebert-2dcYhvbHV-M-unsplash.jpg?auto=format,compress',
//   'https://images.prismic.io/georginahomes/ZrpINEaF0TcGI3sh_IMG_20230606_130455.jpg'
// ];

type Property = {
  id: string;
  title: string;
  slug: string;
  monthly_rent: number;
  address: string;
  description: string;
  list_date: string | null;
  available_from_date: string | null;
  photos: string[];
  updatedAt: Date;
  createdAt: Date;
}[];

const Embla = () => {
  // const [emblaRef, emblaApi] = useEmblaCarousel();

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

  return <GetData />;
};

export default Embla;

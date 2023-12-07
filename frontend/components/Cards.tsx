import Image, { StaticImageData } from 'next/image';
import React from 'react';
import image from '../public/Boss.png';

type CardData = {
  id: number;
  title: string;
  rating: number;
  price: number;
  imageUrl: StaticImageData;
};

const cardData: CardData[] = [
  {
    id: 1,
    title: 'Hugo Boss',
    rating: 5.0,
    price: 599,
    imageUrl: image,
  },
];

const Cards = () => {
  return (
    <div className="flex space-x-4">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-950 dark:border-gray-700 mt-16n"
        >
          <a href="#">
            <Image className="p-8 rounded-t-lg" src={card.imageUrl} alt="product image" />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
            </a>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">${card.price}</span>
              <a
                href="#"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-800 dark:hover:bg-emerald-900 dark:focus:ring-green-900"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
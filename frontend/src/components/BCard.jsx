// BCard.jsx
import { useRef, useEffect } from 'react';
import CarouselCustomNav from './CarouselCustomNav';

const defaultImages = [
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
];

const BCard = ({ title, pictureUrls, description, address }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Dynamically adjust the font size based on the title's length.
    const titleElement = titleRef.current;
    if (titleElement) {
      const textLength = titleElement.textContent.length;
      const fontSize = Math.max(16, 32 - textLength * 0.5);
      titleElement.style.fontSize = `${fontSize}px`;
    }
  }, [title]);

  // Use the provided picture URLs if available; otherwise, use default images.
  const imagesToDisplay =
    pictureUrls && pictureUrls.length > 0 ? pictureUrls : defaultImages;

  return (
    // Increased width for a bigger card.
    <div className="card bg-base-100 w-[600px] shadow-xl">
      <div className="card-body items-center text-center">
        {/* Business Name */}
        <h1
          ref={titleRef}
          className="whitespace-nowrap overflow-hidden text-ellipsis w-full"
        >
          {title}
        </h1>

        {/* Business Address */}
        {address && (
          <p className="text-sm text-gray-600">
            {address}
          </p>
        )}

        {/* Carousel of Images */}
        <figure className="px-0 pt-5">
          <CarouselCustomNav images={imagesToDisplay} />
        </figure>

        {/* Business Description */}
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
};

export default BCard;

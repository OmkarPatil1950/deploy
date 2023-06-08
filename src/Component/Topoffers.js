import React from 'react';
import { useNavigate } from 'react-router-dom';

function TopOffers(props) {
  const navigate = useNavigate();

  const handleClick = (pageUrl) => {
    navigate(pageUrl);
  };

  const topOffersData = [
    {
      id: 4,
      imageUrl: '../images/beautyoffer.jpg',
      title: '',
      pageUrl: '/subcategory/2',
    },
    {
      id: 2,
      imageUrl: '../images/electonicsoffer.jpg',
      title: '',
      pageUrl: '/subcategory/4',
    },
    {
      id: 3,
      imageUrl: '../images/fashionoffer.jpg',
      title: '',
      pageUrl: '/productsByCat/14',
    },
    {
      id: 1,
      imageUrl: '../images/homeappliances.jpg',
      title: '',
      pageUrl: '/subcategory/1',
    },
    {
      id: 5,
      imageUrl: '../images/supermarketoffer.jpg',
      title: '',
      pageUrl: '/productsByCat/23',
    },
  ];

  return (
    <div>
      <h3 style={{ color: 'blue', textAlign: 'center' }}>
        <i>
          <b>Top Offers</b>
        </i>
      </h3>

      <div className="flex justify-center ml-2 mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {topOffersData.map((offer) => (
            <div
              className="card flex flex-col items-center justify-center transition-transform hover:scale-110"
              key={offer.id}
              style={{ width: '100%', height: 'auto' }}
            >
              <img
                src={offer.imageUrl}
                alt={offer.title}
                onClick={() => handleClick(offer.pageUrl)}
                style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }}
              />
              <h3>{offer.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopOffers;
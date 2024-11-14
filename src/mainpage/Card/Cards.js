import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import cardStyles from './Cards.module.css';


function Cards () {
    
      const cards = [
        {
          id: 1,
          images: [
            process.env.PUBLIC_URL + '/exh-1.jpg',
            process.env.PUBLIC_URL + '/exh-2.jpg',
            process.env.PUBLIC_URL + '/exh-3.jpg',
            process.env.PUBLIC_URL + '/exh-4.jpg',
            process.env.PUBLIC_URL + '/exh-5.jpg',
          ],
          title: 'Gaular, Norway',
          distance: '5,173KM away',
          date: 'Aug. 11 – 16',
          price: '$434 CAD night',
        },
        {
          id: 2,
          images: [
            process.env.PUBLIC_URL + '/exh-6.jpg',
            process.env.PUBLIC_URL + '/exh-7.jpg',
            process.env.PUBLIC_URL + '/exh-8.jpg',
            process.env.PUBLIC_URL + '/exh-9.jpg',
            process.env.PUBLIC_URL + '/exh-11.jpg',
            process.env.PUBLIC_URL + '/exh-12.jpg',
          ],
          title: 'Another Destination',
          distance: '6,100KM away',
          date: 'Sep. 5 – 10',
          price: '$520 CAD night',
        },
      ];

      const [currentIndexes, setCurrentIndexes] = useState(
        Object.fromEntries(cards.map(card => [card.id, 0]))
      );
    

      const nextCard = (cardId, imagesLength) => {
        setCurrentIndexes(prevIndexes => ({
          ...prevIndexes,
          [cardId]: (prevIndexes[cardId] + 1) % imagesLength,
        }));
      };
    
      const prevCard = (cardId, imagesLength) => {
        setCurrentIndexes(prevIndexes => ({
          ...prevIndexes,
          [cardId]: (prevIndexes[cardId] - 1 + imagesLength) % imagesLength,
        }));
      };

    const addToWishlist = () =>{

        alert("Added to your wishlist!" + '\n' + "Happy shopping!");
    }

    const openInNewTab = (url) => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
    <>
        <div className={cardStyles['cards-wrapper']}>

        {cards.map(card => (
          <div className={cardStyles['card-container']} key={card.id}>
            <div
              className={cardStyles['slider-wrapper']}
              style={{ transform: `translateX(-${currentIndexes[card.id] * 100}%)` }}
            >
              {card.images.map((image, index) => (
                <div className={cardStyles['slider-item']} key={index}>
                  <Link onClick={() => openInNewTab(card.id)} className={cardStyles['slider']}>
                    <img
                      className={cardStyles['card-img-top']}
                      src={image}
                      alt={`Card ${index}`}
                    />
                  </Link>
                </div>
              ))}
            </div>

            <i
              className={`bi bi-suit-heart-fill ${cardStyles['heart-icon-custom']}`}
              onClick={addToWishlist}
            />

            <i
              className={`bi-arrow-right-circle-fill ${cardStyles['right-arrow-custom']}`}
              onClick={() => nextCard(card.id, card.images.length)}
            />

            {currentIndexes[card.id] > 0 && (
              <i
                className={`bi bi-arrow-left-circle-fill ${cardStyles['left-arrow-custom']}`}
                onClick={() => prevCard(card.id, card.images.length)}
              />
            )}

            <div className={cardStyles['card-body']}>
              <h5 className={cardStyles['card-title']}>{card.title}</h5>
              <p className={cardStyles['card-text']}>{card.distance}</p>
              <p className={cardStyles['card-text']}>{card.date}</p>
              <p className={cardStyles['card-text']}>{card.price}</p>
            </div>
          </div>
        ))}

      

        <div className={cardStyles['card-container']}>
          <i className={`bi bi-suit-heart-fill ${cardStyles['heart-icon-custom']}`}
          onClick={addToWishlist}/>
          <i className={`bi-arrow-right-circle-fill ${cardStyles['right-arrow-custom']}`}/>  
          <img className={cardStyles['card-img-top']} src="exhreal.jpg" alt="Card cap"/>

          <div className={cardStyles['card-body']}>
            <h5 className={cardStyles['card-title']}>Gaular, Norway</h5>
            <p className={cardStyles['card-text']}>5,173KM away</p>
            <p className={cardStyles['card-text']}>Aug. 11 – 16</p>
            <p className={cardStyles['card-text']}>$434 CAD night</p>
          </div>

        </div>

        <div className={cardStyles['card-container']}>
          <i className={`bi bi-suit-heart-fill ${cardStyles['heart-icon-custom']}`}
          onClick={addToWishlist}/>
          <i className={`bi-arrow-right-circle-fill ${cardStyles['right-arrow-custom']}`}/>  
          <img className={cardStyles['card-img-top']} src="exh-7.jpg" alt="Card cap"/>

          <div className={cardStyles['card-body']}>
            <h5 className={cardStyles['card-title']}>Gaular, Norway</h5>
            <p className={cardStyles['card-text']}>5,173KM away</p>
            <p className={cardStyles['card-text']}>Aug. 11 – 16</p>
            <p className={cardStyles['card-text']}>$434 CAD night</p>
          </div>

        </div>

        <div className={cardStyles['card-container']}>
          <i className={`bi bi-suit-heart-fill ${cardStyles['heart-icon-custom']}`}
          onClick={addToWishlist}/>
          <i className={`bi-arrow-right-circle-fill ${cardStyles['right-arrow-custom']}`}/>  
          <img className={cardStyles['card-img-top']} src="exh-8.jpg" alt="Card cap"/>

          <div className={cardStyles['card-body']}>
            <h5 className={cardStyles['card-title']}>Gaular, Norway</h5>
            <p className={cardStyles['card-text']}>5,173KM away</p>
            <p className={cardStyles['card-text']}>Aug. 11 – 16</p>
            <p className={cardStyles['card-text']}>$434 CAD night</p>
          </div>

        </div>

        <div className={cardStyles['card-container']}>
          <i className={`bi bi-suit-heart-fill ${cardStyles['heart-icon-custom']}`}
          onClick={addToWishlist}/>
          <i className={`bi-arrow-right-circle-fill ${cardStyles['right-arrow-custom']}`}/>  
          <img className={cardStyles['card-img-top']} src="exhreal.jpg" alt="Card cap"/>

          <div className={cardStyles['card-body']}>
            <h5 className={cardStyles['card-title']}>Gaular, Norway</h5>
            <p className={cardStyles['card-text']}>5,173KM away</p>
            <p className={cardStyles['card-text']}>Aug. 11 – 16</p>
            <p className={cardStyles['card-text']}>$434 CAD night</p>
          </div>

        </div>

        <div className={cardStyles['card-container']}>
          <i className={`bi bi-suit-heart-fill ${cardStyles['heart-icon-custom']}`}
          onClick={addToWishlist}/>
          <i className={`bi-arrow-right-circle-fill ${cardStyles['right-arrow-custom']}`}/>  
          <img className={cardStyles['card-img-top']} src="exh-11.jpg" alt="Card cap"/>

          <div className={cardStyles['card-body']}>
            <h5 className={cardStyles['card-title']}>Gaular, Norway</h5>
            <p className={cardStyles['card-text']}>5,173KM away</p>
            <p className={cardStyles['card-text']}>Aug. 11 – 16</p>
            <p className={cardStyles['card-text']}>$434 CAD night</p>
          </div>

        </div>

        <div className={cardStyles['card-container']}>
          <i className={`bi bi-suit-heart-fill ${cardStyles['heart-icon-custom']}`}
          onClick={addToWishlist}/>
          <i className={`bi-arrow-right-circle-fill ${cardStyles['right-arrow-custom']}`}/>  
          <img className={cardStyles['card-img-top']} src="exh-12.jpg" alt="Card cap"/>

          <div className={cardStyles['card-body']}>
            <h5 className={cardStyles['card-title']}>Gaular, Norway</h5>
            <p className={cardStyles['card-text']}>5,173KM away</p>
            <p className={cardStyles['card-text']}>Aug. 11 – 16</p>
            <p className={cardStyles['card-text']}>$434 CAD night</p>
          </div>

        </div>

        
        
        </div>
                
</>
    )
}

export default Cards;
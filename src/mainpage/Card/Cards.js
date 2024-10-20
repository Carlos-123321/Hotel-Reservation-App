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
      price: '$434 CAD night'
    }
  ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
    
      const nextCard = () => {
        setCurrentIndex((prevIndex) =>
          (prevIndex + 1) % cards[0].images.length
        );
      };

      const prevCard = () => {
        setCurrentIndex((prevIndex) =>
          (prevIndex + - 1) % cards[0].images.length
        );
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

        <div className={cardStyles['card-container']}>
        
        <i className={`bi ${cardStyles['bi-suit-heart-fill']}`}  onClick={addToWishlist}/>
        <i className={`bi ${cardStyles['bi-arrow-right-circle-fill']}`} onClick={nextCard}/>         
        <i className={`bi ${cardStyles['bi-arrow-left-circle-fill']} ${currentIndex === 0 ? cardStyles['hidden'] : ''}`}
          onClick={prevCard}/>
      
          <Link onClick={() => openInNewTab(cards[0].id)} className={cardStyles['slider']}>
          <div
            className={cardStyles['slider-wrapper']}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards[0].images.map((image, index) => (
              <div className={cardStyles['slider-item']} key={index}>
                <img
                  className={cardStyles['card-img-top']}
                  src={image}
                  alt={`Card ${index}`}
                />
              </div>
            ))}
          </div>
          
        <div className={cardStyles['card-body']}>
        <h5 className={cardStyles['card-title']}>{cards[0].title}</h5>
        <p className={cardStyles['card-text']}>{cards[0].title}</p>
        <p className={cardStyles['card-text']}>{cards[0].date}</p>
        <p className={cardStyles['card-text']}>{cards[0].price}</p>
        </div>
        </Link>

        </div>
        

        <div className={cardStyles['card-container']}>
        <i className={`bi ${cardStyles['bi-suit-heart-fill']}`} onClick={addToWishlist}/>
        <i className={`bi ${cardStyles['bi-arrow-right-circle-fill']}`}/>  
        <img className={cardStyles['card-img-top']} src="exh-1.jpg" alt="Card cap"/>

        <div className={cardStyles['card-body']}>
        <h5 className={cardStyles['card-title']}>Gaular, Norway</h5>
        <p className={cardStyles['card-text']}>5,173KM away</p>
        <p className={cardStyles['card-text']}>Aug. 11 – 16</p>
        <p className={cardStyles['card-text']}>$434 CAD night</p>
        </div>

        </div>

        <div className={cardStyles['card-container']}>
        <i className={`bi ${cardStyles['bi-suit-heart-fill']}`} onClick={addToWishlist}/>
        <i className={`bi ${cardStyles['bi-arrow-right-circle-fill']}`}/>  
        <img className={cardStyles['card-img-top']} src="exh-1.jpg" alt="Card cap"/>

        <div className={cardStyles['card-body']}>
        <h5 className={cardStyles['card-title']}>Gaular, Norway</h5>
        <p className={cardStyles['card-text']}>5,173KM away</p>
        <p className={cardStyles['card-text']}>Aug. 11 – 16</p>
        <p className={cardStyles['card-text']}>$434 CAD night</p>
        </div>

        </div>

        <div className={cardStyles['card-container']}>
        <i className={`bi ${cardStyles['bi-suit-heart-fill']}`} onClick={addToWishlist}/>
        <i className={`bi ${cardStyles['bi-arrow-right-circle-fill']}`}/>  
        <img className={cardStyles['card-img-top']} src="exh-1.jpg" alt="Card cap"/>

        <div className={cardStyles['card-body']}>
        <h5 className={cardStyles['card-title']}>Gaular, Norway</h5>
        <p className={cardStyles['card-text']}>5,173KM away</p>
        <p className={cardStyles['card-text']}>Aug. 11 – 16</p>
        <p className={cardStyles['card-text']}>$434 CAD night</p>
        </div>

        </div>

        <div className={cardStyles['card-container']}>
        <i className={`bi ${cardStyles['bi-suit-heart-fill']}`} onClick={addToWishlist}/>
        <i className={`bi ${cardStyles['bi-arrow-right-circle-fill']}`}/>  
        <img className={cardStyles['card-img-top']} src="exh-1.jpg" alt="Card cap"/>

        <div className={cardStyles['card-body']}>
        <h5 className={cardStyles['card-title']}>Gaular, Norway</h5>
        <p className={cardStyles['card-text']}>5,173KM away</p>
        <p className={cardStyles['card-text']}>Aug. 11 – 16</p>
        <p className={cardStyles['card-text']}>$434 CAD night</p>
        </div>

        </div>

        <div className={cardStyles['card-container']}>
        <i className={`bi ${cardStyles['bi-suit-heart-fill']}`} onClick={addToWishlist}/>
        <i className={`bi ${cardStyles['bi-arrow-right-circle-fill']}`}/>  
        <img className={cardStyles['card-img-top']} src="exh-1.jpg" alt="Card cap"/>

        <div className={cardStyles['card-body']}>
        <h5 className={cardStyles['card-title']}>Gaular, Norway</h5>
        <p className={cardStyles['card-text']}>5,173KM away</p>
        <p className={cardStyles['card-text']}>Aug. 11 – 16</p>
        <p className={cardStyles['card-text']}>$434 CAD night</p>
        </div>

        </div>

        <div className={cardStyles['card-container']}>
        <i className={`bi ${cardStyles['bi-suit-heart-fill']}`} onClick={addToWishlist}/>
        <i className={`bi ${cardStyles['bi-arrow-right-circle-fill']}`}/>  
        <img className={cardStyles['card-img-top']} src="exh-1.jpg" alt="Card cap"/>

        <div className={cardStyles['card-body']}>
        <h5 className={cardStyles['card-title']}>Gaular, Norway</h5>
        <p className={cardStyles['card-text']}>5,173KM away</p>
        <p className={cardStyles['card-text']}>Aug. 11 – 16</p>
        <p className={cardStyles['card-text']}>$434 CAD night</p>
        </div>

        </div>

        <div className={cardStyles['card-container']}>
        <i className={`bi ${cardStyles['bi-suit-heart-fill']}`} onClick={addToWishlist}/>
        <i className={`bi ${cardStyles['bi-arrow-right-circle-fill']}`}/>  
        <img className={cardStyles['card-img-top']} src="exh-1.jpg" alt="Card cap"/>

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
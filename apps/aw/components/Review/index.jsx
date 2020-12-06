/* /pages/restaurants.js */
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";
import ImageWrap from './primitives/imageCarouselWrap';
import CarouselImage from './primitives/CarouselImage';
import TextWrap from './primitives/textWrap';
import TitleWrap from './primitives/titleWrap';

import StarRatings from 'react-star-ratings';
import { useState } from 'react';
import md from './renderReview';
import {
  Carousel,
  Col,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const GET_REVIEW = gql`
  query($title: String) {
    reviews(limit: 1 where: {
      title: $title
    }) {
      title
      rating
      review
      author {
        username
      }
      book {
        images {
          url
        }
      }
    }
  }
`;

function Review(props) {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_REVIEW, {
    variables: { title: router.query.title },
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);



  if (error) return "Error Loading Review";
  if (loading) return <h1>Loading ...</h1>;
  console.log(data);
  if (data.reviews) {
    const { reviews } = data;
    const actualReview = reviews[0]
    const images = actualReview.book.images;
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
    const slides = images.map((image) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={image.url}
          
        >
          <CarouselImage src={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`}/>
        </CarouselItem>
      );
    });
    return (
      <>
        <TitleWrap>
          <h1>{actualReview.title}</h1>
          <h2>by: { actualReview.author.username }</h2>
          <StarRatings
            rating={actualReview.rating}
            starRatedColor="#565656"
            numberOfStars={5}
            name='rating'
            starDimension="20px"
            starSpacing="3px"
          />

        </TitleWrap>
        
       
        <ImageWrap>

        <Carousel 
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
          { slides }
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        </ImageWrap>
        <Col lg={{ size: 6, offset: 3}}>
          <TextWrap>
          { md({ data: actualReview.review }) }
          </TextWrap>
        </Col>
      </>
    );
  }
  return <h1>Add Review</h1>;
}
export default Review;
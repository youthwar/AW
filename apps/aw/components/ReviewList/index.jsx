/* components/RestaurantList/index.js */
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ReviewItemWrap from './primitives/reviewItemWrap';
import Link from "next/link";
import StarRatings from 'react-star-ratings';
import TitleWrap from './primitives/titleWrap';
import Title from './primitives/title';
import RatingsWrap from './primitives/ratings';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

const QUERY = gql`
  {
    reviews {
      id
      title
      rating
      book {
        title
        images {
          url
        }
      }
    }
  }
`;

function ReviewList(props) {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading restaurants";
  //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch
  if (loading) return <h1>Fetching</h1>;
  if (data.reviews && data.reviews.length) {
    console.log(data);
    //searchQuery
    const searchQuery = data.reviews.filter((query) =>
      query.title.toLowerCase().includes(props.search)
    );
    if (searchQuery.length != 0) {
      
      return (
        <Row>
          {searchQuery.map((res, idx) => {
            const friendlyUrl = res.title.split(' ').join('-');
            return (
              <Link
                as={`/review/${friendlyUrl}`}
                href={`/restaurants?id=${friendlyUrl}`}
                key={idx}
              >
                <ReviewItemWrap href="/">
                  <CardImg
                    top={true}
                    src={`${process.env.NEXT_PUBLIC_API_URL}${res.book.images[0].url}`}
                  />
                  <TitleWrap>
                    <Title>{ res.title }</Title>
                    <RatingsWrap>
                      <StarRatings
                        rating={res.rating}
                        starRatedColor="#565656"
                        numberOfStars={5}
                        name='rating'
                        starDimension="10px"
                        starSpacing="2px"
                      />
                    </RatingsWrap>
                  </TitleWrap>

                </ReviewItemWrap>
              </Link>
            );
          })}

          <style jsx global>
            {`
              a {
                color: white;
              }
              a:link {
                text-decoration: none;
                color: white;
              }
              a:hover {
                color: white;
              }
              .card-columns {
                column-count: 3;
              }
            `}
          </style>
        </Row>
      );
    } else {
      return <h1>No Reviews Found</h1>;
    }
  }
  return <h5>Add Restaurants</h5>;
}
export default ReviewList;
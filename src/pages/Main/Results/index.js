/* eslint-disable react/no-typos */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { MdArrowForward } from 'react-icons/md';

// eslint-disable-next-line import/extensions
import { Container, Wrapper, Cover, Info, ActionButons } from './styles.js';

const GET_BOOK = gql`
  query getBook($isbn: String!) {
    book(isbn: $isbn) {
      isbn
      name
      coverImage
      price
      promotionalPrice
      rating
    }
  }
`;

export default function Results({ isbn }) {
  console.log('ISBN: ', isbn);

  const { loading, error, data } = useQuery(GET_BOOK, { variables: { isbn } });

  if (loading) return <Container>Carregando...</Container>;

  if (error) {
    console.error('Erro ao recuperar os dados do servidor. ', error);

    alert(
      'Erro ao recuperar os dados do servidor, por favor, verifique a sua conexão.'
    );

    return null;
  }

  if (data && !data.book.isbn) {
    alert('Desculpe, este livro não foi encontrado em nossa base de dados.');

    return null;
  }

  return (
    <Container>
      {data && (
        <Link to={`/book-details/${data.book.isbn}`}>
          <Wrapper>
            <Cover src={data.book.coverImage} />
            <Info>
              <h4 className="name">{data.book.name}</h4>
              <div className="book-rating">
                <StarRatings
                  rating={data.book.rating}
                  starRatedColor="#F1C40F"
                  starDimension="18px"
                  starSpacing="0"
                />{' '}
                (${data.book.rating})
              </div>
              <div className="price">
                <span className={data.book.promotionalPrime ? 'discount' : ''}>
                  R$ {Number(data.book.price).toFixed(2)}
                </span>
                {data.book.promotionalPrime && (
                  <span>
                    por R$ {Number(data.book.promotionalPrime).toFixed(2)}
                  </span>
                )}
              </div>
            </Info>
            <ActionButons>
              <span className="button">
                <MdArrowForward size={32} calor="#fff" />
              </span>
            </ActionButons>
          </Wrapper>
        </Link>
      )}
    </Container>
  );
}

Results.PropTypes = {
  isbn: PropTypes.string.isRequired,
};

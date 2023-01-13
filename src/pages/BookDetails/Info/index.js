import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import {MdArrowBack } from "react-icons/md";

import { Container, Cover } from "./style.js";

export default function Info({ book }) {
    return (
        <Container>
            <Link className="go-back" to="/">
                <MdArrowBack size={32} color="#2ecc71" />
            </Link>
            <Cover src={book.coverImage} />
            <h4 className="name">{book.name}</h4>
            <div className="book-rating">
                <StarRatings
                    rating={book.rating}
                    starRatedColor="#F1C40F"
                    starDimension="18px"
                    starSpacing="0"
                />{" "}
                (${book.rating})
            </div>
            <p>
                <span className={book.promotionalPrice ? "discount" : ""}>
                    R$ {Number(book.price).toFixed(2)}
                </span>
                {book.promotionalPrice && (
                    <span> por R$ {Number(book.promotionalPrice).toFixed(2)}</span>
                )}
            </p>
        </Container>
    );
}

Info.Proptypes = {
    book: Proptypes.shape({
        name: Proptypes.string,
        rating: Proptypes.number,
        promotionalPrice: Proptypes.number,
        price: Proptypes.number,
        coverImage: Proptypes.string,
    }).isRequired
};
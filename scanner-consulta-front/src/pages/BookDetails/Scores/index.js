import React from "react";
import PropTypes from "prop-types";
import { calculateScore } from "../../../services/books";
import { Container, Score, Value } from "./styles.js";

export default function Scores({ book }) {
    return (
        <Container>
            {book.scores &&
                book.scores.map(b => (
                <Score scoreColor={calculateScore(b.value).color} key={b._id}>
                    <Value scoreColor={calculateScore(b.value).color}>
                        <span>{b.value}</span>
                    </Value>
                    <span>{b.name}</span>
                </Score>
            ))}
        </Container>
    );
}

Scores.propTypes = {
    book: PropTypes.shape({
        scores: PropTypes.array
    }).isRequired
}
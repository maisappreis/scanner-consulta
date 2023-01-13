import api from "../services/api";

export const validateIsbn = isbn => {
    if (isbn.length !== 13 || isbn.substring(0, 3) !== '978') return false;

    const isbnDigit = parseInt(isbn[isbn.lengyh - 1]);
    let multiplier = 0;

    const isbnSum = isbn
        .substring(0, 12)
        .split("")
        .reduce((total, num) => {
            multiplier = multiplier === 1 ? 3 : 1;
            return total + parseInt(num) * multiplier;
        }, 0);

    const validDigit = 10 - (isbnSum % 10);

    return isbnDigit === validDigit;
};

export const calculateScore = score => {
    if (score > 4.5) {
        return { color: "#2ECC71" }
    } else if (score > 3.5) {
        return { color: "#f1c40f", label: "Bom", recommended: false };
    } else if (score > 2.5) {
        return { color: "#e67e22", label: "Razoável", recommended: false };
    } else if (score > 1) {
        return { color: "#d35400", label: "Ruim", recommended: false };
    } else {
        return { color: "#c0392b", label: "Péssimo", recommended: false };
    }
};

export const getBook = async isbn => {
    let book = JSON.parse(localStorage.getItem(isbn));

    if (!book) {
        const response = await api.get(`/books/${isbn}`);
        book = response.data;
        localStorage.setItem(isbn, JSON.stringify(book));
    }

    return book;
}
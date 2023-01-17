import Book from "../../models/Book";

class BooksController {

    async show(req, res) { // GET Method >> findOne()
        try {
            const { isbn } = req.params;
            const book = await Book.findOne({ isbn });

            if(!book) {
                return res.status(404).json;
            }

            return res.json(book);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Internal Server Error "});
        }
    }

    async create(req, res) { // POST Method >> create()
        try {
            const book = await Book.create(req.body);
            return res.status(201).json(book);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Internal Server Error "});
        }
    }

    async update(req, res) { // UPDATE Method >> updateOne()
        try {
            const { isbn } = req.params;
            const book = await Book.findOne({ isbn });

            if(!book) {
                return res.status(404).json();
            }

            await book.updateOne(req.book);
            return res.status(200).json();
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async destroy(req, res) { // DELETE Method >> deleteOne()
        try {
            const { isbn } = req.params;
            const book = await Book.findOne({ isbn });

            if(!book) {
                return res.status(404).json();
            }

            await book.deleteOne();
            return res.status(200).json();
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export default new BooksController();
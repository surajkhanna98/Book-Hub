const Book = require("../model/Book")

const getAllBooks = async(req, res, next) => {
    let books;
    try{
        books = await Book.find();

    }catch (err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message:"No Books Found"});
    }
    return res.status(200).json({books});
}

const addBook = async (req, res, next) => {
    const {name, author, description, price, availability, image} = req.body
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price, availability,image

        });
        await book.save();

    }catch (err){
        console.log(err);
    }

    if(!book){
        return res.status(500).json({message:"Unable to Add"});
    }

    return res.status(201).json({book});
}

const getById = async (req, res, next) => {
    let book;
    const id = req.params.id;
    try{
        book = await Book.findById(id);
    }catch (err){
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message:"Book not found"});
    }

    return res.status(200).json({book});

}

const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const {name, author, description, price, available, image} = req.body;
    let book;
    try{
        console.log(id);
        book = await Book.findByIdAndUpdate(id,{
            name, author, description, price, available, image
        });
        //console.log(book)
        book = await book.save();
    }catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(500).json({message:"Unable to update by this id"});
    }

    return res.status(200).json({book});
    

}

const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"Unable to Delete by this id"});
    }

    return res.status(200).json({message:"Book delete successfully"});
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
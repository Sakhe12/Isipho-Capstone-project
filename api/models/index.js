const database = require('../config/db_config');
const {hash, compare, hashSync} =
require('bcrypt');

//MIDDLEWARE
const {createToken} = require('../middleware/AuthenticatedUser');

class User {
    login(req, res) {
        const {email, userPass} = req.body;
        const strQry =
        `select UserID, firstName, surname, gender, Cellnumber, email, userPass, joinDate from Users where email = '${email}'`;
        database.query(strQry, async (error, data)=>{
            if(error) throw err;
            if((!data.length) || (data == null)) {
                res.status(401).json({error: 
                    "You provide an incorrect email address"});
            }else {
                await compare(userPass, 
                    data[0].userPass, 
                    (cErr, cResult)=> {
                        if(cErr) throw cErr;
                        const jwToken = 
                        createToken(
                            {
                                email, userPass  
                            }
                        );
                        // Saving
                        res.cookie('LegitUser',
                        jwToken, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(cResult) {
                            res.status(200).json({
                                msg: 'Logged in',
                                jwToken,
                                result: data[0]
                            })
                        }else {
                            res.status(401).json({
                                err: 'You entered an incorrect password or did not register. '
                            })
                        }
                    })
            }
        })     
    }
    fetchUsers(req, res) {
        const strQry = 
        `select UserID, firstName, surname, gender, Cellnumber, email, userPass, joinDate from Users;`;
        ;
        //db
        database.query(strQry, (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })
    }
    fetchUser(req, res) {
        const strQry = `select UserID, firstName, surname, gender, Cellnumber, email, joinDate, cart, userRole
        FROM Users
        WHERE UserID = ?;`;
        //db
        database.query(strQry,[req.params.id], (err, data)=>{
            if(err) throw err;
            res.status(200).json( {results: data} );
        });

    }
    async createUser(req, res) {
        // Payload
        let detail = req.body;
        // Hashing user password
        detail.userPass = await 
        hash(detail.userPass, 15);
        // This information will be used for authentication.
        let user = {
            email: detail.email,
            userPass: detail.userPass
        }
        // sql query
        const strQry =
        `insert into Users
        Set ?;`;
        database.query(strQry, [detail], (err)=> {
            if(err) {
                res.status(401).json({err});
            }else {
                // Create a token
                const jwToken = createToken(user);
                // This token will be saved in the cookie. 
                // The duration is in milliseconds.
                res.cookie("LegitUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({msg: "A user record was saved."})
            }
        })    
    }
    updateUser(req, res) {
        let data = req.body;
        if(data.userPass !== null || 
            data.userPass !== undefined)
            data.userPass = hashSync(data.userPass, 15);
        const strQry = 
        `
        update Users
        set ?
        where UserID = ?;
        `;
        //db
        database.query(strQry,[data, req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A row was affected"} );
        })    
    };
    deleteUser(req, res) {
        const strQry = 
        `
        delete from Users
        where UserID = ?;
        `;
        //db
        database.query(strQry,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A record was removed from a database"} );
        })    
    }
}
// Books
class Book {  
    fetchBooks(req, res) {
        const strQry = `select bookID, bookName, bookDescription, 
        author, price, category, imgURL
        from Books;`
        database.query(strQry, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchBook(req, res) {
        const strQry = `select bookID, bookName, bookDescription, 
        author, price, category, imgURL
        FROM Books
        WHERE BookID = ?;`;
        database.query(strQry, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    addBook(req, res) {
        const strQry = 
        `
        insert into Books
        set ?;
        `;
        database.query(strQry,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to insert a new record."});
                }else {
                    res.status(200).json({msg: "Book saved"});
                }
            }
        );    

    }
    updateBook(req, res) {
        const strQry = 
        `
        update Books
        set ?
        where BookID = ?
        `;
        database.query(strQry,[req.body, req.params.BookID],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to update a record."});
                }else {
                    res.status(200).json({msg: "Book updated"});
                }
            }
        );    

    }
    deleteBook(req, res) {
        const strQry = 
        `
        delete from Books
        where BookID = ?;
        `;
        database.query(strQry,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "The record was not found."});
            res.status(200).json({msg: "A book was deleted."});
        })
    }
}
//Cart 
class Cart {
    fetchCart(req, res) {
    const strQry = 
    `select UserID, bookName, price, imgURL from Cart
    inner join Books on Cart.bookID = Books.bookID
    where Cart.UserID = ${req.params.id}
    ;`; database.query(strQry, (err, results)=> {
        if (err) throw err;
        res.status(200).json({results: results})
    })

    };

   addCart(req, res) {
    const strQry =
    `insert into Cart set ?;`;
    database.query(strQry, [req.body],
        (err)=> {
            if (err) {
                res.status(400).json({err: "Unable to add book>"})
            }else {
                res.status(200).json({msg: "Book successfully added to cart."});
            }
        })
   };
   deleteCart(req, res) {
    const strQry = 
    `delete from Cart
    where cartID = ?;`;
    database.query(strQry, [req.params.id], (err)=> {
        if (err) res.status(400).json({err: "Book Successfully deleted"});
        res.status(200).json({msg: "Cart was deleted."});
    })   
};
edit(req, res) {
    const strQry = 
    `update Cart set 
    where cartID = ?`;
    database.query(strQry, [req.body, req.params.id],
        (err)=> {
            if(err){
                res.status(400).json({err: "Unable to update the book"});
            }else{
                res.status(200).json({message:
                "Book updated"})
            }
        })
}
}
//Export User class
module.exports = {
    User,
    Book, Cart
}


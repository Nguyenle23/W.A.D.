const mongodb = require('../config/mongodb');
const student = 'students';

const showLogin = async(req, res) => {
    res.send(`
        <form method="POST" action="/login">
            <input type="text" name="studentID" placeholder="Enter your name" />
            <button type="submit">Submit</button> 
        </form>
      `);
}

const login = async(req, res) => {
    try {

        const id = req.body.studentID;
        const pass = req.body.studentPass;

        const db = await mongodb.getDB();
        const result = await db.collection(student).findOne({ studentID: req.body.studentID });
        if (result) {
            if (result.studentPass === req.body.studentPass) {
                const setStatus = {...result, status: "success" };
                res.send({
                    result: result,
                    status: "success",
                    message: "Login success",
                });
            } else {
                res.send({
                    status: "fail",
                    message: "Login fail",
                });
            }
        } else {
            res.send({
                status: "fail",
                message: "No account exist",
            });
        }
    } catch (error) {
        console.error('LoginController', error);
    }

}

module.exports = { showLogin, login };
import React, {useState} from 'react';

import '../../App.css';

import { studentLogin } from '../../actions/index.js';


function Login() {
    const [studentID, setStudentID] = useState('');
    const handleStudentID = (e) => setStudentID(e.target.value);
    
    const [studentPass, setStudentPass] = useState('');
    const handleStudentPass = (e) => setStudentPass(e.target.value);

    const onLogin = () => {
        const getStudent = {
            studentID: studentID,
            studentPass: studentPass,
        }
        studentLogin(getStudent)
        .then(res => {
            console.log(res);
            if(res === 'success') {
                localStorage.setItem("Logined", true);
                localStorage.setItem("studentID", studentID);
                // window.location.href = "/home";
            } else {
                alert('Login failed');
            }

        })
    }

    return (
        <form>
            <h3>Log in</h3>
            
            <div className="form-group">
                <label>Student ID:</label>
                <input type="text" className="form-control" placeholder="Your studentID" 
                    value={studentID}
                    onChange={handleStudentID}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Your password"
                    value={studentPass}
                    onChange={handleStudentPass}
                />
            </div>

            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={onLogin}>Sign in</button>
            </div>
        </form>
    );
}

export default Login   

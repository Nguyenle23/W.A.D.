import React, {useState} from 'react';

function Home() {

    return (
        <form>
            <h1>Dashboard</h1>
            
            <div className="form-group">
                <label>Student ID:</label>
                <input type="text" className="form-control" placeholder="Your studentID" 
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Your password"
                />
            </div>

            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            </div>
        </form>
    );
}

export default Home   

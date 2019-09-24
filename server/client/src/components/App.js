import React from 'react';

const App = () => {
    return (
        <div>
            <a href="/api/hello">After clicking you should see a message from SERVER</a>
            <br></br>
            <br></br>
            <br></br>
            <a href="/auth/google">Sign-in with Google</a>
        </div>
    );
};

export default App;
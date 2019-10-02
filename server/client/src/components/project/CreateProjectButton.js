import React from 'react';
import {Link} from 'react-router-dom';

const CreateProjectButton = () => {
    return (
        <div>
            <React.Fragment>
                <Link to="/addProject" className="btn btn-lg btn-info"> Create a Project</Link>
            </React.Fragment>
        </div>
    )
}

export default CreateProjectButton;

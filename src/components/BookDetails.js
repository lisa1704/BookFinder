import React from "react";
import {Link} from "react-router-dom";

const BookDetails = (props) => {
    return (<div>
        <div className="row">
            <div className="col s12 m7">
                <div className="card huge">
                    <img
                        src={props.location.image}
                        alt=""
                        style={{ width: "250", height: "800" }}
                    />
                    <div></div>
                    <span className="card-title"><p>{props.location.title}</p></span>
                    <span className="card-title"><p>{props.location.author}</p></span>
                    <span className="card-title"><p>{props.location.published}</p></span>
                    <div className="card-content">
                        <p> <i>{props.location.description}</i> </p>
                    </div>
                    <div className="card-action">
                        <Link to={{ pathname: "/", books: props.location.props }}>Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

};

export default BookDetails;
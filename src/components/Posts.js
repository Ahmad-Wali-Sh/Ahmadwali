import React from "react";

export default function Posts(props) {

  return (
    <div className="flex">
          <div className="names">
              <h1>Name</h1>
                <ul>
                    {props.name}
                </ul>
          </div>


    <div className=" lastnames">
          <h1>Last Names</h1>
                <ul className="unstyled">
                    {props.lastname}
                </ul>
    </div>


    <div className="scores">
        <h1>Scores</h1>
            <ul className="unstyled">
                {props.score}
            </ul>
    </div>

    
    <div className="buttons">
        <h1>Edit</h1>
            {props.link}
        </div>
    </div>
  );
}

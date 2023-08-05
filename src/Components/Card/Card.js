import React from "react";
import 'tachyons';

export default function Card(props) {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow">
            <img src= {"https://robohash.org/" + props.id + "?200x200"}  alt="robot" />
            <div className="tc">
                <h2>{props.name}</h2>   
                <p> {props.email} </p>
            </div>
        </div>
    );
}
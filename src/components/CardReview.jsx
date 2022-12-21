import React from "react";
import { FaStar } from "react-icons/fa";

export default function CardReview(props) {
  return (
    <div className='testimonial-item'>
      <div className='stars'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p>{props.contents}</p>
      <div className='profile mt-auto'>
        <img src={props.imgUrl} className='testimonial-img' alt={props.Name} />
        <h3>{props.Name}</h3>
        <h4>{props.area}</h4>
      </div>
    </div>
  );
}

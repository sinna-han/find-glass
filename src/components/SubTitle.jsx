import React from "react";

export default function SubTitle(props) {
  return (
    <section className='sub_v'>
      <h2>{props.title}</h2>
      <p>{props.exp}</p>
    </section>
  );
}

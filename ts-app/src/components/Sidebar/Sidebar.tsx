// @flow
import * as React from 'react';
import './Sidebar.css';

type Props = {};

export default function Sidebar(props: Props) {
  const arr = new Array(10).fill(0)
  return (
    <section className="sidebar">
      {arr.map((el,index)=>(
        <span key={index} className={"nav"}>fds </span>
      ))}
    </section>
  );
};

import React from "react";

const Burger = ({ ...props }) => {
  const burgerEl: Array<string> = Array.from({ length: 9 }, () => "");

  return (
    <>
      <div {...props}>
        {burgerEl.map((_el: string, id: number) => (
          <span key={id}></span>
        ))}
      </div>
    </>
  );
};

export default Burger;

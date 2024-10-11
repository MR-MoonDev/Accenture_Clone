import React from 'react';
import CartItem from './CartItem';

const cartData = [
  {
    title: "Title 1",
    heading: "Heading 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl: "/my.jpeg",
  },
  {
    title: "Title 2",
    heading: "Heading 2",
    content: "Consectetur possimus perspiciatis voluptates similique voluptas deleniti debitis.",
    imageUrl: "/my.jpeg",
  },
  {
    title: "Title 3",
    heading: "Heading 3",
    content: "Id rem blanditiis quasi rerum at ab, consectetur eos.",
    imageUrl: "/my.jpeg",
  },
  {
    title: "Title 4",
    heading: "Heading 4",
    content: "Id rem blanditiis quasi rerum at ab, consectetur eos.",
    imageUrl: "/my.jpeg",
  },
];



const Cart = () => {
  return (
    <div className="flex  justify-center items-center mt-20">
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {cartData.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  </div>
  )
}

export default Cart
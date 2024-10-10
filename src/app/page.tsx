import AccentureResponsiblr from './Component/AccentureResponsiblr';
import Cart from './Component/Cart';
import Values from './Component/Values';
import './globals.css';
import 'animate.css';

export default function Home() {
  return (
    <main className='bg-black  flex flex-col gap-16 px-10'>
      <Cart />
      <Values/>
      <AccentureResponsiblr/>
         </main>
  );
}

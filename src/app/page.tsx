import Cart from './Component/Cart';
import Values from './Component/Values';
import './globals.css';
import 'animate.css';

export default function Home() {
  return (
    <main className='bg-black p-3 flex flex-col gap-8'>
      <Cart />
      <Values/>
         </main>
  );
}

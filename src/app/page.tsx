import AccentureResponsiblr from './Component/AccentureResponsiblr';
import Careers from './Component/Careers';
import Cart from './Component/Cart';
import Global_recognition_and_awards from './Component/Global_recognition_and_awards';
import Infinitmovingcart from './Component/Infinitmovingcart';
import Footer from './Component/Footer';
import Values from './Component/Values';
import './globals.css';
import 'animate.css';
import Navbar from './Component/Navbar';

export default function Home() {
  return (
    <main className='bg-black   '>
      <Navbar/>
      <Cart />
      <Values/>
      <AccentureResponsiblr/>
      <Global_recognition_and_awards/>
      <Careers/>
      <Infinitmovingcart/>
      <Footer/>
         </main>
  );
}

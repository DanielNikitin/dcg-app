// fonts
import { Sora, Roboto, Copse } from '@next/font/google';

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700'],
});

// components
import Nav from '../components/Nav';
import Header from '../components/Header';
import Copyright from './Copyright';

const Layout = ({ children }) => {
  return (

<div className={`page bg-site text-white bg-cover bg-no-repeat
                           ${roboto.variable} font-roboto relative`}>
      <Nav />
      <Header />
      {children}
      <Copyright />
    </div>
  );
};

export default Layout;

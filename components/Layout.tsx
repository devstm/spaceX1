import Navbar from './Nav';
import Footer from './Footer';

interface LayoutProps { 
  children: React.ReactNode;
  setLang: (value: string) => void;
  lang: string;
}
function Layout({ children, setLang, lang }: LayoutProps) {
  return (
    <div className='content'>
      <Navbar setLang={setLang} lang={lang} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

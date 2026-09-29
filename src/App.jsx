import Image from "./components/Image"
import Header from './components/Header';
import Links from "./components/Links";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default function App() {
    return (
        <>
            <Image />
            <div className="app">
                <div>
                    <Header />
                </div>
                <div>
                    <Links />
                </div>    
                <div>
                    <Main />
                </div>
                <div>
                    <Footer />
                </div>
            </div>    
        </>
    )
}
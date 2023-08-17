import Footer from '../../Components/FooterContainer'
import Navbar from '../../Components/Navbar/Navbar'
import Newsfeed from '../../Components/Newsfeed/Newsfeed';
import Rightbar from '../../Components/Rightbar/Rightbar';
import Sidebar from '../../Components/sidebar/Sidebar'
import  './home.scss'


export default function Home() {
  return (
    <>
    <Navbar/>

    <div className="homeContainer flex w-full ">

    <Sidebar/>
    <Newsfeed/>
    <Rightbar/>

    </div>
      <Footer/>
    </>
  );
}

import {Navbar,Hero,Footer,Testmonials,About} from '../../components/homepage'

export default function Home() {
  return(
    <div className="w-full overflow-hidden">
      <div >
        <div >
          <Navbar/>
        </div>
      </div>
      <div >
        <div id="home">
          <Hero/>
        </div>
      </div>
      <div id="sobre">
        <About/>
      </div>
      <div id="contato">
        <Footer/>
      </div>
    </div>
  );
}

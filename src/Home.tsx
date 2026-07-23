import Hero from "./components/Hero";
import About from "./components/About";
function Home(){
    return(
      
        <div className="bg-pink-50 min-h-screen w-full">
             <Hero />
             <About />
        </div>
       
      
    )
}
export default Home;
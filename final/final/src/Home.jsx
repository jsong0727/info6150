import './Home.css';
import mountainview from './image/vail.JPG';





function Home(){
    
    return(
        <div className="main_home">
            <img className='image' src={mountainview}/> 
            
            <p1 className="text">Things to know before snowboarding...</p1>        
        </div>
      
    );
}
export default Home;
    


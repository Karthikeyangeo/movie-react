import homeImg from './images/homepage_image.jpg'
export function Homepage(){
    const imageSrc = 'https://thumbs.dreamstime.com/b/cinema-movies-cartoons-black-white-equipment-vector-illustration-graphic-design-145368762.jpg';
    return(
        <div>
           
            <div className="home-page-content">
                <h1><span className="font-link homepageHeader">Welcome to the movie App </span></h1>    
                < img className={"homepageLogo"} alt={"SignUp Logo"} src={homeImg} />  
            </div>
        </div>
        
    )
}



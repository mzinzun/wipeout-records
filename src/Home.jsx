import { Link } from 'react-router-dom'
import QandA from "./QandA";
import './App.css';

function Home() {
    return (
        <>
            <div className="home row justify-content-around align-items-center">
                <blockquote className="blockquote col-md-7">
                    <span>
                        <h3>I am Misty Oliver... Expungement Specialist!</h3>
                    </span>
                    I would like to help anyone get their 2nd chance without breaking you to do so.  Most of us have done our time, building ourselves back up and might even still be struggling. I am your gal that has the experience, knowledge and willingness to help you.  I am not an attorney so attorney advice I can not give.  But I can give experience, opinion, and the individual help you need.
                </blockquote>
                <section className='homeImg col-4 p-4'>
                    <img className='img img-fluid px-4'  src="./assets/misty2.jpg" alt="legal" />
                </section>
            </div>
            <div className="home row justify-content-around align-items-center">
                <section className='homeImg col-4'>
                    <img className='img img-fluid' src="./assets/photo1.jpg" alt="legal" />
                </section>
                <blockquote className="blockquote col-md-7">
                    I'll start with learning about you and your background.  I have to be sure you're eligible by law.  I will follow up with what I find and give you a quote.  This quote will include the filing fee for each county ($162) plus my fees for drawing up your documents needed to file. I'm certified to efile your documents into the Indiana courts.  Once I file, I will follow up with you with a cause #, we will wait for the prosecutor advisement or a granted order from the judge.  And then YOU WILL BE FREE OF YOUR BACKGROUND!
                </blockquote>
            </div >
            <div className="row justify-content-center box-shadow p-5"><Link to='/contact' className="btn bg-warning border col-md-3">Ready To Get Started?<span className="text-primary"><b>Click Here</b></span></Link></div>
            <QandA />
        </>

    )
}
export default Home

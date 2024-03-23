import { Link } from 'react-router-dom'
import QandA from "./QandA";
import './App.css';

function Home() {
    return (
        <>
            <div className="home row justify-content-around align-items-center">
                <blockquote className="blockquote col-md-7">
                    <span>
                        <h3>I am Misty Oliver... your Expungement Specialist!</h3>
                    </span>
                    If you are from Indiana and need an expungement, I am your gal.  We need the 2nd chance and this law was put into place FOR US!   I have the experience, knowledge, and willingness to help you get YOUR LIFE BACK.  We all have struggled finding a good job or a decent place to live due to our past.  Although I am NOT an attorney and can't give attorney advice, I can give you advice on my own experience from other clients and what I have witnessed happen to others filing for an expungement successfully.  My knowledge is helpful to get you FREE OF YOUR PAST!! So why not hire me and pay my cheaper fees rather than those ATTORNEY FEES??
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
                To begin, I will need to learn about YOU and your criminal background.  I need to be sure that you are even eligible per the law requirements.  I will then follow up with you on what I found, quote you my fees PLUS the fees to e-file them within the Indiana courts (most counties charge $162).  I am certified to e-file your documents, by the way (another perk to hiring this gal)! When you decide to hire me, I will then type your documents needed, e-file them, and follow up with you with a cause # representing the XPungment.   We will wait for either a prosecutor's objection or 45 day permission to evaluate the facts, normally once those are complete it is put on the judges desk to sign the order.  Please NOTE there are times that the judge will ask for a hearing ( this rarely happens but could), be prepared to represent YOURSELF, this filing is considered pro se.
And FINALLY, YOU WILL BE FREE OF YOUR BACKGROUND!
                </blockquote>
            </div >
            <div className="row justify-content-center box-shadow p-5"><Link to='/contact' className="btn bg-warning border col-md-3">Ready To Get Started?<span className="text-primary"><b>Click Here</b></span></Link></div>
            <QandA />
        </>

    )
}
export default Home

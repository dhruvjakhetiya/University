import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import prev_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"
import { useRef } from "react"
const Testimonials = () => {

    const slider = useRef() //this is used to to select ul element

    let tx = 0  //initial value will change it when clicked

    const slideForward = () => {
        if (tx > -50) {
            tx -=25;
        }

        slider.current.style.transform =`translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx +=25;
        }

        slider.current.style.transform =`translateX(${tx}%)`
    }


    return (
        <div className="testimonials">
            <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
            <img src={prev_icon} alt="" className="back-btn" onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Abella Noyle</h3>
                                    <span>blurb, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at blurb was one of the best decisions I've ever made
                                . The supportive community, state-of-art facilities, and commitment at academic excellence
                                  have truly exceeded my expectations. 
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Rachin Bansal</h3>
                                    <span>blurb, USA</span>
                                </div>
                            </div>
                            <p>As an international student, I was initially apprehensive about studying abroad. However, the warm welcome and support I received from the faculty and staff at blurb quickly put my worries to rest. The multicultural environment has broadened my perspectives and enriched my learning experience in ways I never imagined.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Amanda Cristina</h3>
                                    <span>blurb, USA</span>
                                </div>
                            </div>
                            <p>Choosing to enroll at blurb was one of the best decisions I've made. The small class sizes allowed for personalized attention, fostering a sense of community and collaboration among peers. I've not only grown academically but have also formed lasting friendships and valuable connections.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Joan Mata</h3>
                                    <span>blurb, USA</span>
                                </div>
                            </div>
                            <p>I've had the privilege of being a student at blurb for the past four years, and I can honestly say it has been a transformative journey. From innovative teaching methods to hands-on learning opportunities, every aspect of my education here has contributed to my personal and professional growth. I'm proud to be an alum of such a prestigious institution.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
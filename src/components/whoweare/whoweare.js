
import IconCard from '../iconcard/iconcard';
import css from './whoweare.module.css';
import abShape from '../../assets/ab-shape-img.png';
import j0aonlb9 from '../../assets/j0aonlb9.png';
import Button from '../button/button';

const cardData = [
    {
        number: "70",
        heading: "Professional Experts"
    },
    {
        number: "20",
        heading: "Customers"
    },
    {
        number: "65",
        heading: "Years of History"
    },
]

const visonDetail = [
    {
        heading: "Our Mission",
        subHeading: "At Apollo Automation, our mission is to disrupt industries with  technology, creating an intelligent and efficient future through the  fusion of artificial intelligence and robotics. With tailored solutions  in industrial automation, IoT devices, robotics, automated conveyors,  and tailored applications,"
    },
    {
        heading: "Our Vision",
        subHeading: "we proudly spearhead innovation, driving the global transformation of  industries. Our passion revolves around crafting solutions that  seamlessly integrate intelligent automation into everyday workflows,  elevating productivity, and generating revenue for our partners."
    },
]

function WhoWeAre() {
    return (
        <div className={css.whoWeAreWrapper}>
            <div className={css.leftWrapper}>
                <div className={css.arrowHeading}>
                    Who We Are
                    <IconCard type="rightarrow" />
                </div>
                <div className={css.gradientCard}>
                    {cardData.map((item, i) => {
                        return (
                            <div className={css.card}>
                                <h1>{item.number} <span>+</span></h1>
                                <p>{item.heading}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={css.rightWrapper}>
                <div className={css.visionHeading}>
                    <span>
                        <img src={abShape} />
                    </span>
                    <h1>
                        Your Vision, Our Technology Building a Smarter Future
                    </h1>
                </div>
                <div className={css.visionDetails}>
                    <div className={css.leftImage}>
                        <img src={j0aonlb9} />
                    </div>
                    <div className={css.rightCard}>
                        <div>
                            {visonDetail.map((item, i) => {
                                return (
                                    <div className={css.cardBox}>
                                        <h4>{item.heading}</h4>
                                        <p>{item.subHeading}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <Button name="READ MORE" className={css.readMoreButton} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default WhoWeAre;

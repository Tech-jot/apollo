import IconCard from '../iconcard/iconcard';
import css from './keyservices.module.css'

const servicesCard = [
    {
        icon: <IconCard type="automation" />,
        heading: "Industrial Automation",
        subHeading: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
        icon: <IconCard type="robotics" />,
        heading: "Robotics",
        subHeading: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
        icon: <IconCard type="conveyors" />,
        heading: "Conveyors",
        subHeading: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
        icon: <IconCard type="iot" />,
        heading: "IoT solutions",
        subHeading: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
        icon: <IconCard type="customsolution" />,
        heading: "Custom Solutions",
        subHeading: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
        icon: <IconCard type="cunsultant" />,
        heading: "Consulting Services",
        subHeading: "Lorem Ipsum is simply dummy text of the printing"
    },
]

function KeyServices() {
    return (
        <div className={css.servicesBox}>
            <div className={css.servicesInner}>
                <div className={css.servicesInnerBox}>
                    <div className={css.servicesLeftBox}>
                        <div className={css.servicesHeading}>
                            Key Services
                            <IconCard type="rightarrow" />
                        </div>
                        <div className={css.overviewHeading}>
                            <h2>Overview of main services offered</h2>
                            <p>
                                At Apollo Cybersecurity, innovation is engrained in our DNA. Our  automation and AI experts develop industry-disrupting technologies  tailored to your organization's goals.
                            </p>
                        </div>
                    </div>
                    <div className={css.servicesRightBox}>
                        {servicesCard.map((item, i) => {
                            return (
                                <div className={css.servicesCard}>
                                    <div className={css.servicesIcon}>
                                        {item.icon}
                                    </div>
                                    <div className={css.servicesDetail}>
                                        <h3>{item.heading}</h3>
                                        <p>{item.subHeading}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KeyServices;

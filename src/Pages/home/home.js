import HeroSlider from '../../components/heroslider/heroslider';
import KeyServices from '../../components/keyservices/keyservices';
import WhoWeAre from '../../components/whoweare/whoweare';
import css from './home.module.css'
function Home() {
    return (
        <div>
            <HeroSlider />
            <WhoWeAre />
            <KeyServices />
        </div>
    );
}

export default Home;

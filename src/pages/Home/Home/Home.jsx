import SharedTitle from "../../../sharedComponents/SharedTitle/SectionTitle";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommend from "../Recommend/Recommend";
import Testimonials from "../Testimonials/Testimonials";
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <BistroBoss></BistroBoss>
           <Recommend></Recommend>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
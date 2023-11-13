import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import chef from '../../../assets/home/chef-service.jpg'
import BistroBossParallax from "../BistroBossParallax/BistroBossParallax";
import MenuCategory from "../../../sharedComponents/MenuCategory/MenuCategory";
import useMenuItems from "../../../hooks/useMenuItems";
import FoodItems from "../../../sharedComponents/FoodItems/FoodItems";
import SectionTitle from "../../../sharedComponents/SharedTitle/SectionTitle";
const Home = () => {
    const [menus] = useMenuItems()
    const populars = menus.filter(item => item.category == 'popular')
    console.log(populars)
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <BistroBossParallax parallaxTitle="Bistro Boss" parallaxImg={chef} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."></BistroBossParallax>
           <SectionTitle subHeading="From Our Menu" heading="Popular Items"></SectionTitle>
           <MenuCategory items={populars}  location="/menu" buttonText="View Full Menu"></MenuCategory>
           <FoodItems count={3}></FoodItems>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
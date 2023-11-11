import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import category1 from '../../../assets/menu/slide1.jpg'
import category2 from '../../../assets/menu/slide2.jpg'
import category3 from '../../../assets/menu/slide3.jpg'
import category4 from '../../../assets/menu/slide4.jpg'
import category5 from '../../../assets/menu/slide5.jpg'

import { Pagination } from 'swiper/modules';
import SharedTitle from "../../../sharedComponents/SharedTitle/SharedTitle";

const Category = () => {

    return (
        <div>
            <SharedTitle subHeading={"From 11:00am to 10:00pm"} heading={"ORDER ONLINE"}></SharedTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={category1} alt="" />
                    <h2 className="text-xs md:text-2xl lg:text-2xl uppercase text-center text-white -mt-4 md:-mt-28 lg:-mt-28">Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category2} alt="" />
                    <h2 className="text-xs md:text-2xl lg:text-2xl uppercase text-center text-white -mt-4 md:-mt-28 lg:-mt-28">Soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category3} alt="" />
                    <h2 className="text-xs md:text-2xl lg:text-2xl uppercase text-center text-white -mt-4 md:-mt-28 lg:-mt-28">Pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category4} alt="" />
                    <h2 className="text-xs md:text-2xl lg:text-2xl uppercase text-center text-white -mt-4 md:-mt-28 lg:-mt-28">Desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category5} alt="" />
                    <h2 className="text-xs md:text-2xl lg:text-2xl uppercase text-center text-white -mt-4 md:-mt-28 lg:-mt-28">Desserts</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
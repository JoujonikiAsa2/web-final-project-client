import SectionTitle from "../../../sharedComponents/SharedTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
const Featured = () => {
    return (
        <div style={{
            backgroundImage: `url(${featuredImg})`,
            height: "600px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        }} className="text-white my-12"
        >
            <div  className="py-4 bg-opacity-50 bg-black h-[600px] z-10">
                <SectionTitle subHeading="Check it out" heading="Featured Items"></SectionTitle>
                <div className="flex flex-row justify-center items-center lg:py-12 lg:px-36 px-8 gap-6 md:gap-10 lg:gap-10">
                    <div>
                        <img src={featuredImg} alt="" className=""/>
                    </div>
                    <div className="">
                        <p className="text-lg py-4">Aug 20, 2029</p>
                        <p className="text-xs">Where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, autem perferendis. Possimus, aliquid esse quas nobis placeat beatae? Ex aperiam exercitationem beatae at hic, nisi velit nihil magni officiis qui quaerat cum, nostrum alias voluptas ipsa temporibus a, quasi quas. Voluptate corrupti rerum illum recusandae eaque aliquam, nemo error neque.</p>
                        <button className="btn btn-outline border-0 border-b-4  border-white text-white my-4 ">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
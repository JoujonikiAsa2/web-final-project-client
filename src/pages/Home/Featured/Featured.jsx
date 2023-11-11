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
            <div  className="py-4 bg-opacity-50 bg-black h-[600px]">
                <SectionTitle subHeading="Check it out" heading="Featured Items"></SectionTitle>
                <div className="flex flex-col md:flex-row justify-center items-center py-12 px-36 gap-10">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="">
                        <p className="text-lg">Aug 20, 2029</p>
                        <p className="text-lg">Where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, autem perferendis. Possimus, aliquid esse quas nobis placeat beatae? Ex aperiam exercitationem beatae at hic, nisi velit nihil magni officiis qui quaerat cum, nostrum alias voluptas ipsa temporibus a, quasi quas. Voluptate corrupti rerum illum recusandae eaque aliquam, nemo error neque.</p>
                        <button className="btn btn-outline border-0 border-b-4  border-white text-white my-4 ">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
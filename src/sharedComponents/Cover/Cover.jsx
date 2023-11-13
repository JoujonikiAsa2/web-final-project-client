import banner from '../../assets/shop/banner2.jpg'
const Banner = () => {
    return (
        <div className='relative'>
            <div style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "700px"
            }}>
            </div>
            <div className='w-[800px] absolute bottom-[20rem] left-[15rem] text-center text-white'>
                <h2 className='text-8xl'>Our Shop</h2>
               <p>Would you like to try a dish?</p>
            </div>

        </div>
    );
};

export default Banner;
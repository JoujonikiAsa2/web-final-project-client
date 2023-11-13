import chefService from '../../../assets/home/chef-service.jpg'
const BistroBoss = () => {
    return (
        <div className='relative' style={{
            backgroundImage: `url(${chefService})`,
            height: "400px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        }}>
            <div className=' h-[100px]'></div>
            < div className=' flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center bg-white text-center -w-[320px] md:w-[600px] lg:w-[900px] h-[200px]'>
                    <h2 className='text-2xl'>Bistro Boss</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;
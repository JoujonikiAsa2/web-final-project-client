const Cover = ({ img, bannerTitle, bannerDetails }) => {
    return (
        <div className="hero h-[700px]" style={{ backgroundImage: `url(${img})` }}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content bg-black bg-opacity-50 w-[320px] h-[200px] md:w-[500px] lg:w-[900px]">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold crinzel">{bannerTitle}</h1>
                    <p className="mb-5">{bannerDetails}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;
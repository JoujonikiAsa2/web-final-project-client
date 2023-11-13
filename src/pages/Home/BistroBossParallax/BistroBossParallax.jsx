import { Parallax } from 'react-parallax';
const BistroBossParallax = ({ parallaxImg, parallaxTitle, description }) => {
    const insideStyles = {
        background: "black",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        
    };
    return (
        <Parallax bgImage={parallaxImg} strength={500}>
            <div style={{ height: 500 }}>
                <div style={insideStyles} className='text-center opacity-50 text-white'>
                    <h2 className='crinzel text-3xl font-semibold'>{parallaxTitle}</h2>
                    <p className='inter'>{description}</p>
                </div>
            </div>
        </Parallax>
    );
};

export default BistroBossParallax;
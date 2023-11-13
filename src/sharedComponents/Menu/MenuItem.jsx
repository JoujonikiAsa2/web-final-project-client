const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item
    return (
        <div className="flex flex-col lg:flex-row md:flex-row space-x-4">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-[#151515] text-xl">{name}----------</h3>
                <p className="text-base">{recipe}</p>
            </div>
            <p className="text-[#D99904]">{price}</p>
        </div>
    );
};

export default MenuItem;
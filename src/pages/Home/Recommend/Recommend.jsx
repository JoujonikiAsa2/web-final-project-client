import { useState } from "react";
import SectionTitle from "../../../sharedComponents/SharedTitle/SectionTitle";
import Menu from "../../../sharedComponents/ShopItems/Menu";
import useShopItems from "../../../sharedComponents/ShopItems/useShopItems";

const Recommend = () => {
    const shopItems = useShopItems()
    // const [showAll, setShowAll] = useState(3)
    // const length = shopItems.length
    // console.log(shopItems)
    return (
        <div className="">
            <div>
                <SectionTitle subHeading="Should try" heading="CHEF RECOMMENDS"></SectionTitle>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center justify-items-center items-center gap-10">
                {
                shopItems.slice(0,3).map(item => <Menu key={item._id} item={item}></Menu>)
                }
            </div>
            {/* <div className={`${ showAll===shopItems.length ? "hidden" : "flex justify-center items-center py-4"} `}>
                <button className="btn btn-outline border-0 border-b-4 border-orange-400 capitalize" onClick={()=>setShowAll(shopItems.length)}>Show More</button>
            </div>
            <div className={`${ showAll===shopItems.length ? "flex justify-center items-center py-4" : "hidden"} `}>
                <button className="btn btn-outline border-0 border-b-4 border-orange-400 capitalize" onClick={()=>setShowAll(3)}>Show Less</button>
            </div> */}
        </div>
    );
};

export default Recommend;
import { useState } from "react";
import Food from "../Food/Food";
import useMenuItems from "../../hooks/useMenuItems";
import SectionTitle from "../SharedTitle/SectionTitle";
import Button from "../Button/Button";

const FoodItems = ({count}) => {
    const [menus] = useMenuItems()
    console.log(menus)
    return (
        <div className="">
            <div>
                <SectionTitle subHeading="Should try" heading="CHEF RECOMMENDS"></SectionTitle>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center justify-items-center items-center gap-10">
                {
                menus.slice(0,3).map(item => <Food key={item._id} item={item}></Food>)
                }
            </div>
        </div>
    );
};

export default FoodItems;
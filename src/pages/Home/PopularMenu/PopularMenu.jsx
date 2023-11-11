import { useState } from "react";
import SectionTitle from "../../../sharedComponents/SharedTitle/SectionTitle";
import MenuItem from "../../../sharedComponents/Menu/MenuItem";

const PopularMenu = () => {
    const [menus, setMenu] = useState([])
    fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            const popularItems = data.filter(item=> item.category === 'popular')
            setMenu(popularItems)
            // console.log(popularItems)
        })
    return (
        <section className="mb-4">
            <SectionTitle subHeading="From Our Menu" heading="Popular Items"></SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    menus.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
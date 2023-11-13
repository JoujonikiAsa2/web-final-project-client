import { setItem } from "localforage";
import { useEffect, useState } from "react";
import Menu from "./Menu";

const useShopItems = () => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[items])
    return items
};

export default useShopItems;
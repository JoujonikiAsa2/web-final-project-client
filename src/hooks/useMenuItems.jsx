import React, { useEffect, useState } from 'react';

const useMenuItems = () => {
    const [menus, setMenus] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [counts, setCounts] = useState()
    const [itemPerPage,setItemPerPage] = useState(6)
    const pages = Math.ceil(counts/itemPerPage)

    useEffect(() => {
        fetch(`http://localhost:5001/menus?page=${pages}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => {
                setMenus(data)
                setIsLoading(false)
            })
    }, [pages,itemPerPage])
    return [menus,isLoading]

    
};

export default useMenuItems;
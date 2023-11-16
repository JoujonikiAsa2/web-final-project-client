import React, { useEffect, useState } from 'react';

const useMenuItems = () => {
    const [menus, setMenus] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5001/menus`)
            .then(res => res.json())
            .then(data => {
                setMenus(data)
                setIsLoading(false)
            })
    },[])
    return [menus,isLoading]

    
};

export default useMenuItems;
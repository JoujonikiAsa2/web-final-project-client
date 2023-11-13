import React, { useEffect, useState } from 'react';

const useMenuItems = () => {
    const [menus, setMenus] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                setMenus(data)
                setIsLoading(false)
            })
    }, [])
    return [menus,isLoading]
};

export default useMenuItems;
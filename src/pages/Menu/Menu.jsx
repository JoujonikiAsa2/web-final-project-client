import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../sharedComponents/Cover/Cover';
import img from '../../assets/menu/banner3.jpg'
import useMenuItems from '../../hooks/useMenuItems';
import BistroBossParallax from '../Home/BistroBossParallax/BistroBossParallax';
import chef from '../../assets/home/chef-service.jpg'
import SectionTitle from '../../sharedComponents/SharedTitle/SectionTitle';
import MenuCategory from '../../sharedComponents/MenuCategory/MenuCategory';
const Menu = () => {
    const [menus, isLoading] = useMenuItems()
    const offered = menus.filter(item => item.category == 'offered')
    const desserts = menus.filter(item => item.category == 'dessert')
    const pizza = menus.filter(item => item.category == 'pizza')
    const salads = menus.filter(item => item.category == 'salad')
    const soups = menus.filter(item => item.category == 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss Menu</title>
            </Helmet>
            <Cover img={img} bannerTitle="Our Menu" bannerDetails="Would you like to try a dish?"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's  Offer"></SectionTitle>
            <MenuCategory items={offered} buttonText="Order your favorite foods"></MenuCategory>
            <MenuCategory items={desserts} buttonText="Order your favorite foods" title="Desserts" img={chef} details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."></MenuCategory>
            <MenuCategory items={pizza} buttonText="Order your favorite foods" title="Pizza" img={chef} details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."></MenuCategory>
            <MenuCategory items={salads} buttonText="Order your favorite foods" title="Salads" img={chef} details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."></MenuCategory>
            <MenuCategory items={soups} buttonText="Order your favorite foods" title="Soups" img={chef} details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."></MenuCategory>

        </div>
    );
};

export default Menu;
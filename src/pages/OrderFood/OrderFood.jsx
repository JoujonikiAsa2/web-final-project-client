import React, { useContext, useState } from 'react';
import Cover from '../../sharedComponents/Cover/Cover';
import img from '../../assets/shop/banner2.jpg'
import useMenuItems from '../../hooks/useMenuItems';
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import OrderTab from '../../sharedComponents/OrderTab/OrderTab';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Loading from '../../sharedComponents/Loading/Loading';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const OrderFood = () => {
    const {loading} = useContext(AuthContext)
    const categories = ["salad", "pizza", "soup", "dessert", "drinks","offered"]
    const {category} = useParams()
    console.log(category)
    const [menus,isLoading] = useMenuItems()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(category ? initialIndex : 0); //helps to load data for /orderFood routes and orderfood/:category routes

    const desserts = menus.filter(item => item.category == 'dessert')
    const pizza = menus.filter(item => item.category == 'pizza')
    const salads = menus.filter(item => item.category == 'salad')
    const soups = menus.filter(item => item.category == 'soup')
    const drinks = menus.filter(item => item.category == 'drinks')
    const offered = menus.filter(item => item.category == 'offered')

    if(loading){
        return <Loading></Loading>
    }
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <Helmet>
                <title>Order Food | Home</title>
            </Helmet>
            <Cover img={img} bannerTitle='Our Shop' bannerDetails="Would you like to try a dish?"></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="">
                <TabList>
                    <Tab>Salads</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Offered</Tab>
                </TabList>
                <TabPanel><OrderTab items={salads}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={soups}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={desserts}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={offered}></OrderTab></TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderFood;
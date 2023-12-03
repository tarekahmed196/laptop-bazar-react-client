import React, { useState } from "react";
import orderImg from "../../images/dell.jpg";
import Cover from "../Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProducts from "../../hooks/useProducts";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['hp', 'dell', 'asus', 'samsung', 'mac'];
    const {category} = useParams(); //category wise tab selection
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [products] = useProducts();
    

    const hp = products.filter(product=> product.category === 'hp');
    const dell = products.filter(product=> product.category === 'dell');
    const asus = products.filter(product=> product.category === 'asus');
    const samsung = products.filter(product=> product.category === 'samsung');
    const mac = products.filter(product=> product.category === 'mac');
  return (
    <div>
        <Helmet>
            <title>Laptop Bazar | Order Laptop</title>
        </Helmet>
      <Cover img={orderImg} title={"Order Your Laptop"}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>HP</Tab>
          <Tab>Dell</Tab>
          <Tab>Asus</Tab>
          <Tab>Samsung</Tab>
          <Tab>MAC</Tab>
        </TabList>
        <TabPanel>
            <OrderTab items={hp}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={dell}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={asus}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={samsung}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={mac}></OrderTab>
        </TabPanel>
        
        
      </Tabs>
    </div>
  );
};

export default Order;

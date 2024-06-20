import React, { useState, useEffect } from 'react';
import ProductForm from './components/product/ProductForm';
import ProductList from './components/product/ProductList';
import CustomerForm from './components/customer/CustomerForm';
import CustomerList from './components/customer/CustomerList';
import OrderForm from './components/order/OrderForm';
import OrderList from './components/order/OrderList';
import { Container, Typography } from '@mui/material';

const App = () => {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products'));
    if (savedProducts) {
      setProducts(savedProducts);
    }

    const savedCustomers = JSON.parse(localStorage.getItem('customers'));
    if (savedCustomers) {
      setCustomers(savedCustomers);
    }

    const savedOrders = JSON.parse(localStorage.getItem('orders'));
    if (savedOrders) {
      setOrders(savedOrders);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('customers', JSON.stringify(customers));
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [products, customers, orders]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const addCustomer = (customer) => {
    setCustomers([...customers, customer]);
  };

  const deleteCustomer = (index) => {
    setCustomers(customers.filter((_, i) => i !== index));
  };

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const deleteOrder = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <br/>
      <Typography variant="h4">Product Management</Typography>
      <br/>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
      <br/>

      <Typography variant="h4">Customer Management</Typography>
      <br/>
      <CustomerForm addCustomer={addCustomer} />
      <CustomerList customers={customers} deleteCustomer={deleteCustomer} />
      <br/>

      <Typography variant="h4">Order Management</Typography>
      <br/>
      <OrderForm addOrder={addOrder} products={products} customers={customers} />
      <OrderList orders={orders} deleteOrder={deleteOrder} />
    </Container>
  );
};

export default App;
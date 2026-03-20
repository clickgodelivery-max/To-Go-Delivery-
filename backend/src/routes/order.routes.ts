import express from 'express';
import { createOrder, updateOrderStatus, assignDriver } from '../controllers/order.controller';

const router = express.Router();

// Route for creating an order
router.post('/orders', createOrder);

// Route for updating order status
router.patch('/orders/:id/status', updateOrderStatus);

// Route for assigning a driver to an order
router.patch('/orders/:id/assign-driver', assignDriver);

export default router;
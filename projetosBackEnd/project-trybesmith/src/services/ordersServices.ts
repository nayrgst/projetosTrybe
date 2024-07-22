import orderModel from '../models/orderModel';

const productService = {

  async listAllOrders() {
    const items = await orderModel.listAllOrders();
    return items;
  }, 
};

export default productService;
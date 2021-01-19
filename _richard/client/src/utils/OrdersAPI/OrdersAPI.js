import axios from 'axios'

const OrdersAPI = {
  createOrders: (orders) => axios.post('/api/orders', orders),
}

export default OrdersAPI

import axios from 'axios'

const OrderAPI = {
  createOrder: (order) => axios.post('/api/orders', order),
}

export default OrderAPI

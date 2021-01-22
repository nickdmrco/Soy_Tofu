import axios from 'axios'

const FoodAPI = {
 getFoods: () => axios.get('/api/foods'),
}

export default FoodAPI
import axios from 'axios'

const ConfigAPI = {
  getCatagories: () => axios.get('/api/catagories'),
}

export default ConfigAPI

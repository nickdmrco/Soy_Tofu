import axios from 'axios'

const ConfigAPI = {
  getConfig: () => axios.get('/api/config'),
}

export default ConfigAPI

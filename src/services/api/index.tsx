import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
const BACKEND_URL = 'http://localhost:8081'

export const MOCK_API = axios.create({
  baseURL: BASE_URL,
})

export const API = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'content-Type': 'application/json',
  },
})

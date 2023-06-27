import axios from 'axios';

export const getAuthenticatedUser = async () => {
  try {
    const response = await axios.get("/api/v2/users/me")
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return undefined
    }

    throw error
  }
}
import axios from 'axios'
import API from '.'

export const handleGetUser = async (): Promise<unknown> => {
  try {
    axios
      .get(API.user, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data?.user)
      .catch((error) => error)
  } catch (error) {
    return error
  }
}

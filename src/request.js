import axios from 'axios';
const apiUrl = 'https://api.github.com/users';

export function getProfileData(username) {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios.get(`${apiUrl}/${username}`)
    resolve(data);
  })
}

export default {
  getProfileData
}

import axios from 'axios'

export const GetFetchQuotes = async (apiConfig) => {
  console.log('GET apiConfig', apiConfig)
  try {
    return await axios.get(apiConfig.uri).then((resolve) => {
      if (resolve.status === 200) {
        console.log(`${resolve.status}: ${apiConfig.msg} request success`)
        return resolve
      } else {
        console.log(`${resolve.status}: ${apiConfig.msg} request failed`)
        return
      }
    })
  } catch (err) {
    console.log(err.response)
    return err.response
  }
}

export const PostFetchQuotes = async (apiConfig) => {
  console.log('POST apiConfig', apiConfig)
  try {
    return await axios.post(apiConfig.uri, apiConfig.body).then((resolve) => {
      if (resolve.status === 200) {
        console.log(`${resolve.status}: ${apiConfig.msg} request success`)
        return resolve
      } else {
        console.log(`${resolve.status}: ${apiConfig.msg} request failed`)
        return
      }
    })
  } catch (err) {
    console.log(err.response)
    return err.response
  }
}


export const PutFetchQuotes = async (apiConfig) => {
  console.log('PUT apiConfig', apiConfig)
  try {
    return await axios.put(apiConfig.uri, apiConfig.body).then((resolve) => {
      if (resolve.status === 200) {
        console.log(`${resolve.status}: ${apiConfig.msg} update success`)
        return resolve
      } else {
        console.log(`${resolve.status}: ${apiConfig.msg} update failed`)
        return
      }
    })
  } catch (err) {
    console.log(err.response)
    return err.response
  }
}

export const DeleteFetchQuotes = async (apiConfig) => {
  console.log('PUT apiConfig', apiConfig)
  try {
    return await axios.delete(apiConfig.uri, apiConfig.body).then((resolve) => {
      if (resolve.status === 200) {
        console.log(`${resolve.status}: ${apiConfig.msg} update success`)
        return resolve
      } else {
        console.log(`${resolve.status}: ${apiConfig.msg} update failed`)
        return
      }
    })
  } catch (err) {
    console.log(err.response)
    return err.response
  }
}
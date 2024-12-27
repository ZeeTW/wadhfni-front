import Client from './api'




export const SignUpUser = async (data) => {
try {
    const res = await Client.post('/auth/SignUp', data)
    return res.data
} catch (error) {
    throw error
}
}



export const SignInUser = async (data) => {
try {
    const res = await Client.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
} catch (error) {
    throw error
}
}


export const CheckSession = async () => {
try {
    const res = await Client.get('/auth/session')
    return res.data
} catch (error) {
    throw error
}
}

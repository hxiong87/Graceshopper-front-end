const BASE_URL = 'https://graceshopper-0xzy.onrender.com/'

//Post /users/register
export async function registerUser(credentials) {
    console.log(credentials)
    const {email, password} = credentials.user
    console.log("AAAAAAAAA", email, password)
    try {
    const response = await fetch(`${BASE_URL}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: email,
          password: password
      })
    })
        const result = await response.json()
        console.log(result)
        if (result.error === "Duplicate Username") {
          window.alert("Username is already taken")
        }
        if (result.error === "Short password") {
          window.alert("Password Too Short")
        }
        return result
      } catch (error) {
        console.log(error)
      }
  }

// Post /user/login
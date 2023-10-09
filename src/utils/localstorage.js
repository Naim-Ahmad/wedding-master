const getUserData = () => {
    const userData = localStorage.getItem('userData')
    if (userData) {
        return JSON.parse(userData);
    }
    return []
} 

const setUserData = (data) => {
    const prevData = getUserData()
    const currentData = [...prevData, data]
    const jsonString = JSON.stringify(currentData)
    localStorage.setItem('userData', jsonString)
}

export { getUserData, setUserData };

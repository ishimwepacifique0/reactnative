const validateForm = () => {
    let valid = true

    // Validate email
    if (!email.trim()) {
        setEmailError('Email is required')
        valid = false
    } else if (!isValidEmail(email)) {
        setEmailError('Invalid email format')
        valid = false
    } else {
        setEmailError('')
    }
    // Validate password
    if (!password.trim()) {
        setPasswordError('Password is required')
        valid = false
    }else if(password.length < 8) {
        setPasswordError('Password character is not a multiple of 8 characters')
        valid = false
    }
     else {
        setPasswordError('')
    }

    return valid
}

const handleSubmit = () => {
    if (validateForm()) {
        console.log('Form submitted:', email, password)
    }
}

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}
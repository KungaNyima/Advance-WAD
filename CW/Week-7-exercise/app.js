// ============================================
// HELPER FUNCTIONS (Used across all forms)
// ============================================

// Helper function to show error messages
function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
    input.classList.add('invalid');
    input.classList.remove('valid');
}

// Helper function to clear error messages
function clearError(input) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = '';
    input.classList.remove('invalid');
    input.classList.add('valid');
}

// Helper to show success message
function showSuccess(formId) {
    const successDiv = document.getElementById('success' + formId);
    successDiv.style.display = 'block';
    setTimeout(() => {
        successDiv.style.display = 'none';
    }, 3000);
}

// ============================================
// FORM 1: HTML5 Basic Validation
// Demonstrates: required attribute, type="email"
// ============================================

const form1 = document.getElementById('form1');
const name1 = document.getElementById('name1');
const email1 = document.getElementById('email1');

form1.addEventListener('submit', function (e) {
    e.preventDefault();

    // HTML5 validation happens automatically
    // We just show success if validation passes
    if (form1.checkValidity()) {
        console.log('Form 1 submitted:', { name: name1.value, email: email1.value });
        showSuccess('1');
        setTimeout(() => form1.reset(), 2000);
    }
});

// ============================================
// FORM 2: Pattern Validation
// Demonstrates: regex pattern attribute
// ============================================

const form2 = document.getElementById('form2');
const username2 = document.getElementById('username2');
const zipcode2 = document.getElementById('zipcode2');

function validateUsername2() {
    const value = username2.value.trim();
    const pattern = /^[A-Za-z0-9_]{3,15}$/;
    // email regex ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$

    if (value === '') {
        showError(username2, 'Username is required');
        return false;
    } else if (!pattern.test(value)) {
        showError(username2, 'Username: 3-15 chars, letters/numbers/underscore only');
        return false;
    } else {
        clearError(username2);
        return true;
    }
}

function validateZipcode2() {
    const value = zipcode2.value.trim();
    const pattern = /^\d{5}$/;

    if (value === '') {
        showError(zipcode2, 'Zip code is required');
        return false;
    } else if (!pattern.test(value)) {
        showError(zipcode2, 'Zip code must be 5 digits');
        return false;
    } else {
        clearError(zipcode2);
        return true;
    }
}

username2.addEventListener('blur', validateUsername2);
zipcode2.addEventListener('blur', validateZipcode2);

form2.addEventListener('submit', function (e) {
    e.preventDefault();

    const isValid = validateUsername2() && validateZipcode2();

    if (isValid) {
        console.log('Form 2 submitted:', { username: username2.value, zipcode: zipcode2.value });
        showSuccess('2');
        setTimeout(() => {
            form2.reset();
            clearError(username2);
            clearError(zipcode2);
        }, 2000);
    }
});

// ============================================
// FORM 3: Password Strength Check
// Demonstrates: Custom JavaScript validation logic
// ============================================

const form3 = document.getElementById('form3');
const password3 = document.getElementById('password3');
const confirmPass3 = document.getElementById('confirmPass3');

function validatePassword3() {
    const value = password3.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);

    if (value === '') {
        showError(password3, 'Password is required');
        return false;
    } else if (value.length < 8) {
        showError(password3, 'Password must be at least 8 characters');
        return false;
    } else if (!hasUpperCase || !hasLowerCase || !hasNumber) {
        showError(password3, 'Must include uppercase, lowercase, and number');
        return false;
    } else {
        clearError(password3);
        return true;
    }
}

function validateConfirmPass3() {
    const value = confirmPass3.value;

    if (value === '') {
        showError(confirmPass3, 'Please confirm your password');
        return false;
    } else if (value !== password3.value) {
        showError(confirmPass3, 'Passwords do not match');
        return false;
    } else {
        clearError(confirmPass3);
        return true;
    }
}

password3.addEventListener('blur', validatePassword3);
confirmPass3.addEventListener('blur', validateConfirmPass3);

form3.addEventListener('submit', function (e) {
    e.preventDefault();

    const isValid = validatePassword3() && validateConfirmPass3();

    if (isValid) {
        console.log('Form 3 submitted: Password validated successfully');
        showSuccess('3');
        setTimeout(() => {
            form3.reset();
            clearError(password3);
            clearError(confirmPass3);
        }, 2000);
    }
});

// ============================================
// FORM 4: Real-time Validation
// Demonstrates: Instant feedback on 'input' event
// ============================================

const form4 = document.getElementById('form4');
const email4 = document.getElementById('email4');
const phone4 = document.getElementById('phone4');

function validateEmail4() {
    const value = email4.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === '') {
        showError(email4, 'Email is required');
        return false;
    } else if (!emailRegex.test(value)) {
        showError(email4, 'Enter a valid email address');
        return false;
    } else {
        clearError(email4);
        return true;
    }
}

function validatePhone4() {
    const value = phone4.value.trim();
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (value === '') {
        showError(phone4, 'Phone is required');
        return false;
    } else if (!phoneRegex.test(value)) {
        showError(phone4, 'Format: 123-456-7890');
        return false;
    } else {
        clearError(phone4);
        return true;
    }
}

// Real-time validation on input (instant feedback)
email4.addEventListener('input', validateEmail4);
phone4.addEventListener('input', validatePhone4);

form4.addEventListener('submit', function (e) {
    e.preventDefault();

    const isValid = validateEmail4() && validatePhone4();

    if (isValid) {
        console.log('Form 4 submitted:', { email: email4.value, phone: phone4.value });
        showSuccess('4');
        setTimeout(() => {
            form4.reset();
            clearError(email4);
            clearError(phone4);
        }, 2000);
    }
});

// ============================================
// FORM 5: Number Range Validation
// Demonstrates: min/max validation
// ============================================

const form5 = document.getElementById('form5');
const age5 = document.getElementById('age5');
const quantity5 = document.getElementById('quantity5');

function validateAge5() {
    const value = age5.value;

    if (value === '') {
        showError(age5, 'Age is required');
        return false;
    } else if (value < 18) {
        showError(age5, 'You must be at least 18 years old');
        return false;
    } else if (value > 120) {
        showError(age5, 'Please enter a valid age (max 120)');
        return false;
    } else {
        clearError(age5);
        return true;
    }
}

function validateQuantity5() {
    const value = quantity5.value;

    if (value === '') {
        showError(quantity5, 'Quantity is required');
        return false;
    } else if (value < 1 || value > 10) {
        showError(quantity5, 'Quantity must be between 1 and 10');
        return false;
    } else {
        clearError(quantity5);
        return true;
    }
}

age5.addEventListener('blur', validateAge5);
quantity5.addEventListener('blur', validateQuantity5);

form5.addEventListener('submit', function (e) {
    e.preventDefault();

    const isValid = validateAge5() && validateQuantity5();

    if (isValid) {
        console.log('Form 5 submitted:', { age: age5.value, quantity: quantity5.value });
        showSuccess('5');
        setTimeout(() => {
            form5.reset();
            clearError(age5);
            clearError(quantity5);
        }, 2000);
    }
});

// ============================================
// FORM 6: Complete Registration Form
// Demonstrates: Combining all validation techniques
// ============================================

const form6 = document.getElementById('form6');
const fullname6 = document.getElementById('fullname6');
const email6 = document.getElementById('email6');
const password6 = document.getElementById('password6');
const age6 = document.getElementById('age6');

function validateFullname6() {
    const value = fullname6.value.trim();

    if (value === '') {
        showError(fullname6, 'Full name is required');
        return false;
    } else if (value.length < 2) {
        showError(fullname6, 'Name must be at least 2 characters');
        return false;
    } else {
        clearError(fullname6);
        return true;
    }
}

function validateEmail6() {
    const value = email6.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === '') {
        showError(email6, 'Email is required');
        return false;
    } else if (!emailRegex.test(value)) {
        showError(email6, 'Enter a valid email address');
        return false;
    } else {
        clearError(email6);
        return true;
    }
}

function validatePassword6() {
    const value = password6.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);

    if (value === '') {
        showError(password6, 'Password is required');
        return false;
    } else if (value.length < 8) {
        showError(password6, 'Password must be at least 8 characters');
        return false;
    } else if (!hasUpperCase || !hasLowerCase || !hasNumber) {
        showError(password6, 'Must include uppercase, lowercase, and number');
        return false;
    } else {
        clearError(password6);
        return true;
    }
}

function validateAge6() {
    const value = age6.value;

    if (value === '') {
        showError(age6, 'Age is required');
        return false;
    } else if (value < 18) {
        showError(age6, 'You must be at least 18 years old');
        return false;
    } else if (value > 120) {
        showError(age6, 'Please enter a valid age');
        return false;
    } else {
        clearError(age6);
        return true;
    }
}

// Real-time validation on input for better UX
fullname6.addEventListener('input', validateFullname6);
email6.addEventListener('input', validateEmail6);
password6.addEventListener('input', validatePassword6);
age6.addEventListener('input', validateAge6);

form6.addEventListener('submit', function (e) {
    e.preventDefault();

    const isValid = validateFullname6() && validateEmail6() &&
        validatePassword6() && validateAge6();

    if (isValid) {
        console.log('Form 6 submitted successfully!', {
            fullname: fullname6.value,
            email: email6.value,
            age: age6.value
        });
        showSuccess('6');
        setTimeout(() => {
            form6.reset();
            // Clear all validation states
            [fullname6, email6, password6, age6].forEach(input => {
                input.classList.remove('valid', 'invalid');
                const errorSpan = input.nextElementSibling;
                if (errorSpan) errorSpan.textContent = '';
            });
        }, 2000);
    }
});

// ============================================
// FORM 7: STUDENT EXERCISE
// Complete the validation logic inside each function
// ============================================

// Form and Input Elements
const form7 = document.getElementById('form7');
const firstName7 = document.getElementById('firstName7');
const lastName7 = document.getElementById('lastName7');
const email7 = document.getElementById('email7');
const phone7 = document.getElementById('phone7');
const password7 = document.getElementById('password7');
const confirmPassword7 = document.getElementById('confirmPassword7');
const birthdate7 = document.getElementById('birthdate7');
const website7 = document.getElementById('website7');
const bio7 = document.getElementById('bio7');
const terms7 = document.getElementById('terms7');

// Regex Patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
const websiteRegex = /^https?:\/\/.+\..+$/;
const uppercaseRegex = /[A-Z]/;
const numberRegex = /[0-9]/;
const specialCharRegex = /[!@#$%^&*]/;

// Helper Functions for showing/clearing errors
function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    if (small) small.textContent = message;
    input.classList.add('invalid');
    input.classList.remove('valid');
}

function clearError(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    if (small) small.textContent = '';
    input.classList.remove('invalid');
    input.classList.add('valid');
}

// Validation Functions - TODO: Complete the logic

function validateFirstName7() {
    const value = firstName7.value.trim();

    // TODO: Write validation logic
    // Required, min 2 characters

    // Required and must be min 2 characters
    if (value === '') {
        showError(firstName7, 'First Name is required');
        return false;
    } else if (value.length < 2) {
        showError(firstName7, 'First Name must be more than 2 character');
        return false;
    } else {
        clearError(firstName7);
        return true;
    }
}

function validateLastName7() {
    const value = lastName7.value.trim();

    // TODO: Write validation logic
    // Required, min 2 characters

    if (value === '') {
        showError(lastName7, 'Last Name is required');
        return false;
    } else if (value.length < 2) {
        showError(lastName7, 'Last Name must be more than 2 character');
        return false;
    } else {
        clearError(lastName7);
        return true;
    }
}

function validateEmail7() {
    const value = email7.value.trim();

    // TODO: Write validation logic
    // Required, must match emailRegex

    if (value === '') {
        showError(email7, 'Email is required');
        return false;
    } else if (!emailRegex.test(value)) {
        showError(email7, 'Enter a valid email address');
        return false;
    } else {
        clearError(email7);
        return true;
    }
}

function validatePhone7() {
    const value = phone7.value.trim();

    // TODO: Write validation logic
    // Required, must match phoneRegex (XXX-XXX-XXXX)

    if (value === '') {
        showError(phone7, 'Phone is required');
        return false;
    } else if (!phoneRegex.test(value)) {
        showError(phone7, 'Format: 123-456-7890');
        return false;
    } else {
        clearError(phone7);
        return true;
    }
}

function validatePassword7() {
    const value = password7.value;

    // TODO: Write validation logic
    // Required, min 8 chars, must have uppercase, number, and special char
    if (value === '') {
        showError(password7, 'Password is required');
        return false;
    } else if (value.length < 8) {
        showError(password7, 'Password must be at least 8 characters long');
        return false;
    } else if (!uppercaseRegex.test(value)) {
        showError(password7, 'Password must contain at least one uppercase letter');
        return false;
    } else if (!numberRegex.test(value)) {
        showError(password7, 'Password must contain at least one number');
        return false;
    } else if (!specialCharRegex.test(value)) {
        showError(password7, 'Password must contain at least one special character (!@#$%^&*)');
        return false;
    } else {
        clearError(password7);
        return true;
    }
}

function validateConfirmPassword7() {
    const value = confirmPassword7.value;

    // TODO: Write validation logic
    // Required, must match password7.value

    if (value === '') {
        showError(confirmPassword7, 'Please confirm your password');
        return false;
    } else if (value !== password7.value) {
        showError(confirmPassword7, 'Passwords do not match');
        return false;
    } else {
        clearError(confirmPassword7);
        return true;
    }
}

function validateBirthdate7() {
    const value = birthdate7.value;

    // TODO: Write validation logic
    // Required, user must be 18+ years old
    // Calculate age using:
    // const today = new Date();
    // const birthDate = new Date(value);
    // let age = today.getFullYear() - birthDate.getFullYear();
    // const monthDiff = today.getMonth() - birthDate.getMonth();
    // if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    //     age--;
    // }

    if (value === '') {
        showError(birthdate7, 'Birthdate is required');
        return false;
    }

    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 18) {
        showError(birthdate7, 'You must be at least 18 years old');
        return false;
    } else {
        clearError(birthdate7);
        return true;
    }
}

function validateWebsite7() {
    const value = website7.value.trim();

    // TODO: Write validation logic
    // Optional, but if provided must match websiteRegex
    // If empty, should be valid (return true)
    if (value === '') {
        clearError(website7);
        return true; // Optional field — empty is valid
    } else if (!websiteRegex.test(value)) {
        showError(website7, 'Please enter a valid website URL (e.g., https://example.com)');
        return false;
    } else {
        clearError(website7);
        return true;
    }
}

function validateBio7() {
    const value = bio7.value.trim();

    // TODO: Write validation logic
    // Optional, but if provided max 200 characters
    // If empty, should be valid (return true)
    if (value === '') {
        clearError(bio7); // Optional field — empty is valid
        return true;
    } else if (value.length > 200) {
        showError(bio7, 'Bio must not exceed 200 characters');
        return false;
    } else {
        clearError(bio7);
        return true;
    }
}

function validateTerms7() {
    // TODO: Write validation logic
    // Must be checked: terms7.checked
    // Note: For checkbox, use terms7 instead of terms7.value
    if (!terms7.checked) {
        showError(terms7, 'You must agree to the terms and conditions');
        return false;
    } else {
        clearError(terms7);
        return true;
    }
}

// Event Listeners
firstName7.addEventListener('blur', validateFirstName7);
lastName7.addEventListener('blur', validateLastName7);
email7.addEventListener('input', validateEmail7);
phone7.addEventListener('blur', validatePhone7);
password7.addEventListener('input', validatePassword7);
confirmPassword7.addEventListener('blur', validateConfirmPassword7);
birthdate7.addEventListener('blur', validateBirthdate7);
website7.addEventListener('blur', validateWebsite7);
bio7.addEventListener('input', validateBio7);
terms7.addEventListener('change', validateTerms7);

// Form Submission
form7.addEventListener('submit', function (e) {
    e.preventDefault();

    // Run all validations
    const isFirstNameValid = validateFirstName7();
    const isLastNameValid = validateLastName7();
    const isEmailValid = validateEmail7();
    const isPhoneValid = validatePhone7();
    const isPasswordValid = validatePassword7();
    const isConfirmPasswordValid = validateConfirmPassword7();
    const isBirthdateValid = validateBirthdate7();
    const isWebsiteValid = validateWebsite7();
    const isBioValid = validateBio7();
    const isTermsValid = validateTerms7();

    // Check if all validations passed
    const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid &&
        isPhoneValid && isPasswordValid && isConfirmPasswordValid &&
        isBirthdateValid && isWebsiteValid && isBioValid && isTermsValid;

    if (isFormValid) {
        console.log('Form 7 submitted successfully!', {
            firstName: firstName7.value,
            lastName: lastName7.value,
            email: email7.value,
            phone: phone7.value,
            birthdate: birthdate7.value,
            website: website7.value || 'Not provided',
            bio: bio7.value || 'Not provided'
        });
        showSuccess('7');
        //alert('Form 7 submitted successfully!');

        setTimeout(() => {
            form7.reset();
            [firstName7, lastName7, email7, phone7, password7, confirmPassword7,
                birthdate7, website7, bio7].forEach(input => {
                    input.classList.remove('valid', 'invalid');
                    const errorSpan = input.parentElement.querySelector('small');
                    if (errorSpan && errorSpan.classList.contains('error')) {
                        errorSpan.textContent = '';
                    }
                });
        }, 2000);
    }
});

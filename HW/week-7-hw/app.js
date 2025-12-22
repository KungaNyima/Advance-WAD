// ============================================
// WEEK 7 HOMEWORK - FORM VALIDATION
// ============================================

// ============================================
// HELPER FUNCTIONS
// ============================================

// TODO: Create a helper function to show error messages
// Function: showError(input, message)
// - Set the error message in the span next to the input
// - Add 'invalid' class to input
// - Remove 'valid' class from input
function showError(input, message) {
    const errorSpan = input.parentElement.querySelector('.error');
    errorSpan.textContent = message;

    input.classList.add('invalid');
    input.classList.remove('valid');
}


// TODO: Create a helper function to clear error messages
// Function: clearError(input)
// - Clear the error message text
// - Remove 'invalid' class from input
// - Add 'valid' class to input
function clearError(input) {
    const errorSpan = input.parentElement.querySelector('.error');
    errorSpan.textContent = "";

    input.classList.remove('invalid');
    input.classList.add('valid');
}



// TODO: Create a helper function to show success message
// Function: showSuccess()
// - Display the success message div
// - Hide it after 3 seconds

function showSuccess() {
    const successDiv = document.getElementById('successMessage');

    successDiv.style.display = 'block';   // Show message

    // Hide after 3 seconds
    setTimeout(() => {
        successDiv.style.display = 'none';
    }, 3000);
}



// ============================================
// GET FORM ELEMENTS
// ============================================

// TODO: Get the form element by its ID 'registrationForm'


// TODO: Get all input elements by their IDs
// - firstName
// - lastName
// - email
// - age
// - address
// - city
// - county
// - zipcode

// Get the form
const form = document.getElementById('registrationForm');
// Get all input elements
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const age = document.getElementById('age');
const address = document.getElementById('address');
const city = document.getElementById('city');
const county = document.getElementById('county');
const zipcode = document.getElementById('zipcode');



// ============================================
// VALIDATION FUNCTIONS
// ============================================

// TODO: Validate First Name
// Function: validateFirstName()
// Requirements:
// - Required field (cannot be empty)
// - Minimum 2 characters
// - Only letters and spaces allowed
// Return: true if valid, false if invalid
function validateFirstName() {
    const value = firstName.value.trim();

    // Required
    if (value === "") {
        showError(firstName, "First name is required.");
        return false;
    }

    // Minimum length
    if (value.length < 2) {
        showError(firstName, "First name must be at least 2 characters.");
        return false;
    }

    // Only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(value)) {
        showError(firstName, "First name can only contain letters and spaces.");
        return false;
    }

    // Passed all checks
    clearError(firstName);
    return true;
}



// TODO: Validate Last Name
// Function: validateLastName()
// Requirements:
// - Required field (cannot be empty)
// - Minimum 2 characters
// - Only letters and spaces allowed
// Return: true if valid, false if invalid

function validateLastName() {
    const value = lastName.value.trim();

    // Required
    if (value === "") {
        showError(lastName, "Last name is required.");
        return false;
    }

    // Minimum length
    if (value.length < 2) {
        showError(lastName, "Last name must be at least 2 characters.");
        return false;
    }

    // Only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(value)) {
        showError(lastName, "Last name can only contain letters and spaces.");
        return false;
    }

    // Passed all checks
    clearError(lastName);
    return true;
}



// TODO: Validate Email
// Function: validateEmail()
// Requirements:
// - Required field (cannot be empty)
// - Must be valid email format (use regex)
// - Regex pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Return: true if valid, false if invalid
function validateEmail() {
    const value = email.value.trim();

    // Required
    if (value === "") {
        showError(email, "Email is required.");
        return false;
    }

    // Email format regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
        showError(email, "Please enter a valid email address.");
        return false;
    }

    // Passed all checks
    clearError(email);
    return true;
}



// TODO: Validate Age
// Function: validateAge()
// Requirements:
// - Required field (cannot be empty)
// - Must be a number
// - Must be between 18 and 120
// Return: true if valid, false if invalid
function validateAge() {
    const value = age.value.trim();

    // Required
    if (value === "") {
        showError(age, "Age is required.");
        return false;
    }

    // Must be a number
    const num = Number(value);
    if (isNaN(num)) {
        showError(age, "Age must be a number.");
        return false;
    }

    // Must be between 18 and 120
    if (num < 18 || num > 120) {
        showError(age, "Age must be between 18 and 120.");
        return false;
    }

    // Passed all checks
    clearError(age);
    return true;
}



// TODO: Validate Address
// Function: validateAddress()
// Requirements:
// - Required field (cannot be empty)
// - Minimum 5 characters
// Return: true if valid, false if invalid
function validateAddress() {
    const value = address.value.trim();

    // Required
    if (value === "") {
        showError(address, "Address is required.");
        return false;
    }

    // Minimum length
    if (value.length < 5) {
        showError(address, "Address must be at least 5 characters long.");
        return false;
    }

    // Passed all checks
    clearError(address);
    return true;
}



// TODO: Validate City
// Function: validateCity()
// Requirements:
// - Required field (cannot be empty)
// - Minimum 2 characters
// - Only letters and spaces allowed
// Return: true if valid, false if invalid
function validateCity() {
    const value = city.value.trim();

    // Required
    if (value === "") {
        showError(city, "City is required.");
        return false;
    }

    // Minimum length
    if (value.length < 2) {
        showError(city, "City must be at least 2 characters long.");
        return false;
    }

    // Only letters and spaces
    const cityRegex = /^[A-Za-z\s]+$/;
    if (!cityRegex.test(value)) {
        showError(city, "City can only contain letters and spaces.");
        return false;
    }

    // Passed all checks
    clearError(city);
    return true;
}



// TODO: Validate County
// Function: validateCounty()
// Requirements:
// - Required field (cannot be empty)
// - Minimum 2 characters
// - Only letters and spaces allowed
// Return: true if valid, false if invalid

function validateCounty() {
    const value = county.value.trim();

    // Required
    if (value === "") {
        showError(county, "County is required.");
        return false;
    }

    // Minimum length
    if (value.length < 2) {
        showError(county, "County must be at least 2 characters long.");
        return false;
    }

    // Only letters and spaces
    const countyRegex = /^[A-Za-z\s]+$/;
    if (!countyRegex.test(value)) {
        showError(county, "County can only contain letters and spaces.");
        return false;
    }

    // Passed all checks
    clearError(county);
    return true;
}



// TODO: Validate Zipcode
// Function: validateZipcode()
// Requirements:
// - Required field (cannot be empty)
// - Must be exactly 5 digits
// - Regex pattern: /^\d{5}$/
// Return: true if valid, false if invalid

function validateZipcode() {
    const value = zipcode.value.trim();

    // Required
    if (value === "") {
        showError(zipcode, "Zip code is required.");
        return false;
    }

    // Must be exactly 5 digits
    const zipRegex = /^\d{5}$/;
    if (!zipRegex.test(value)) {
        showError(zipcode, "Zip code must be exactly 5 digits.");
        return false;
    }

    // Passed all checks
    clearError(zipcode);
    return true;
}



// ============================================
// EVENT LISTENERS
// ============================================

// TODO: Add blur event listeners to all inputs
// - Add listener for firstName that calls validateFirstName
// - Add listener for lastName that calls validateLastName
// - Add listener for email that calls validateEmail
// - Add listener for age that calls validateAge
// - Add listener for address that calls validateAddress
// - Add listener for city that calls validateCity
// - Add listener for county that calls validateCounty
// - Add listener for zipcode that calls validateZipcode

firstName.addEventListener('blur', validateFirstName);
lastName.addEventListener('blur', validateLastName);
email.addEventListener('blur', validateEmail);
age.addEventListener('blur', validateAge);
address.addEventListener('blur', validateAddress);
city.addEventListener('blur', validateCity);
county.addEventListener('blur', validateCounty);
zipcode.addEventListener('blur', validateZipcode);



// ============================================
// FORM SUBMISSION
// ============================================

// TODO: Add submit event listener to the form
// Steps:
// 1. Prevent default form submission
// 2. Run all validation functions and store results
// 3. Check if all validations passed
// 4. If valid:
//    - Log form data to console
//    - Show success message
//    - Reset form after 2 seconds
//    - Clear all validation states

form.addEventListener('submit', function (e) {
    e.preventDefault(); // 1. Prevent default form submission

    // 2. Run all validation functions
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isAgeValid = validateAge();
    const isAddressValid = validateAddress();
    const isCityValid = validateCity();
    const isCountyValid = validateCounty();
    const isZipcodeValid = validateZipcode();

    // 3. Check if all validations passed
    const isFormValid = isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isAgeValid &&
        isAddressValid &&
        isCityValid &&
        isCountyValid &&
        isZipcodeValid;

    if (isFormValid) {
        // 4a. Log form data to console
        console.log({
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            email: email.value.trim(),
            age: age.value.trim(),
            address: address.value.trim(),
            city: city.value.trim(),
            county: county.value.trim(),
            zipcode: zipcode.value.trim()
        });

        // 4b. Show success message
        showSuccess();

        // 4c. Reset form after 2 seconds
        setTimeout(() => {
            form.reset();

            // 4d. Clear all validation states
            [firstName, lastName, email, age, address, city, county, zipcode].forEach(input => {
                input.classList.remove('valid', 'invalid');
                const errorSpan = input.parentElement.querySelector('.error');
                errorSpan.textContent = "";
            });
        }, 2000);
    }
});


var _a;
// Get the form and add the submit event listener
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting traditionally
    // Type assertion for form elements
    var nameField = document.getElementById('nameField');
    var emailField = document.getElementById('emailField');
    var phoneField = document.getElementById('phoneNum');
    var educationField = document.getElementById('education');
    var experienceField = document.getElementById('experience');
    var skillsField = document.getElementById('skills');
    var instaField = document.getElementById('instalink');
    var fbField = document.getElementById('fblink');
    var linkedinField = document.getElementById('linkedinlink');
    // Check if all required fields are filled
    if (nameField && emailField && phoneField && educationField && experienceField && skillsField) {
        var name_1 = nameField.value;
        var email = emailField.value;
        var phone = phoneField.value;
        var education = educationField.value;
        var experience = experienceField.value;
        var skills = skillsField.value;
        var instagram = (instaField === null || instaField === void 0 ? void 0 : instaField.value) || '';
        var facebook = (fbField === null || fbField === void 0 ? void 0 : fbField.value) || '';
        var linkedin = (linkedinField === null || linkedinField === void 0 ? void 0 : linkedinField.value) || '';
        // Create Resume Output HTML
        var resumeOutput = "\n            <h1>Resume</h1>\n            <h3>Name:</h3>\n            <p>".concat(name_1, "</p>\n            <h3>Email:</h3>\n            <p>").concat(email, "</p>\n            <h3>Phone Number:</h3>\n            <p>").concat(phone, "</p>\n            <h3>Education:</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience:</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills:</h3>\n            <p>").concat(skills, "</p>\n            <h2>Social Media Links:</h2>\n            <ul>\n                ").concat(instagram ? "<li><strong>Instagram:</strong> <a href=\"".concat(instagram, "\" target=\"_blank\">").concat(instagram, "</a></li>") : '', "\n                ").concat(facebook ? "<li><strong>Facebook:</strong> <a href=\"".concat(facebook, "\" target=\"_blank\">").concat(facebook, "</a></li>") : '', "\n                ").concat(linkedin ? "<li><strong>LinkedIn:</strong> <a href=\"".concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></li>") : '', "\n            </ul>\n        ");
        // Display the generated resume in the resumeOutput div
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('Resume output container not found!');
        }
    }
    else {
        console.error('Please fill in all the required fields!');
    }
});

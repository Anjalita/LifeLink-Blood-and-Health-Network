function updateProfile() {
    var name = document.getElementById('settingsName').value;
    var email = document.getElementById('settingsEmail').value;
    var password = document.getElementById('settingsPassword').value;
    var bio = document.getElementById('settingsBio').value;

    localStorage.setItem('profileName', name);
    localStorage.setItem('profileEmail', email);
    localStorage.setItem('profilePassword', password);
    localStorage.setItem('profileBio', bio);

    alert('Profile updated successfully!');
    window.location.href='in.html';
}

// Load the settings values from localStorage if they exist
document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('profileName')) {
        document.getElementById('settingsName').value = localStorage.getItem('profileName');
    }
    if (localStorage.getItem('profileEmail')) {
        document.getElementById('settingsEmail').value = localStorage.getItem('profileEmail');
    }
    if (localStorage.getItem('profilePassword')) {
        document.getElementById('settingsPassword').value = localStorage.getItem('profilePassword');
    }
    if (localStorage.getItem('profileBio')) {
        document.getElementById('settingsBio').value = localStorage.getItem('profileBio');
    }
});

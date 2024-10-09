export function generatePassword() {
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let newPassword = '';
    for (let i = 0; i < 2; i++) newPassword += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    for (let i = 0; i < 2; i++) newPassword += numbers[Math.floor(Math.random() * numbers.length)];
    for (let i = 0; i < 2; i++) newPassword += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    for (let i = 0; i < 2; i++) newPassword += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];

    const allCharacters = specialCharacters + lowercaseLetters + uppercaseLetters + numbers;
    while (newPassword.length < 18) {
        newPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    // Shuffle the password to randomize the order
    return newPassword.split('').sort(() => 0.5 - Math.random()).join('');
}
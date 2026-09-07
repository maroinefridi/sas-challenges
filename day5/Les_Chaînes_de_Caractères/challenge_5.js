// Challenge 5 : Test de Palindrome

function estPalindrome(chaine) {
    let newstr = "";
    let ispalindrome = false;
    for (let i = chaine.length - 1; i >= 0; i--) {
        newstr += chaine[i]
    }
    if (newstr === chaine) {
        ispalindrome = true;
    }
    return ispalindrome
}
console.log(estPalindrome("kayak"))
function getMiddle(s) {
    const middleIndex = s.length / 2;
    if (s.length % 2 === 0) {
        return s[middleIndex - 1] + s[middleIndex];
    } else {
        return s[Math.floor(middleIndex)];
    }
}

console.log(getMiddle('AABBAA'))
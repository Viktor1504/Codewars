const findNeedle = (haystack) => `found the needle at position ${haystack.indexOf('needle')}`

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))
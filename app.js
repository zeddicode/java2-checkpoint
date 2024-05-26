// a function that reverses a string ina given string 

    const Name = "kinghayzed";
    
    
    function reversedName(name) {
        return name.split('').reverse().join('');
    }
    const newName = reversedName(Name);
    console.log(newName); // Output: "dezyahgnik"
    

    // Count Characters: Create a function that counts the number of characters in a string.

    const character = 'kinghayzed'
    function countCharacter(character){
        return character.length;
    }
    const newCharacter = countCharacter(character)
    console.log(newCharacter); // Output: 10


    // Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

    const string = "nobody truly cares about you"
    function capitalizeWords(sentence){
        return sentence.split('').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }
    const capitalizedSentence = capitalizeWords(string)
    console.log(capitalizedSentence)

    function capitalizeWords(sentence) {
        return sentence.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }
    
    // Example usage:
    const exampleSentence = "hello world! this is an example.";
    const capitalizeddSentence = capitalizeWords(exampleSentence);
    console.log(capitalizeddSentence); // Output: "Hello World! This Is An Example."

function toKilometers(miles) {
    if (typeof miles !== 'number' || isNaN(miles)) {
        throw new Error('Input must be a valid number');
    }
    
    const kilometers = miles * 1.60934; 
    console.log(kilometers); 
    return kilometers; 
}

const mile = parseInt(prompt("Enter Miles"));
const kms = toKilometers(mile);
alert(`${mile} miles is  ${kms} kilometers.`);

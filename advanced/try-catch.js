//type checking - make sure right type is passed

const getTip = (amount) => {
    if(typeof amount === 'number')
        return amount * .25;
    else
        throw Error('Argument must be a number');
};

try {
    const result = getTip(6);
    console.log(result);
} catch (e) {
    console.log('catch block is running');
}


//with Error and try catch
const gradeCalc = (score, totalScore) => {
    if(typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('Argument must be a number');
    }
    
    const percent = (score / totalScore) * 100;
    let letterGrade = '';

    if (percent >= 90)
        letterGrade = 'A';
    else if (percent >= 80)
        letterGrade = 'B';
    else if (percent >= 70)
        letterGrade = 'C';
    else if (percent >= 60)
        letterGrade = 'D';
    else
        letterGrade = 'F';

    return `You got a ${letterGrade} (${percent}%)!`;
};

try {
    const result = gradeCalc(10,1);
    console.log(result);
} catch(e) {
    console.log(e.message);
}




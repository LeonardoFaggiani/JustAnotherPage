import parse from 'html-react-parser';

export const convertToEm = (input, hasParse = true) => {
    
    let result = "";
    if (input !== null || input !== undefined) {

        var array = Array.from(input);

        for (let index = 0; index < array.length; index++)
            result += `<em>${array[index]}</em>`

        return hasParse ? parse(result) : result;
    }
};

export const scrollTo = (offsetTop, behavior) => {

    window.scrollTo({
        top: offsetTop,
        behavior: behavior
    });

};

export const delayInMs = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);
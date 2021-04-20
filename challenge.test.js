'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
Write a function that accepts an array of strings. Return the longest string.
------------------------------------------------------------------------------------------------ */

const longestString = (arr) => {
    // Solution code here...

    var lgth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
        }
        }
            return longest;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function called isSimilar which takes two strings and returns true if they contain the same characters and false otherwise; if for example the two strings have the same characters and they are rearranged it will return true.
examples:

isSimilar("form","from")
=> true
isSimilar("farm","from")
=> false
isSimilar("cat","act")
=> true
------------------------------------------------------------------------------------------------ */

const isSimilar = (arr) => {
    // Solution code here...
    // let sp= arr[0].split('');
    // sp.sort();
    // let sp2=arr[1].split('');
    // sp2.sort();
    // return (sp===sp2);

    // let sp = arr[0].sort();
    // let spp = arr[1].sort();
    // if (sp===spp)
    // {return true;}
    // else{
    //     return false;
    // }

    let firstindex = arr[0].split('').sort().join('');
    let secondindex = arr[1].split('').sort().join('');
     if (firstindex===secondindex)
    {return true;}
    else{
        return false;
    }
  
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
    test('It should return the string that is the longest in length', () => {
        expect(longestString(['hello', 'future', '401', 'students', '!'])).toStrictEqual('students');
        expect(longestString(['rubber', 'ducks', 'dont', 'quack', '!'])).toStrictEqual('rubber');
    });
});

describe('Testing challenge 2', () => {
    test('It Should return true if the string contains the same characters and false if otherwise', () => {
        expect(isSimilar(['from', 'from'])).toStrictEqual(true);
        expect(isSimilar(['farm', 'from'])).toStrictEqual(false);
        expect(isSimilar(['cat', 'act'])).toStrictEqual(true);
        expect(isSimilar(['cat', 'at'])).toStrictEqual(false);
        expect(isSimilar(['duck', 'ckud'])).toStrictEqual(true);
        expect(isSimilar(['rubber', 'duck'])).toStrictEqual(false);
        expect(isSimilar([])).toStrictEqual(false);
    });
});

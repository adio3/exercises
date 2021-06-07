'use strict';

// Binary search

const binarySearchArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const comparer = (num1, num2) => {
    if (num1 === num2) {
        return 'equal';
    }
    if (num1 < num2) {
        return 'lower';
    }
    if (num1 > num2) {
        return 'higher';
    }
};

const binarySearch = searchedNumber => {
    const arrayLength = binarySearchArray.length - 1;
    let index = Math.floor(arrayLength / 2);
    let lastIndex = arrayLength;

    while (!(index === 0) && !(arrayLength === index)) {
        switch (comparer(searchedNumber, binarySearchArray[index])) {
            case 'equal':
                return `index is ${index}`;
            case 'lower':
                // if (index === 0) {
                //     return 'number not included';
                // }
                lastIndex = index;
                index = Math.floor(index / 2);
            case 'higher':
                // if (arrayLength === index) {
                //     return 'number not included';
                // }
                lastIndex = index;
                index = Math.floor(lastIndex - index / 2 + index);
        }
    }
    return 'number not included';
};

console.log(binarySearch(7));

// Insertion sort

const toSortArray = [5, 3, 77, 8, 2, 44, 8];

const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        // loops array
        if (arr[i] < arr[i - 1]) {
            // if number is smaller than number before
            let counter = i - 1; // count steps
            let counter2 = i; // count sorting number
            while (counter !== -1 && !(arr[counter2] > arr[counter])) {
                // move number one backwards
                const higherNumber = arr[counter];
                arr[counter] = arr[counter2];
                arr[counter2] = higherNumber;

                counter = counter - 1;
                counter2 = counter2 - 1;
            }
        }
    }
    return toSortArray;
};

console.log(insertionSort(toSortArray));

// Merge sort

const mergeSort = arr => {
    let newArr = [];
    for (let i = 0; i <= arr.length - 1; i = i + 2) {
        if (typeof arr[i] === 'number') {
            if (arr.length - 1 === i) {
                newArr.push([arr[i]]);
            } else {
                if (arr[i] > arr[i + 1]) {
                    newArr.push([arr[i + 1], arr[i]]);
                } else {
                    newArr.push([arr[i], arr[i + 1]]);
                }
            }
        } else {
            tempArr = [];
            while (arr[i].length && arr[i + 1].length) {
                if (arr[i][0] < arr[i + 1][0]) {
                    tempArr.push(arr[i].shift());
                } else {
                    tempArr.push(arr[i + 1].shift());
                }
            }
            while (arr[i].length) {
                tempArr.push(arr[i].shift());
            }
            while (arr[i + 1].length) {
                tempArr.push(arr[i + 1].shift());
            }
            newArr.push(tempArr);
        }
    }

    if (newArr.length > 1) {
        mergeSort(newArr);
    } else {
        const returnArr = [...newArr[0]];
        return returnArr;
    }
};

console.log(mergeSort(toSortArray));

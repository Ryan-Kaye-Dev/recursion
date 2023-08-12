const unsortedArray = [740, 859, 710, 162, 369, 215, 94, 363, 11];

function mergeSort(array) {
    // Base case: If the array has 1 or 0 elements, it's already sorted
    if (array.length < 2) {
        return array;
    } else {
        // Split the array into two halves
        const middle = Math.floor(array.length / 2);
        const leftHalf = array.slice(0, middle);
        const rightHalf = array.slice(middle);

        // Recursively sort both halves
        const sortedLeft = mergeSort(leftHalf);
        const sortedRight = mergeSort(rightHalf);

        // Merge the sorted halves
        const sortedArray = merge(sortedLeft, sortedRight);
        return sortedArray;
    }
}

function merge(left, right) {
    let mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge elements while comparing elements from left and right
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Concatenate any remaining elements from left and right
    return mergedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Call mergeSort with the unsorted array
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);  // Print the sorted array

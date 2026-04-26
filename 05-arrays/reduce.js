console.log("--------------------------------------------------")
console.log("Reduce :");


//.reduce() = reduce the elements of the array to a single value.

const grades = [67, 45, 78, 77, 88];

function minmarksfn(accumulator, element) {

    return Math.min(accumulator, element);
}

function maxmarksfn(accumulator, element) {

    return Math.max(accumulator, element);
}
const minmarks = grades.reduce(minmarksfn);

const maxmarks = grades.reduce(maxmarksfn);

console.log(minmarks);
console.log(maxmarks);

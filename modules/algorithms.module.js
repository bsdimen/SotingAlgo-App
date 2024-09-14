export function selectionAlgo(array) {

    let smallest;
    for (let i = 0; i < array.length; i++) {
        smallest = i;
        for (let j = i + 1; j < array.length; j++) {

            if (array[j] < array[smallest]) {
                smallest = j
            }

        }
        [array[i], array[smallest]] = [array[smallest], array[i]];


    }
    console.log("finish " + array)


}

// Счетчик с замыканием

const makeCounter = () => {
    let currentCount = 1;

    return function () {
        return currentCount++;
    }
};

// Факториал через рекурсию

const findFactorial = num => {
    if (num <= 0) {
        return;
    }

    if (num === 1) {
        return 1;
    }

    return num * findFactorial(num - 1);
};

// Бинарный поиск через рекурсию

const binarySearch = (array, item) => {
    let result = -1;
    let tempIndex = 0;

    const search = (_array, _item) => {
        let middle = Math.floor(_array.length / 2);

        if (_array.length === 0) {
            return;
        }

        if (_array[middle] === _item) {
            result = middle + tempIndex;
            return;
        }

        if (_array[middle] > _item) {
            search(_array.slice(0, middle), _item)
        } else if (_array.length > 1) {
            tempIndex += middle;
            search(_array.slice(middle, _array.length), _item)
        } else {
            return;
        }
    };

    search(array, item);

    return result;
};

// Числа Фибоначчи

const getFibo = () => {
    let currentCount = 0;
    return function () {
        const getFibonacci = currentCount => {
            if (currentCount < 0) {
                return 0;
            }

            if (currentCount === 1) {
                return 1;
            }

            return getFibonacci(currentCount - 1) + getFibonacci(currentCount - 2);
        }
        currentCount++;

        return getFibonacci(currentCount);
    }
};

const getFibonacci = n => {
    if (n < 0) {
        return;
    }
    let array = [];
    array[0] = 0;
    array[1] = 1;

    for (let i = 2; i <= n; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
     return array;
};

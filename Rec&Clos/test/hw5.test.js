// Счетчик с замыканием

describe('makeCounter tests', () => {
    let counter;

    beforeEach(() => {
        counter = makeCounter();
    });

    it('should return 1', () => {
        //Given
        const expected = 1;

        //When
        const actual = counter();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return 2', () => {
        //Given
        const expected = 2;

        //When
        counter();
        const actual = counter();
        
        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return 3', () => {
        //Given
        const expected = 3;

        //When
        counter();
        counter();
        const actual = counter();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return 4', () => {
        //Given
        const expected = 4 ;

        //When
        counter();
        counter();
        counter();
        const actual = counter();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return 5', () => {
        //Given
        const expected = 5 ;

        //When
        counter();
        counter();
        counter();
        counter();
        const actual = counter();

        //Then
        assert.deepEqual(actual, expected);
    });
});

// Факториал через рекурсию

describe('findFactorial tests', () => {
    it('should return 120', () => {
        //Given
        const expected = 120;

        //When
        const actual = findFactorial(5);

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return 3628800', () => {
        //Given
        const expected = 3628800;

        //When
        const actual = findFactorial(10);

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return 24', () => {
        //Given
        const expected = 24;

        //When
        const actual = findFactorial(4);

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return 1', () => {
        //Given
        const expected = 1;

        //When
        const actual = findFactorial(1);

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return undefined', () => {
        //Given
        const expected = undefined;

        //When
        const actual = findFactorial(0);

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return undefined', () => {
        //Given
        const expected = undefined;

        //When
        const actual = findFactorial(-5);

        //Then
        assert.deepEqual(actual, expected);
    });
});

// Бинарный поиск через рекурсию

describe('binarySearch tests', () => {
    it(`should return -1 `, () => {
        //Given
        const expected = -1;

        //When
        const actual = binarySearch([]);

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return -1 `, () => {
        //Given
        const expected = -1;

        //When
        const actual = binarySearch([], 5);

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return -1 `, () => {
        //Given
        const expected = -1;

        //When
        const actual = binarySearch([], 5);

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 0 `, () => {
        //Given
        const expected = 0;

        //When
        const actual = binarySearch([5], 5);

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 1 `, () => {
        //Given
        const expected = 1;

        //When
        const actual = binarySearch([5, 8, 15], 8);

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 3`, () => {
        //Given
        const expected = 3;

        //When
        const actual = binarySearch([-2, 0, 2, 8, 15], 8);

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 2`, () => {
        //Given
        const expected = 2;

        //When
        const actual = binarySearch([-2, 0, 2, 8, 15], 2);

        //Then
        assert.deepEqual(actual, expected);
    });
});

// Числа Фибоначчи

describe('getFibo tests', () => {
    let fibo;

    beforeEach(() => {
        fibo = getFibo();
    });

    it(`should return 1`, () => {
        //Given
        const expected = 1;

        //When
        const actual = fibo();

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 1`, () => {
        //Given
        const expected = 1;

        //When
        fibo();
        const actual = fibo();

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 2`, () => {
        //Given
        const expected = 2;

        //When
        fibo();
        fibo();
        const actual = fibo();

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 3`, () => {
        //Given
        const expected = 3;

        //When
        fibo();
        fibo();
        fibo();
        const actual = fibo();

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 5`, () => {
        //Given
        const expected = 5;

        //When
        fibo();
        fibo();
        fibo();
        fibo();
        const actual = fibo();

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 8`, () => {
        //Given
        const expected = 8;

        //When
        fibo();
        fibo();
        fibo();
        fibo();
        fibo();
        const actual = fibo();

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 13`, () => {
        //Given
        const expected = 13;

        //When
        fibo();
        fibo();
        fibo();
        fibo();
        fibo();
        fibo();
        const actual = fibo();

        //Then
        assert.deepEqual(actual, expected);
    });
});

describe('getFibonacci tests', () => {
    it(`should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55] when n = 10`, () => {
        //Given
        const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

        //When
        const actual = getFibonacci(10);

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return [0, 1, 1, 2, 3, 5] when n = 5`, () => {
        //Given
        const expected = [0, 1, 1, 2, 3, 5];

        //When
        const actual = getFibonacci(5);

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return [0, 1, 1, 2, 3] when n = 4`, () => {
        //Given
        const expected = [0, 1, 1, 2, 3];

        //When
        const actual = getFibonacci(4);

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return [0, 1] when n = 0`, () => {
        //Given
        const expected = [0, 1];

        //When
        const actual = getFibonacci(0);

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return undefined when n = -1`, () => {
        //Given
        const expected = undefined;

        //When
        const actual = getFibonacci(-1);

        //Then
        assert.deepEqual(actual, expected);
    });
});






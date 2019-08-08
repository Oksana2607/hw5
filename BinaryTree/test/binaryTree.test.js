describe('init, getSize tests', () => {
    let binaryTree;

    beforeEach(() => {
        binaryTree = new BinaryTree();
    });

    it(`should set nothing if undefined is initialized`, () => {
        //Given
        let array = undefined;
        const expected = 0;

        //When
        binaryTree.init(array);

        //Then
        assert.deepEqual(binaryTree.getSize(), expected);
    });

    it(`should set nothing if null is initialized`, () => {
        //Given
        let array = null;
        const expected = 0;

        //When
        binaryTree.init(array);

        //Then
        assert.deepEqual(binaryTree.getSize(), expected);
    });

    it(`should set nothing if [] is initialized`, () => {
        //Given
        let array = [];
        const expected = 0;

        //When
        binaryTree.init(array);

        //Then
        assert.deepEqual(binaryTree.getSize(), expected);
    });

    it(`should set binaryTree if [2] is initialized`, () => {
        //Given
        let array = [2];
        const expected = 1;

        //When
        binaryTree.init(array);

        //Then
        assert.deepEqual(binaryTree.getSize(), expected);
    });

    it(`should set binaryTree if [-5, 15] is initialized`, () => {
        //Given
        let array = [-5, 15];
        const expected = 2;

        //When
        binaryTree.init(array);

        //Then
        assert.deepEqual(binaryTree.getSize(), expected);
    });

    it(`should set binaryTree if [35, 14, 18, 0, 3] is initialized`, () => {
        //Given
        let array = [35, 14, 18, 0, 3];
        const expected = 5;

        //When
        binaryTree.init(array);

        //Then
        assert.deepEqual(binaryTree.getSize(), expected);
    });
});

describe('toString tests', () => {
    let binaryTree;

    beforeEach(() => {
        binaryTree = new BinaryTree();
    });

    it('should return "" if undefined is set', () => {
        //Given
        binaryTree.init(undefined);
        const expected = '';

        //When
        const actual = binaryTree.toString();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return "" if null is set', () => {
        //Given
        binaryTree.init(null);
        const expected = '';

        //When
        const actual = binaryTree.toString();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return "" if undefined is set', () => {
        //Given
        binaryTree.init(undefined);
        const expected = '';

        //When
        const actual = binaryTree.toString();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return "" if [] is set', () => {
        //Given
        binaryTree.init([]);
        const expected = '';

        //When
        const actual = binaryTree.toString();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return "[2]" if [2] is set', () => {
        //Given
        binaryTree.init([2]);
        const expected = '[2]';

        //When
        const actual = binaryTree.toString();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return "[5, 8]" if [5, 8] is set', () => {
        //Given
        binaryTree.init([5, 8]);
        const expected = '[5, 8]';

        //When
        const actual = binaryTree.toString();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return "[-7, -2, 5, 8, 15]" if [5, 8, -7, 15, -2] is set', () => {
        //Given
        binaryTree.init([5, 8, -7, 15, -2]);
        const expected = '[-7, -2, 5, 8, 15]';

        //When
        const actual = binaryTree.toString();

        //Then
        assert.deepEqual(actual, expected);
    });
});

describe('push tests', () => {
    let binaryTree;

    beforeEach(() => {
        binaryTree = new BinaryTree();
    });

    it('should return null if undefined is pushed', () => {
        //Given
        const value = undefined;
        const expected = null;

        //When
        const actual = binaryTree.push(value);

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return null if null is pushed', () => {
        //Given
        const value = null;
        const expected = 1;

        //When
        const actual = binaryTree.push(value);

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return 1 if one element is pushed (2)', () => {
        //Given
        const value = 2;
        const expected = 1;

        //When
        const actual = binaryTree.push(value);

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return 3 if one element is pushed (15) to [5, 12]', () => {
        //Given
        binaryTree.init([5, 12]);

        const value = 15;
        const expected = 3;

        //When
        const actual = binaryTree.push(value);

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return 6 if one element is pushed (100) to [5, 12, -34, 45, -7]', () => {
        //Given
        binaryTree.init([5, 12, -34, 45, -7]);

        const value = 100;
        const expected = 6;

        //When
        const actual = binaryTree.push(value);

        //Then
        assert.deepEqual(actual, expected);
    });
});


describe('toArray tests', () => {
    let binaryTree;

    beforeEach(() => {
        binaryTree = new BinaryTree();
    });

    it('should return [] if undefined is set', () => {
        //Given
        binaryTree.init(undefined);
        const expected = [];

        //When
        const actual = binaryTree.toArray();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return [] if null is set', () => {
        //Given
        binaryTree.init(null);
        const expected = [];

        //When
        const actual = binaryTree.toArray();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return [] if [] is set', () => {
        //Given
        binaryTree.init([]);
        const expected = [];

        //When
        const actual = binaryTree.toArray();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return [2] if [2] is set', () => {
        //Given
        binaryTree.init([2]);
        const expected = [2];

        //When
        const actual = binaryTree.toArray();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return [5, 8] if [5, 8] is set', () => {
        //Given
        binaryTree.init([5, 8]);
        const expected = [5, 8];

        //When
        const actual = binaryTree.toArray();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should return [5, 8, -7, 15, -2] if [-7, -2, 5, 8, 15] is set', () => {
        //Given
        binaryTree.init([5, 8, -7, 15, -2]);
        const expected = [-7, -2, 5, 8, 15];

        //When
        const actual = binaryTree.toArray();

        //Then
        assert.deepEqual(actual, expected);
    });
});

describe('remove tests', () => {
    let binaryTree;

    beforeEach(() => {
        binaryTree = new BinaryTree();
    });

    it('should return "" if undefined is initialized', () => {
        //Given
        binaryTree.init();
        const expected = '';
        const expectedSize = 0;

        //When
        binaryTree.remove();

        //Then
        assert.deepEqual(binaryTree.toString(), expected);
        assert.deepEqual(binaryTree.getSize(), expectedSize);
    });

    it('should return "" if null is initialized', () => {
        //Given
        binaryTree.init(null);
        const expected = '';
        const expectedSize = 0;

        //When
        binaryTree.remove();

        //Then
        assert.deepEqual(binaryTree.toString(), expected);
        assert.deepEqual(binaryTree.getSize(), expectedSize);
    });

    it('should return "" if null is initialized', () => {
        //Given
        binaryTree.init(null);
        const expected = '';
        const expectedSize = 0;

        //When
        binaryTree.remove(5);

        //Then
        assert.deepEqual(binaryTree.toString(), expected);
        assert.deepEqual(binaryTree.getSize(), expectedSize);
    });

    it('should return "" if [] is initialized', () => {
        //Given
        binaryTree.init([]);
        const expected = '';
        const expectedSize = 0;

        //When
        binaryTree.remove();

        //Then
        assert.deepEqual(binaryTree.toString(), expected);
        assert.deepEqual(binaryTree.getSize(), expectedSize);
    });

    it('should return "" if [4] is initialized', () => {
        //Given
        binaryTree.init([4]);
        const expected = '';
        const expectedSize = 0;

        //When
        binaryTree.remove(4);

        //Then
        assert.deepEqual(binaryTree.toString(), expected);
        assert.deepEqual(binaryTree.getSize(), expectedSize);
    });

    it('should return "[8]" if [5, 8] is initialized', () => {
        //Given
        binaryTree.init([5, 8]);
        const expected = '[8]';
        const expectedSize = 1;

        //When
        binaryTree.remove(5);

        //Then
        assert.deepEqual(binaryTree.toString(), expected);
        assert.deepEqual(binaryTree.getSize(), expectedSize);
    });

    it('should return "[-2, 5, 8, 15]" if [5, 8, -7, 15, -2] is initialized', () => {
        //Given
        binaryTree.init([5, 8, -7, 15, -2]);
        const expected = '[-2, 5, 8, 15]';
        const expectedSize = 4;

        //When
        binaryTree.remove(-7);

        //Then
        assert.deepEqual(binaryTree.toString(), expected);
        assert.deepEqual(binaryTree.getSize(), expectedSize);
    });
});

describe('setBalance tests', () => {
    let binaryTree = new BinaryTree();

    it(`should get different heights`, () => {
        //Given
        binaryTree.init([-10, 1, 2, 3, 8, -2]);
        const expected = binaryTree.getHeight();

        //When
        binaryTree.setBalance();
        const actual = binaryTree.getHeight();

        //Then
        assert.operator(actual, '<', expected);
    });

    it('should get different heights', () => {
        //Given
        binaryTree.init([1, 15, 7, 18, 2, -3]);
        const expected = binaryTree.getHeight();

        //When
        binaryTree.setBalance();
        const actual = binaryTree.getHeight();

        //Then
        assert.operator(actual, '<', expected);
    });

    it('should get different heights', () => {
        //Given
        binaryTree.init([0, 4, -7, -5, 15, 18, 35]);
        const expected = binaryTree.getHeight();

        //When
        binaryTree.setBalance();
        const actual = binaryTree.getHeight();

        //Then
        assert.operator(actual, '<', expected);
    });

    it('should get different heights', () => {
        //Given
        binaryTree.init([2]);
        const expected = binaryTree.getHeight();

        //When
        binaryTree.setBalance();
        const actual = binaryTree.getHeight();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should get different heights', () => {
        //Given
        binaryTree.init([2, -2]);
        const expected = binaryTree.getHeight();

        //When
        binaryTree.setBalance();
        const actual = binaryTree.getHeight();

        //Then
        assert.deepEqual(actual, expected);
    });

    it('should get different heights', () => {
        //Given
        binaryTree.init([2, -2, 15]);
        const expected = binaryTree.getHeight();

        //When
        binaryTree.setBalance();
        const actual = binaryTree.getHeight();

        //Then
        assert.operator(actual, '<', expected);
    });
});
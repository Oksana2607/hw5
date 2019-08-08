function ProtoBinaryTree() {
    this.root = null;
}

ProtoBinaryTree.prototype.init = function () {
};
ProtoBinaryTree.prototype.getSize = function () {
};
ProtoBinaryTree.prototype.toString = function () {
};
ProtoBinaryTree.prototype.toArray = function () {
};
ProtoBinaryTree.prototype.push = function () {
};
ProtoBinaryTree.prototype.remove = function () {
};
ProtoBinaryTree.prototype.get = function () {
};
ProtoBinaryTree.prototype.set = function () {
};
ProtoBinaryTree.prototype.setBalance = function () {
};

function BinaryTree() {
    ProtoBinaryTree.apply(this, arguments);
}

BinaryTree.prototype = Object.create(ProtoBinaryTree.prototype);
BinaryTree.prototype.constructor = BinaryTree;

BinaryTree.prototype.push = function (value) {
    if (!this.root) {
        if (value === undefined) {
            return null;
        } else {
            this.root = new Node(value);

            return this.getSize();
        }
    }

    let currentNode = this.root;
    let newNode = new Node(value);

    while (currentNode) {
        if (value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }

    return this.getSize();
};

BinaryTree.prototype.init = function (array) {
    if (!array || array.length < 1) {
        return this.root;
    }

    for (let i = 0; i < array.length; i++) {
        this.push(array[i]);
    }

    return this.root;
};

BinaryTree.prototype.toArray = function () {
    let array = [];

    if (!this.root) {
        return [];
    }

    traverseTree(this.root);

    function traverseTree(node) {

        if (node.left) {
            traverseTree(node.left);
        }

        array.push(node.value);

        if (node.right) {
            traverseTree(node.right);
        }
    }

    return array;
};

BinaryTree.prototype.toString = function () {
    if (!this.root) {
        return '';
    }

    let result = '[';

    traverseTree(this.root);

    function traverseTree(node) {

        if (node.left) {
            traverseTree(node.left);
        }

        result += `${node.value}, `;

        if (node.right) {
            traverseTree(node.right);
        }
    }

    result = result.slice(0, -2);

    return result += ']';
};

BinaryTree.prototype.getSize = function () {
    if (!this.root) {
        return 0;
    } else {
        let size = 1;
        let left = 0;
        let right = 0;

        traverseTree(this.root);

        function traverseTree(node) {
            if (node.left) {
                traverseTree(node.left);
                left++;
            }

            if (node.right) {
                traverseTree(node.right);
                right++;
            }
        }

        return size + left + right;
    }
};

BinaryTree.prototype.getHeight = function () {
    let heightLeft = 0;
    let heightRight = 0;

    if (!this.root) {
        return 0;
    }

    if (this.root.left) {
        heightLeft = getNodeSize(this.root.left);
    }

    if (this.root.right) {
        heightRight = getNodeSize(this.root.right);
    }

    if (heightLeft > heightRight) {
        return 1 + heightLeft;
    } else {
        return 1 + heightRight;
    }

    function getNodeSize(node) {
        let size = 1;
        let left = 0;
        let right = 0;

        traverseTree(node);

        function traverseTree(node) {
            if (node.left) {
                traverseTree(node.left);
                left++;
            }

            if (node.right) {
                traverseTree(node.right);
                right++;
            }
        }

        return size + left + right;
    }
};


BinaryTree.prototype.remove = function (value) {
    if (!this.root) {
        return;
    }

    if (!value) {
        return;
    }

    this.root = removeNode(this.root, value);

    return this.root;
};

let removeNode = function (currentNode, value) {
    if (!currentNode) {
        currentNode = this.root;
    }

    if (currentNode.value === value) {
        if (!currentNode.left && !currentNode.right) {

            return null;
        } else if (!currentNode.right) {

            return currentNode.left;
        } else if (!currentNode.left) {

            return currentNode.right;
        } else {
            let leftMin = getMin(currentNode.right);
            currentNode.value = leftMin.value;
            currentNode.right = removeNode(currentNode.right, leftMin.value);

            return currentNode;
        }
    } else if (value < currentNode.value) {
        currentNode.left = removeNode(currentNode.left, value);

        return currentNode;
    } else if (value > currentNode.value) {
        currentNode.right = removeNode(currentNode.right, value);

        return currentNode;
    }
};

let getMin = function (node) {
    if (!node.left) {
        return node;
    }

    if (node.left) {
        return getMin(node.left);
    }

    return node.value;
};

BinaryTree.prototype.setBalance = function () {
    let array = this.toArray();
    let start = 0;
    let end = array.length - 1;
    this.root = createBalancedTree(array, start, end);

    return this.root;
};

function createBalancedTree(array, start, end) {
    if (end < start) {
        return null;
    }

    const middle = Math.floor((start + end) / 2);
    const node = new Node(array[middle]);
    node.left = createBalancedTree(array, start, middle - 1);
    node.right = createBalancedTree(array, middle + 1, end);

    return node;
}
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

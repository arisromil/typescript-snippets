// linked table type in TypeScript
interface ListNode<T> {
    data: T;
    next: ListNode<T> | null;
}

interface LinkedList<T> {
    head: ListNode<T> | null;
    tail: ListNode<T> | null;
    length: number;
    get(index: number): ListNode<T> | null;
    insert(index: number, value: T): boolean;
    remove(index: number): ListNode<T> | null;
}

interface TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
}

interface BinaryTree<T> {
    root: TreeNode<T> | null;
    insert(node: TreeNode<T>): void;
    find(value: T): TreeNode<T> | null;
}

//  types that represent JSON data
type JSONValue =
    | string
    | number
    | boolean
    | null
    | { [property: string]: JSONValue }
    | JSONValue[];

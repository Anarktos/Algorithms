const middleNode = (head) => {
    let A = [head];
    while (A[A.length - 1].next != null)
        A.push(A[A.length - 1].next);
    return A[Math.floor(A.length / 2)];
}

console.log(middleNode([1, 2, 3, 4, 5]));
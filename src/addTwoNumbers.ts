class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, plus: number = 0): ListNode | null {
    if (l1 == null && l2 == null && plus == 0) return null;

    const sum = plus + (l1?.val ?? 0) + (l2?.val ?? 0);
    return new ListNode(
        sum % 10,
        addTwoNumbers(l1?.next ?? null, l2?.next ?? null, sum > 9 ? 1 : 0)
    );

    // if (l1 == null && l2 == null && plus == 0) return null;
    //
    // const sum = plus + (l1?.val ?? 0) + (l2?.val ?? 0);
    // console.log(sum, plus);
    // return new ListNode(
    //     sum > 9 ? sum - 10 : sum,
    //     addTwoNumbers(l1?.next ?? null, l2?.next ?? null, sum > 9 ? parseInt(sum / 10) : 0)
    // );

    // let l1current: ListNode | null = l1;
    // let l2current: ListNode | null = l2;
    // let l3: ListNode | null = null;
    // let array: number[] = [];
    // let plus: number = 0;
    // while (l1current || l2current) {
    //     let sum: number = plus + (l1current?.val ?? 0) + (l2current?.val ?? 0);
    //     plus = sum >= 10 ? 1 : 0;
    //     array.push(sum % 10);
    //     l2current = l2current?.next ?? null;
    //     l1current = l1current?.next ?? null;
    // }
    // if (plus) array.push(plus);
    // array.reverse();
    // for (let i=0; i<array.length; i++) {
    //     l3 = new ListNode(array[i], l3);
    // }
    // return l3
}

/**
 * ****************************************|  TESTS  |***************************************************
 */
function makeListsNodes(i1: number, i2: number): ListNode[][] {
    const a1: ListNode[] = makeListNodes(i1)
    const a2: ListNode[] = makeListNodes(i2)
    return [a1, a2];
}

function makeListNodes(n: number): ListNode[] {
    const listNodes: ListNode[] = Array.from(n.toString())
        .reverse()
        .map((n) => new ListNode(parseInt(n), null));
    for (let i = 0; i < listNodes.length; i++) {
        if ( i !== 0) {
            listNodes[i].next = listNodes[i - 1];
        }
    }
    return listNodes.reverse();
}

// let [a1, a2] = makeListsNodes(0, 0);
// let [a1, a2] = makeListsNodes(243, 564);
let [a1, a2] = makeListsNodes(99999999, 9999);

const r = addTwoNumbers(a1[0], a2[0]);
let i: ListNode | null = r;
const result = []
while (i) {
    result.push(i?.val ?? null);
    i = i.next;
}
console.log(r);
console.log(result);
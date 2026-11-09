# COMP2521 复习系统 — Slides Data

> 来源：当前上传的 COMP2521 lecture slides（优先 26T3，重复的 25T3 仅作补充）。内容按主题去重。
> **使用方式**：每节仅三类：`知识点`、`伪代码`、`问题`。这里的「问题」是从 slides 提炼的自测问题/算法题型，**不是 Lab 或 Past Exam 原题**。伪代码是面向复习的整理版，不一定逐字复制课件。
> 状态：`[ ]` 未掌握；`[x]` 已掌握。图示例题可回看所列 PDF。所有代码均是抽象伪代码，`neighbours(v)` 表示邻居迭代，不与特定 C Graph ADT 绑定。

---

## W1 — Recursion
**来源**：`week01lec01-recursion.pdf`

### 知识点
- [ ] Recursion = 解决更小的同类问题；必须有 **base case** 和 **recursive step**。
- [ ] 函数栈：递归调用先深入，返回时从最深一层往上计算。
- [ ] 对链表递归：`head == NULL` 是常见 base case；修改链表结构时必须接回返回的指针。
- [ ] Helper function：在主函数签名不变时传递额外参数（如 previous、depth、count）。
- [ ] 递归和循环的区别、递归栈空间风险。

### 伪代码
```text
factorial(n):
    if n <= 1: return 1
    return n * factorial(n - 1)

listSum(head):
    if head == NULL: return 0
    return head.value + listSum(head.next)

listAppend(head, value):
    if head == NULL: return newNode(value)
    head.next = listAppend(head.next, value)
    return head
```

### 问题
- [ ] 识别一段递归的 base case 与递归步骤。
- [ ] 追踪递归调用顺序与返回值。
- [ ] 写 list sum / append / count / search 等递归模式。
- [ ] 解释为什么递归修改链表需要 `head.next = ...`。

## W1 — Analysis & Searching
**来源**：`week01lec02-analysis.pdf`

### 知识点
- [ ] Time complexity 是输入规模的函数；通常重点考虑 worst case。
- [ ] Big-O：忽略常数和低阶项；常见级别 `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n²)`, `O(2^n)`。
- [ ] 连续循环相加，嵌套循环相乘；每次规模减半通常是 logarithmic。
- [ ] 递归复杂度要看每层工作量和递归次数。
- [ ] Linear search 不要求有序；Binary search 要求有序。
- [ ] Empirical vs theoretical analysis；多个变量使用 `V`、`E`、`n`、`m` 区分。

### 伪代码
```text
linearSearch(A, target):
    for i = 0 .. n-1:
        if A[i] == target: return i
    return NOT_FOUND

binarySearch(sorted A, target):
    lo = 0; hi = n-1
    while lo <= hi:
        mid = lo + (hi-lo)/2
        if A[mid] == target: return mid
        if A[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return NOT_FOUND
```

### 问题
- [ ] 计算不同循环与递归程序的 Big-O。
- [ ] 区分 best / average / worst case。
- [ ] 解释 binary search 为什么是 `O(log n)`。
- [ ] 给定两种实现，比较规模增大后的运行时间。

## Sorting（课程总复习范围；缺少独立 Sorting Slides）
**来源**：`week10lec01-course-review-exam.pdf`，Sorting syllabus。下列是标准算法的复习版，不冒充原课件完整提取。

### 知识点
- [ ] Selection sort：每轮选择最小值；`O(n²)`，通常不稳定，in-place。
- [ ] Bubble sort：交换相邻逆序；`O(n²)`，有提前退出时最好 `O(n)`，稳定。
- [ ] Insertion sort：将当前元素插入有序前缀；最坏 `O(n²)`、最好 `O(n)`，稳定、adaptive。
- [ ] Merge sort：分治合并；`O(n log n)`，通常额外 `O(n)` 空间，稳定。
- [ ] Quick sort：partition + 递归；平均 `O(n log n)`，最坏 `O(n²)`，通常不稳定。
- [ ] Radix sort：按位稳定排序；取决于位数、基数和输入数目，非比较排序。
- [ ] Stable、adaptive、in-place、comparison vs non-comparison。

### 伪代码
```text
selectionSort(A):
    for i = 0 .. n-2:
        min = index of minimum in A[i..n-1]
        swap(A[i], A[min])

bubbleSort(A):
    repeat passes over adjacent pairs:
        swap if out of order
        stop early if no swaps

insertionSort(A):
    for i = 1 .. n-1:
        key = A[i]; j = i-1
        while j >= 0 and A[j] > key:
            A[j+1] = A[j]; j--
        A[j+1] = key

mergeSort(A):
    if length <= 1: return
    split A in halves; recursively sort both halves
    merge both sorted halves

quickSort(A):
    if length <= 1: return
    p = partition around pivot
    recursively quickSort(left of p, right of p)

radixSort(A):
    for each digit from least significant to most significant:
        stable-sort all items by that digit
```

### 问题
- [ ] 手算各排序中间状态、交换/比较次数。
- [ ] 对照排序复杂度、stability、adaptability 和空间。
- [ ] 解释 merge vs quick、pivot 与 partition。

## W3 — ADTs, Stack, Queue, Set
**来源**：`week03lec01-adts.pdf`

### 知识点
- [ ] Abstraction 隐藏实现细节；ADT 说明「能做什么」，而非「如何存储」。
- [ ] Interface (.h) vs implementation (.c)；opaque pointer / information hiding。
- [ ] Stack：LIFO；push / pop / peek / isEmpty；递归 DFS 可用栈模拟。
- [ ] Queue：FIFO；enqueue / dequeue / isEmpty；BFS 使用队列。
- [ ] Set：元素唯一；insert / contains / delete；可用 array、list、BST、hash 实现。
- [ ] 具体复杂度取决于底层表示，而不是 ADT 名称。

### 伪代码 / ADT 操作
```text
Stack: new, free, push(item), pop(), peek(), isEmpty()
Queue: new, free, enqueue(item), dequeue(), isEmpty()
Set:   new, free, insert(item), contains(item), delete(item), size()

stackPush(S, x): add x to top
stackPop(S):     remove and return top
queueEnqueue(Q,x): add x to rear
queueDequeue(Q):  remove and return front
```

### 问题
- [ ] 给定 push/pop 或 enqueue/dequeue 操作，求输出顺序。
- [ ] 选 Stack vs Queue vs Set，并说明原因。
- [ ] 画 ADT 接口与内部结构，比较数组/链表版本。

## W3 — Trees & BST
**来源**：`week03lec02-bsts.pdf`

### 知识点
- [ ] Root / parent / child / leaf / subtree / height / depth / level。
- [ ] Binary tree 每节点最多两个孩子；BST：左子树更小、右子树更大（重复值规则依实现）。
- [ ] Preorder = root,left,right；Inorder = left,root,right；Postorder = left,right,root。
- [ ] BST Inorder 得到升序序列。
- [ ] Search/Insert/Delete 通常 `O(h)`；平衡时 `O(log n)`，退化时 `O(n)`。
- [ ] 删除：无孩子、一个孩子、两个孩子（join / successor / predecessor）。

### 伪代码
```text
bstSearch(t, x):
    if t == NULL: return false
    if x == t.value: return true
    if x < t.value: return bstSearch(t.left, x)
    return bstSearch(t.right, x)

bstInsert(t, x):
    if t == NULL: return newNode(x)
    if x < t.value: t.left = bstInsert(t.left, x)
    else if x > t.value: t.right = bstInsert(t.right, x)
    return t

inorder(t):
    if t == NULL: return
    inorder(t.left); visit(t.value); inorder(t.right)

preorder(t):
    if t == NULL: return
    visit(t.value); preorder(t.left); preorder(t.right)

postorder(t):
    if t == NULL: return
    postorder(t.left); postorder(t.right); visit(t.value)

bstDelete(t, x):
    if t == NULL: return NULL
    if x < t.value: t.left = bstDelete(t.left, x)
    else if x > t.value: t.right = bstDelete(t.right, x)
    else:
        if t.left == NULL: return right subtree after freeing t
        if t.right == NULL: return left subtree after freeing t
        replace t.value with inorder successor (minimum in right subtree)
        t.right = bstDelete(t.right, successorValue)
    return t

bstMin(t):
    while t.left != NULL: t = t.left
    return t.value

bstJoin(left, right):
    if left == NULL: return right
    if right == NULL: return left
    make an appropriate boundary node (max of left or min of right) root
    connect remaining left and right subtrees
    return root
```

### 问题
- [ ] 从插入顺序画 BST；找 min/max、leaf、height。
- [ ] 按 preorder/inorder/postorder 写遍历序列。
- [ ] 写 Insert / Search / Delete / Join 递归模板。
- [ ] 两个孩子的删除为什么不能只 `free(t)`？

## W4 — BST Balancing & AVL
**来源**：`week04lec01-balancing-bsts.pdf`；`week04lec01-avl-trees.pdf`

### 知识点
- [ ] Height of empty tree 在课件约定为 `-1`；叶节点高度 `0`。
- [ ] Size-balanced：每节点 `|size(left)-size(right)| <= 1`。
- [ ] Height-balanced：每节点 `|height(left)-height(right)| <= 1`；AVL 是 height-balanced，不保证 size-balanced。
- [ ] Rotation 保留 BST 中序排序；Left / Right rotation。
- [ ] AVL insertion / deletion 在回溯时更新高度并修复不平衡。
- [ ] 四种情形 LL、RR、LR、RL；双旋转 = 先转子节点，再转当前节点。
- [ ] AVL search/insert/delete `O(log n)`；普通 BST 最差 `O(n)`。
- [ ] Balancing methods：root insertion、partition、rebalancing、randomised insertion（按课件讲法）。

### 伪代码
```text
height(t):
    if t == NULL: return -1
    return 1 + max(height(t.left), height(t.right))

size(t):
    if t == NULL: return 0
    return 1 + size(t.left) + size(t.right)

rotateRight(t):
    x = t.left
    t.left = x.right
    x.right = t
    return x

rotateLeft(t):
    x = t.right
    t.right = x.left
    x.left = t
    return x

avlRebalance(t):
    update height information
    balance = height(t.left) - height(t.right)
    if balance > 1:
        if height(t.left.left) < height(t.left.right):
            t.left = rotateLeft(t.left)    // LR
        return rotateRight(t)              // LL or LR
    if balance < -1:
        if height(t.right.right) < height(t.right.left):
            t.right = rotateRight(t.right) // RL
        return rotateLeft(t)               // RR or RL
    return t

avlInsert(t, x):
    if t == NULL: return newNode(x)
    insert x recursively into left/right using BST order
    return avlRebalance(t)

avlDelete(t, x):
    perform normal BST deletion recursively
    if resulting t == NULL: return NULL
    return avlRebalance(t)

partition(t, k):
    // place rank-k item (0-indexed) at subtree root using rotations
    leftSize = size(t.left)
    if k < leftSize:
        t.left = partition(t.left, k)
        return rotateRight(t)
    if k > leftSize:
        t.right = partition(t.right, k-leftSize-1)
        return rotateLeft(t)
    return t
```

### 问题
- [ ] 给树判断 size-balanced / height-balanced（注意每个节点都要满足）。
- [ ] 插入数字后判断 LL / RR / LR / RL 并画旋转结果。
- [ ] 为什么 AVL 比普通 BST 更稳定？
- [ ] 解释 `O(h)` 与 `O(log n)` 的区别。

## W4 — Graph Fundamentals / Graph ADT
**来源**：`week04lec02-graphs-intro(1).pdf`（26T3）；同名 25T3 版本作补充。

### 知识点
- [ ] Graph `G=(V,E)`；vertex、edge、degree、neighbour、path、cycle、connected component、spanning tree。
- [ ] Directed vs undirected；weighted vs unweighted；loops / multigraph。
- [ ] Adjacency matrix：空间 `O(V²)`、查边 `O(1)`、遍历全部邻居 `O(V)`。
- [ ] Adjacency list：空间 `O(V+E)`、遍历邻居 `O(deg(v))`；查具体边常需扫描邻接表。
- [ ] Edge list：存储边集合，适合依权排序（Kruskal）。
- [ ] 无向图边 `v-w` 通常需两侧维护；有向图仅从源点指向终点。
- [ ] Sparse vs dense；图是否有序取决于表示和遍历约定。

### 伪代码 / 接口
```text
GraphNew(V): create V vertices
GraphInsertEdge(G, v, w): add an edge
GraphRemoveEdge(G, v, w): remove an edge
GraphIsAdjacent(G, v, w): whether edge exists
GraphNumVertices(G): return V
GraphNumEdges(G): return E
GraphFree(G): release memory

adjacencyMatrixInsert(G, v, w):
    adj[v][w] = true
    if undirected: adj[w][v] = true

adjacencyListInsert(G, v, w):
    add node w to adj[v]
    if undirected: add node v to adj[w]
```

### 问题
- [ ] 从图绘制邻接矩阵 / 邻接表 / 边列表。
- [ ] 解释 `V`、`E`、degree、connected / cyclic。
- [ ] 给定存储方式，分析 insert/check edge / traversing neighbours 的复杂度。

## W5 — BFS / DFS / FindPath
**来源**：`week05lec01-graph-traversal(1).pdf`（26T3）；25T3 版本辅助。

### 知识点
- [ ] BFS = Queue + visited，按到起点的边数层层探索；无权图最短路径。
- [ ] DFS = recursion / Stack + visited，沿一条路深入再回溯。
- [ ] `pred[w] = v` 记录 `w` 是从哪个顶点到达，用于还原路径；初始 `-1`。
- [ ] visited 通常在入队时设置，防止重复入队。
- [ ] BFS / DFS 遍历复杂度：adjacency list `O(V+E)`；matrix `O(V²)`。
- [ ] BFS tree / DFS tree 是遍历过程中使用的边组成的树；连通图上是 spanning tree。
- [ ] DFS can check reachability，但不保证找到最少边数路径。

### 伪代码
```text
bfs(G, src):
    visited[*] = false; pred[*] = -1
    Q = empty queue
    visited[src] = true
    enqueue(Q, src)
    while Q not empty:
        v = dequeue(Q)
        for each neighbour w of v:
            if not visited[w]:
                visited[w] = true
                pred[w] = v
                enqueue(Q, w)
    return pred

dfs(G, src):
    visited[*] = false
    dfsRec(src)

dfsRec(v):
    visited[v] = true
    for each neighbour w of v:
        if not visited[w]: dfsRec(w)

hasPath(G, src, dest):
    visited[*] = false
    return dfsPath(src, dest)

dfsPath(v, dest):
    if v == dest: return true
    visited[v] = true
    for each neighbour w of v:
        if not visited[w] and dfsPath(w, dest): return true
    return false

findPath(G, src, dest):
    run BFS from src, recording pred[]
    if dest not visited: return NO_PATH
    path = empty list
    for v = dest; v != src; v = pred[v]: prepend v to path
    prepend src to path
    return path

iterativeDfs(G, src):
    stack = [src]
    while stack not empty:
        v = pop(stack)
        if visited[v]: continue
        visited[v] = true
        for each neighbour w of v:
            if not visited[w]: push(stack, w)
```

### 问题
- [ ] 按邻居优先级手算 BFS / DFS 访问顺序。
- [ ] 写 `hasPath` / `findPath`，解释 `pred` 的意义。
- [ ] 找 source 到 destination 的无权最短路径。
- [ ] BFS / DFS spanning tree 与原图有什么区别？
- [ ] DFS 查到目标后如何提前返回？

## W5 — Graph Problems (新增课件，重点)
**来源**：`week05lec02-graph-problems.pdf`（26T3）

### 知识点
- [ ] Undirected cycle：不能把访问的 parent edge 当作环；还必须检查**每个连通分量**。
- [ ] Connected components：对每个未访问顶点做一次 BFS/DFS，次数 = components 数量。
- [ ] Hamiltonian path/circuit：经过每个**顶点**恰一次（circuit 最后回到起点），一般难求。
- [ ] Eulerian path/circuit：每条**边**恰一次；无向连通部分奇度顶点个数为 0 → Euler circuit、2 → Euler path（忽略孤立顶点）；其他不行。
- [ ] Hamiltonian vs Eulerian：vertex once vs edge once。
- [ ] 图不连通时不能只从任意单个起点判定全图是否有环。

### 伪代码
```text
hasCycleUndirected(G):
    visited[*] = false
    for each vertex v:
        if not visited[v]:
            if dfsCycle(v, parent=NONE): return true
    return false

dfsCycle(v, parent):
    visited[v] = true
    for each neighbour w of v:
        if not visited[w]:
            if dfsCycle(w, v): return true
        else if w != parent:
            return true
    return false

countComponents(G):
    visited[*] = false; count = 0
    for each vertex v:
        if not visited[v]:
            count += 1
            dfsMarkAllReachable(v)
    return count

dfsMarkAllReachable(v):
    visited[v] = true
    for each neighbour w of v:
        if not visited[w]: dfsMarkAllReachable(w)

hasHamiltonianPath(G):
    for each possible start:
        backtrack marking vertices used exactly once
        if number used == V: return true
    return false

hasEulerianTrailUndirected(G):
    ensure vertices of nonzero degree are connected
    odd = count vertices with odd degree
    return odd == 0 or odd == 2
```

### 问题
- [ ] 为什么 `if visited[w] return true` 对无向图 Cycle 不对？
- [ ] 为什么只从 vertex 0 做 DFS 可能漏环？
- [ ] 写 `hasCycle(G)` 和 `numConnectedComponents(G)`。
- [ ] 判断示例图是否有 Hamiltonian / Eulerian path/circuit。
- [ ] 通过顶点 degree 判断 Euler path/circuit 是否可能。

## W5 — Directed / Weighted Graphs
**来源**：`week05lec02-directed-weighted-graphs(1).pdf`（26T3）

### 知识点
- [ ] Directed edge `v -> w` 不等于 `w -> v`。
- [ ] In-degree = incoming edges；out-degree = outgoing edges。
- [ ] Directed path / cycle，reachable from v；strongly connected 与 SCC。
- [ ] Weighted edge 包含 cost/weight；无权最短路径和加权最短路径不是同一问题。
- [ ] 图表示仍可使用 matrix、adjacency list、edge array，但有向性和权重必须存入。

### 伪代码
```text
inDegree(G, v): count edges (w -> v)
outDegree(G, v): count edges (v -> w)
weightedPathCost(path): sum weights of its edges
```

### 问题
- [ ] 手算每个顶点的 in-degree / out-degree。
- [ ] 判断 directed reachability / cycle / SCC。
- [ ] 把 directed weighted graph 表成 matrix / list。

## W7 — Directed Cycle & Transitive Closure
**来源**：`week07lec01-digraph-algorithms(1).pdf`（26T3）

### 知识点
- [ ] 有向图 cycle checking 不能沿用 undirected parent 检查。
- [ ] DFS 使用 3 状态：unvisited / visiting (当前递归栈) / finished；遇到 visiting 顶点是 back edge，也就是 cycle。
- [ ] Transitive Closure `tc[v][w]` 表示 v 是否可达 w。
- [ ] Warshall：允许依次使用各个顶点作为中间节点，时间 `O(V³)`、空间 `O(V²)`。
- [ ] 根据可达性查询需求选择一次 DFS/BFS 或预计算 transitive closure。
- [ ] BFS 在 web crawling 中可用 visited set（未知顶点全集），不是定长数组。

### 伪代码
```text
hasCycleDirected(G):
    state[*] = UNVISITED
    for each vertex v:
        if state[v] == UNVISITED and dfsDirectedCycle(v): return true
    return false

dfsDirectedCycle(v):
    state[v] = VISITING
    for each outgoing neighbour w of v:
        if state[w] == VISITING: return true
        if state[w] == UNVISITED and dfsDirectedCycle(w): return true
    state[v] = FINISHED
    return false

transitiveClosure(A):
    tc = copy(A)
    for v = 0 .. V-1: tc[v][v] = true  // if zero-length reachability counts
    for k = 0 .. V-1:
        for i = 0 .. V-1:
            for j = 0 .. V-1:
                tc[i][j] = tc[i][j] OR (tc[i][k] AND tc[k][j])
    return tc

webCrawl(startUrl, limit):
    visited = set containing startUrl
    Q = queue containing startUrl
    while Q not empty and pagesProcessed < limit:
        page = dequeue(Q); process(page)
        for each link in page:
            if link not in visited:
                add link to visited; enqueue(Q, link)
```

### 问题
- [ ] 给 digraph 判断是否有 cycle，并写正确 DFS 伪代码。
- [ ] 为什么只用 `visited`（完成访问也算 visited）不能正确识别 directed cycle？
- [ ] 手算 Warshall 更新矩阵。
- [ ] 区分 direct edge vs reachable through multiple edges。

## W7 — Dijkstra（新增课件，重点）
**来源**：`week07lec01-dijkstras-algorithm.pdf`（26T3）

### 知识点
- [ ] Weighted shortest path 比较**权重和**，不是边数。
- [ ] Dijkstra 适用于**非负权重**；每轮选当前 dist 最小的未处理顶点。
- [ ] `dist[v]` 当前最短已知距离；`pred[v]` 当前最优路径的前驱；未可达初始化 `∞` 和 `-1`。
- [ ] Edge relaxation：如果 `dist[v] + weight(v,w) < dist[w]`，更新 `dist[w]` 和 `pred[w]`。
- [ ] 根据 pred 反向回溯还原路径；对不可达目标必须单独处理。
- [ ] Dense/simple 实现与 priority queue 实现复杂度不同；常见 `O(V²)` vs `O((V+E) log V)`（二叉堆、邻接表）。
- [ ] Floyd–Warshall / Bellman–Ford 等对比算法是拓展项；按课件范围理解用途。

### 伪代码
```text
dijkstra(G, src):
    dist[*] = INFINITY; pred[*] = -1
    dist[src] = 0
    unvisited = set of all vertices
    while unvisited not empty:
        v = unvisited vertex with minimum dist[v]
        remove v from unvisited
        if dist[v] == INFINITY: break
        for each outgoing edge (v, w, weight):
            if w in unvisited and dist[v] + weight < dist[w]:
                dist[w] = dist[v] + weight
                pred[w] = v
    return dist, pred

reconstructPath(pred, src, dest):
    if src == dest: return [src]
    if pred[dest] == -1: return NO_PATH
    result = []
    v = dest
    while v != src:
        prepend v to result
        v = pred[v]
        if v == -1: return NO_PATH
    prepend src to result
    return result
```

### 问题
- [ ] 手动更新 dist / pred 表。
- [ ] Dijkstra 和 BFS 的适用场景？
- [ ] 什么是 edge relaxation？为什么不能随意处理负边？
- [ ] 根据最终 pred 写 source → target 路径。
- [ ] 分析邻接矩阵与堆版本复杂度。

## W7 — MST / Kruskal / Prim
**来源**：`week07lec02-msts(1).pdf`（26T3）；另一版本内容重复。

### 知识点
- [ ] Spanning Tree：包含所有顶点、连通、无环；连通图上有 `V-1` 条边。
- [ ] MST：最小总边权的 spanning tree；不等于任意两点最短路径树。
- [ ] Kruskal：全图按最小边权顺序挑边，避免形成 cycle；可用 Union-Find。
- [ ] Prim：从一个顶点出发，每次挑跨越 tree 与外部的最小权边。
- [ ] Compare：Kruskal 以**边**为中心；Prim 以**不断扩展的树**为中心。
- [ ] 复杂度依图表示/排序/PQ/Union-Find 而定；Kruskal 常见 `O(E log E)`。

### 伪代码
```text
kruskalMST(G):
    mst = empty graph with V vertices
    makeSet(v) for every vertex v
    for edge (u,v,w) in increasing weight order:
        if find(u) != find(v):
            add edge to mst
            union(u,v)
        if mst has V-1 edges: break
    return mst  // for a connected input

primMST(G, start):
    inTree[*] = false
    inTree[start] = true
    mst = empty edges
    repeat until V-1 edges chosen:
        find minimum-weight edge (u,v)
            with inTree[u] and not inTree[v]
        add (u,v) to mst
        inTree[v] = true
    return mst

unionFind:
    makeSet(x): parent[x] = x
    find(x): follow parent pointers to representative
    union(x,y): merge the two representatives
```

### 问题
- [ ] 手算 Kruskal 和 Prim 选边顺序、总权重。
- [ ] 为什么 Kruskal 不能选成环的边？
- [ ] Prim 何时能连接未访问顶点？
- [ ] MST vs Dijkstra shortest path tree。

## W8 — Hash Tables / Maps / Sets / Counter
**来源**：`week08lec01-hash-tables(1).pdf`、`week08lec02-hash-table-applications(1).pdf`

### 知识点
- [ ] Map ADT：unique key -> value；insert、lookup、delete。
- [ ] Hash function 把 key 转为 table index；collision = 不同 key 的位置相同。
- [ ] Separate chaining：bucket 内存链表等；open addressing：同一表中探查。
- [ ] Linear probing、quadratic probing、double hashing；primary/secondary clustering。
- [ ] 删除 open addressing 元素时可能需要 tombstone，不能随便清成 empty。
- [ ] Load factor `α=n/tableSize`；resizing / rehash 保持性能。
- [ ] 平均 insert/search/delete 常见 `O(1)`；最坏可能 `O(n)`。
- [ ] Set 存 key 是否存在；Counter 存 key -> count；频率统计/去重/查重复。

### 伪代码
```text
hash(key, M): return hashValue(key) mod M

chainingInsert(table, key, value):
    i = hash(key, M)
    if key already in bucket[i]: replace value
    else: add (key,value) to bucket[i]

chainingLookup(table, key):
    i = hash(key, M)
    scan bucket[i] for key

linearProbingInsert(table, key, value):
    i = hash(key, M)
    while table[i] occupied by different key:
        i = (i+1) mod M
    insert/replace at i

linearProbingLookup(table, key):
    i = hash(key, M)
    while table[i] is not NEVER_USED:
        if table[i] is OCCUPIED with key: return value
        i = (i+1) mod M
    return NOT_FOUND

doubleHashProbe(key, step):
    return (h1(key) + step*h2(key)) mod M

counterAdd(counter, item):
    if item not in map: map[item] = 0
    map[item] += 1
```

### 问题
- [ ] 计算 hash index，模拟冲突处理、查找、删除。
- [ ] 为什么 linear probing 删除要 tombstone？
- [ ] 比较 chaining / linear / quadratic / double hashing。
- [ ] 使用 Map/Set/Counter 解决 duplicate / frequency 问题。

## W9 — Priority Queues / Heaps / Heap Sort
**来源**：`week09lec01-priority-queues(1).pdf`

### 知识点
- [ ] PQ 按 priority 而非插入时间输出；insert / delete-highest / peek。
- [ ] Heap 是 complete binary tree，满足 heap-order；max-heap / min-heap。
- [ ] 0-index 数组：parent `(i-1)//2`；children `2i+1` / `2i+2`。
- [ ] Insert 放末尾后 sift-up；delete root 用末尾替代后 sift-down。
- [ ] Heap peek `O(1)`；insert / remove `O(log n)`；heap construction 常见 `O(n)`。
- [ ] Heap sort `O(n log n)`；通常不稳定、in-place。

### 伪代码
```text
heapInsert(H, x):
    append x to end
    i = last index
    while i > 0 and H[parent(i)] < H[i]:
        swap(H[i], H[parent(i)])
        i = parent(i)

heapDeleteMax(H):
    answer = H[0]
    H[0] = remove last element
    i = 0
    while i has a child larger than H[i]:
        j = index of largest child
        swap(H[i], H[j]); i = j
    return answer

heapify(H):
    for i = last internal node down to 0:
        siftDown(H, i)

heapSort(A):
    build max heap
    for end = n-1 down to 1:
        swap(A[0], A[end])
        siftDown root within A[0..end-1]
```

### 问题
- [ ] 把堆画成数组或树，写 parent/child 下标。
- [ ] 模拟 heap insert、delete 和 heap sort。
- [ ] 区分 BST property 与 heap property。
- [ ] PQ 为什么适合 Dijkstra / Prim？

## W9 — Tries
**来源**：`week09lec02-tries(1).pdf`

### 知识点
- [ ] Trie 存字符串前缀，每条边一个字符；`finish` 表示单词结束。
- [ ] 字符串可为另一个字符串的前缀，`finish` 不等于 leaf。
- [ ] 固定字母表实现：`children[ALPHABET_SIZE]`，例如 26 个英文字母。
- [ ] Search/insert 访问约 `m` 个字符：常见 `O(m)`（m 为 key 长度）。
- [ ] 删除只清 finish 或清理无其他用途的尾部节点，不能破坏别的 key。
- [ ] 应用：prefix search、autocomplete、spell check；compressed trie 等变体。

### 伪代码
```text
trieInsert(root, word):
    node = root
    for char c in word:
        if node.child[c] == NULL: node.child[c] = newTrieNode()
        node = node.child[c]
    node.finish = true

trieSearch(root, word):
    node = root
    for char c in word:
        if node.child[c] == NULL: return false
        node = node.child[c]
    return node.finish

trieHasPrefix(root, prefix):
    follow prefix characters from root
    return all required child links exist

trieDelete(root, word):
    recursively navigate to end of word
    clear finish
    remove a node only if !finish and it has no children
```

### 问题
- [ ] 从字符串列表构造 Trie。
- [ ] 哪些节点必须有 finish 标记？
- [ ] 插入/查找/删除带公共前缀的单词。
- [ ] Trie vs hash table vs BST 的适用场景。

## W10 — Revision & Exam
**来源**：`week10lec01-course-review-exam(1).pdf`、`week10lect02-revision-25T3(1).pdf`

### 知识点
- [ ] 对每种数据结构能回答：representation、operations、complexity、applications。
- [ ] 汇总：Recursion / Complexity / Sorting / ADTs / Trees / Graphs / Hash / PQ-Heaps / Tries。
- [ ] Doubly linked list：`prev` + `next`，可以双向遍历；插删两端和中间需正确修改相邻指针。
- [ ] 编程题：明确函数输入输出、空结构、重复元素、内存管理、复杂度。
- [ ] 识别同一问题的不同解法：BFS/DFS、MST/shortest path、BST/AVL、Hash/Trie。

### 伪代码
```text
doublyInsertAfter(a, new):
    new.prev = a
    new.next = a.next
    if a.next != NULL: a.next.prev = new
    a.next = new
    update tail if necessary

doublyDelete(node):
    if node.prev != NULL: node.prev.next = node.next
    else: head = node.next
    if node.next != NULL: node.next.prev = node.prev
    else: tail = node.prev
    free(node)
```

### 问题
- [ ] 说出每种 ADT 的操作与复杂度。
- [ ] 选择最合适的算法/数据结构并解释。
- [ ] 识别考题中算法的前置条件和常见边界问题。
- [ ] 根据代码估算 Big-O，写出简短理由。

---

## 高优先级「做题模板」索引
- [ ] Recursive linked list: count / append / delete / reverse / helper
- [ ] BST: search / insert / delete / min / max / join / traversal
- [ ] AVL: rotate left/right / insert / rebalance
- [ ] Graph ADT: adjacency matrix / adjacency list
- [ ] BFS / DFS
- [ ] `hasPath` / `findPath` / BFS shortest path (unweighted)
- [ ] `hasCycle` (undirected，parent + all components)
- [ ] `countConnectedComponents`
- [ ] Hamiltonian vs Eulerian path/circuit
- [ ] `hasCycle` (directed，3-colour DFS)
- [ ] Transitive closure / Warshall
- [ ] Dijkstra / edge relaxation / path reconstruction
- [ ] Kruskal / Prim
- [ ] Hash collision handling / lookup / delete
- [ ] Heap insert / delete / sift up/down / heap sort
- [ ] Trie insert / search / delete / prefix
- [ ] Sorting 六种算法概念及模板

## 内容来源与完整性说明
1. 新上传的 `week05lec02-graph-problems.pdf` 和 `week07lec01-dijkstras-algorithm.pdf` 已单独纳入，不会漏掉 cycle/components/Hamiltonian/Eulerian/Dijkstra。
2. 重复命名的 `(1).pdf` 和早前版本按主题合并，没有重复创建两套目录；25T3/26T3 页码不必一致。
3. Sorting 只有 W10 syllabus，暂无单独 Sorting Slides：上面给的是基本算法复习版，**不是**从缺失 PDF 中逐字提取。
4. 这里追求**所有主要教学主题及典型算法题型覆盖**，并非逐张幻灯片的每个例子或所有实现细节逐字转录。课件里的不同实现、不同算法复杂度须以对应实现为准。
5. Lab / Practice / Past Exam 尚未导入原题；目前「问题」是自主复习检查题，**不代表课程原题**。
6. 无向图 `hasCycle` 与有向图 `hasCycle` 是不同模板，不能混用；无权 `findPath`（BFS）与加权最短路径（Dijkstra）不同。

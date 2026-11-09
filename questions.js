const COURSE_QUESTIONS = [
  {
    "id": "unsw-26t3-lab-01-1",
    "title": "Task 1 · Shifting an Array",
    "source": "Lab · Week 01",
    "topic": "C Revision",
    "type": "code",
    "prompt": "把数组原地向右循环移动 n 位。每右移一位，最后一个元素绕回开头。",
    "starter": "void shift(int arr[], int size, int n) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/1/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week01/downloads/files.zip",
    "rules": "n ≥ 0。",
    "example": {
      "input": "arr = [2, 5, 7]，n = 1",
      "output": "arr 变为 [7, 2, 5]"
    }
  },
  {
    "id": "unsw-26t3-lab-01-2",
    "title": "Task 2 · Shifting a Linked List",
    "source": "Lab · Week 01",
    "topic": "C Revision",
    "type": "code",
    "prompt": "把链表向右循环移动 n 位，返回新的头指针。",
    "starter": "struct node *shift(struct node *list, int n) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/1/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week01/downloads/files.zip",
    "rules": "n ≥ 0。只重接节点，不分配新节点，也不改节点里的值。",
    "example": {
      "input": "1 → 2 → 3，n = 1",
      "output": "3 → 1 → 2"
    }
  },
  {
    "id": "unsw-26t3-lab-01-3",
    "title": "Task 3 · Inserting into an Ordered Array",
    "source": "Lab · Week 01",
    "topic": "C Revision",
    "type": "code",
    "prompt": "把 value 插入递增数组，原地保持顺序。",
    "starter": "void insertOrdered(int arr[], int size, int value) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/1/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week01/downloads/files.zip",
    "rules": "下标 size 处有一个可写位置。",
    "example": {
      "input": "arr = [2, 5, 8]，value = 6",
      "output": "arr 变为 [2, 5, 6, 8]"
    }
  },
  {
    "id": "unsw-26t3-lab-01-4",
    "title": "Task 4 · Inserting into an Ordered Linked List",
    "source": "Lab · Week 01",
    "topic": "C Revision",
    "type": "code",
    "prompt": "把 value 插入有序链表，返回更新后的头指针。",
    "starter": "struct node *insertOrdered(struct node *list, int value) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/1/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week01/downloads/files.zip",
    "rules": "插入后保持升序。",
    "example": {
      "input": "2 → 5 → 8，value = 1",
      "output": "1 → 2 → 5 → 8"
    }
  },
  {
    "id": "unsw-26t3-lab-04-1",
    "title": "Task 1 · Sum Even Values in a BST",
    "source": "Lab · Week 04",
    "topic": "BST",
    "type": "code",
    "prompt": "返回 BST 里所有偶数节点值之和。",
    "starter": "int bstSumEvens(struct node *t) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week04/downloads/files.zip",
    "rules": "",
    "example": {
      "input": "偶数节点值为 4、16、24、26",
      "output": "70"
    }
  },
  {
    "id": "unsw-26t3-lab-04-2",
    "title": "Task 2 · Count Leaves in a BST",
    "source": "Lab · Week 04",
    "topic": "BST",
    "type": "code",
    "prompt": "数出 BST 有多少个叶节点。叶节点没有左孩子，也没有右孩子。",
    "starter": "int bstNumLeaves(struct node *t) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week04/downloads/files.zip",
    "rules": "完成后想一下最坏时间复杂度。",
    "example": {
      "input": "根为 5，左右孩子分别为 2 和 7",
      "output": "2"
    }
  },
  {
    "id": "unsw-26t3-lab-04-3",
    "title": "Task 3 · Find the Range of a BST",
    "source": "Lab · Week 04",
    "topic": "BST",
    "type": "code",
    "prompt": "求 BST 的最大值减最小值。空树返回 -1。",
    "starter": "int bstRange(struct node *t) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week04/downloads/files.zip",
    "rules": "完成后想一下最坏时间复杂度。",
    "example": {
      "input": "最小值 2，最大值 29",
      "output": "27"
    }
  },
  {
    "id": "unsw-26t3-lab-04-4",
    "title": "Task 4 · Delete the Leaves of a BST",
    "source": "Lab · Week 04",
    "topic": "BST",
    "type": "code",
    "prompt": "删除 BST 原本的所有叶节点，返回更新后的根。",
    "starter": "struct node *bstDeleteLeaves(struct node *t) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week04/downloads/files.zip",
    "rules": "释放被删除的节点。",
    "example": {
      "input": "根为 5，左右孩子为 2 和 7",
      "output": "只剩节点 5"
    }
  },
  {
    "id": "unsw-26t3-lab-04-5",
    "title": "Task 5 · Find the Closest Value in a BST",
    "source": "Lab · Week 04",
    "topic": "BST",
    "type": "code",
    "prompt": "返回 BST 中与 value 差值最小的节点值。并列时任选一个。",
    "starter": "int bstClosest(struct node *t, int value) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week04/downloads/files.zip",
    "rules": "树非空。满分要求最坏 O(h)，h 是树高。",
    "example": {
      "input": "树中有 3 和 11，value = 7",
      "output": "3 或 11"
    }
  },
  {
    "id": "unsw-26t3-lab-04-6",
    "title": "Task 6 · Level-Order Traversal of a BST",
    "source": "Lab · Week 04",
    "topic": "BST",
    "type": "code",
    "prompt": "按层从上到下、每层从左到右打印节点值。",
    "starter": "void bstLevelOrder(struct node *t) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week04/downloads/files.zip",
    "rules": "所有值在同一行，用空格分隔。 使用课程 Queue ADT，队列存节点指针。",
    "example": {
      "input": "根为 5，左右孩子为 3 和 7",
      "output": "5 3 7"
    }
  },
  {
    "id": "unsw-26t3-lab-04-7",
    "title": "Task 7 · Delete Nodes Below a Given Depth",
    "source": "Lab · Week 04",
    "topic": "BST",
    "type": "code",
    "prompt": "删除深度大于 depth 的节点，返回更新后的根。根的深度为 0。",
    "starter": "struct node *bstTrim(struct node *t, int depth) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week04/downloads/files.zip",
    "rules": "释放被删除的节点。depth = -1 时清空整棵树。",
    "example": {
      "input": "根为 5，左右孩子为 3 和 7，depth = 0",
      "output": "只剩节点 5"
    }
  },
  {
    "id": "unsw-26t3-lab-04-8",
    "title": "Task 8 · Count Common Values Between Two BSTs",
    "source": "Lab · Week 04",
    "topic": "BST",
    "type": "code",
    "prompt": "统计两棵 BST 共有多少个值。",
    "starter": "int numCommonValues(struct node *t1, struct node *t2) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week04/downloads/files.zip",
    "rules": "禁止数组和 malloc / calloc，包括间接调用。",
    "example": {
      "input": "第一棵含 {3, 7, 23}，第二棵含 {3, 17, 23}",
      "output": "2"
    }
  },
  {
    "id": "unsw-26t3-lab-05-1",
    "title": "Task 1 · Friending",
    "source": "Lab · Week 05",
    "topic": "Graph",
    "type": "code",
    "prompt": "给两个人建立双向好友关系。新建成功返回 true，已经是好友返回 false。",
    "starter": "bool FbFriend(Fb fb, char *name1, char *name2) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/5/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week05/downloads/files.zip",
    "rules": "两人存在且不同。邻接表按用户 ID 升序。",
    "example": {
      "input": "A 和 B 原先不是好友",
      "output": "返回 true，双方都能查到对方"
    },
    "context": "fb->names[id] 是用户名；fb->adj[id] 是该用户的邻接表。节点字段为 v（好友 ID）和 next。"
  },
  {
    "id": "unsw-26t3-lab-05-2",
    "title": "Task 2 · Counting Friends",
    "source": "Lab · Week 05",
    "topic": "Graph",
    "type": "code",
    "prompt": "返回指定用户的好友数量。",
    "starter": "int FbNumFriends(Fb fb, char *name) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/5/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week05/downloads/files.zip",
    "rules": "用户存在。",
    "example": {
      "input": "A 的好友是 B 和 C",
      "output": "2"
    },
    "context": "fb->names[id] 是用户名；fb->adj[id] 是该用户的邻接表。节点字段为 v（好友 ID）和 next。"
  },
  {
    "id": "unsw-26t3-lab-05-3",
    "title": "Task 3 · Finding Mutual Friends",
    "source": "Lab · Week 05",
    "topic": "Graph",
    "type": "code",
    "prompt": "返回两个人的共同好友名单。",
    "starter": "List FbMutualFriends(Fb fb, char *name1, char *name2) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/5/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week05/downloads/files.zip",
    "rules": "两人存在且不同。输出顺序不限。",
    "example": {
      "input": "A 的好友是 B、C；D 的好友是 B、E",
      "output": "[B]"
    },
    "context": "fb->names[id] 是用户名；fb->adj[id] 是该用户的邻接表。节点字段为 v（好友 ID）和 next。\nListNew() 创建列表，ListAppend(list, name) 添加名字。"
  },
  {
    "id": "unsw-26t3-lab-05-4",
    "title": "Task 4 · Unfriending",
    "source": "Lab · Week 05",
    "topic": "Graph",
    "type": "code",
    "prompt": "解除双向好友关系。删除成功返回 true，原先没有好友关系则返回 false。",
    "starter": "bool FbUnfriend(Fb fb, char *name1, char *name2) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/5/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week05/downloads/files.zip",
    "rules": "两人存在且不同。",
    "example": {
      "input": "A 和 B 原先是好友",
      "output": "返回 true，双方好友名单都移除对方"
    },
    "context": "fb->names[id] 是用户名；fb->adj[id] 是该用户的邻接表。节点字段为 v（好友 ID）和 next。"
  },
  {
    "id": "unsw-26t3-lab-05-5",
    "title": "Task 5 · Generating Friend Recommendations",
    "source": "Lab · Week 05",
    "topic": "Graph",
    "type": "code",
    "prompt": "把好友的好友写入 recs，并返回推荐人数。每条记录含姓名和共同好友数。",
    "starter": "int FbFriendRecs1(Fb fb, char *name, struct recommendation recs[]) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/5/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week05/downloads/files.zip",
    "rules": "排除本人及现有好友。共同好友数降序，并列顺序不限。",
    "example": {
      "input": "A 只认识 B，B 还认识 C",
      "output": "推荐 C，共同好友数 1"
    },
    "context": "fb->names[id] 是用户名；fb->adj[id] 是该用户的邻接表。节点字段为 v（好友 ID）和 next。"
  },
  {
    "id": "unsw-26t3-lab-07-1",
    "title": "Task 1 · BFS Tree",
    "source": "Lab · Week 07",
    "topic": "Graph",
    "type": "code",
    "prompt": "从 src 开始做 BFS，把每条首次发现新顶点的边放入新的图并返回。",
    "starter": "Graph bfsTree(Graph g, int src) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/7/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week07/downloads/files.zip",
    "rules": "使用邻接矩阵。多个邻点时优先编号小的；原图连通，至少两个顶点。",
    "example": {
      "input": "三角形 0—1、0—2、1—2，src = 0",
      "output": "树边 0—1、0—2"
    }
  },
  {
    "id": "unsw-26t3-lab-07-2",
    "title": "Task 2 · DFS Tree",
    "source": "Lab · Week 07",
    "topic": "Graph",
    "type": "code",
    "prompt": "从 src 开始做递归 DFS，返回由发现边构成的新图。",
    "starter": "Graph dfsTree(Graph g, int src) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/7/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week07/downloads/files.zip",
    "rules": "使用邻接表。优先访问编号小的邻点；原图连通，至少两个顶点。",
    "example": {
      "input": "三角形 0—1、0—2、1—2，src = 0",
      "output": "树边 0—1、1—2"
    }
  },
  {
    "id": "unsw-26t3-lab-07-3",
    "title": "Task 3 · Find the Shortest Path",
    "source": "Lab · Week 07",
    "topic": "Graph",
    "type": "code",
    "prompt": "把 src 到 dest 的一条最短路径写入 path，返回写入的顶点数。",
    "starter": "int shortestPath(Graph g, int src, int dest, int path[]) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/7/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week07/downloads/files.zip",
    "rules": "使用邻接表。路径含首尾顶点；无路返回 0，并列可任选。",
    "example": {
      "input": "0—6—1—10 是 0 到 10 的最短路径",
      "output": "path = [0, 6, 1, 10]，返回 4"
    }
  },
  {
    "id": "unsw-26t3-lab-07-4",
    "title": "Task 4 · Find a Cycle",
    "source": "Lab · Week 07",
    "topic": "Graph",
    "type": "code",
    "prompt": "找任意一个环，把顶点依次写入 path，并返回写入的顶点数。",
    "starter": "int cycle(Graph g, int path[]) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/7/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week07/downloads/files.zip",
    "rules": "使用邻接矩阵。起点要在末尾再出现一次；无环返回 0。",
    "example": {
      "input": "三角形 0—1、1—2、2—0",
      "output": "path 可以是 [0, 1, 2, 0]，返回 4"
    }
  },
  {
    "id": "unsw-26t3-lab-07-5",
    "title": "Task 5 · Find the Furthest Vertex",
    "source": "Lab · Week 07",
    "topic": "Graph",
    "type": "code",
    "prompt": "返回离 src 最远的可达顶点及其距离，填入 result.vertex 和 result.distance。",
    "starter": "struct result furthestVertex(Graph g, int src) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/7/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week07/downloads/files.zip",
    "rules": "使用邻接矩阵。并列时任选一个。",
    "example": {
      "input": "0—1—2，src = 0",
      "output": "vertex = 2，distance = 2"
    }
  },
  {
    "id": "unsw-26t3-lab-07-6",
    "title": "Task 6 · Find the Largest Component",
    "source": "Lab · Week 07",
    "topic": "Graph",
    "type": "code",
    "prompt": "找顶点数最多的连通分量，把它的顶点写入 component，返回数量。",
    "starter": "int largestComponent(Graph g, int component[]) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/7/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week07/downloads/files.zip",
    "rules": "使用邻接表。顶点顺序不限，并列任选。",
    "example": {
      "input": "分量分别为 {0, 1, 2} 和 {3, 4}",
      "output": "写入 0、1、2，返回 3"
    }
  },
  {
    "id": "unsw-26t3-lab-08-1",
    "title": "Task 1 · Finding a Minimum Spanning Tree",
    "source": "Lab · Week 08",
    "topic": "MST",
    "type": "code",
    "prompt": "返回一张新图，表示原图的一棵最小生成树。",
    "starter": "Graph GraphMst(Graph g) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/8/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week08/downloads/files.zip",
    "rules": "不改原图。无生成树返回 NULL，并列任选。",
    "example": {
      "input": "边 0—1 重 5，0—2 重 4，1—2 重 3",
      "output": "选 0—2 和 1—2，总权重 7"
    }
  },
  {
    "id": "unsw-26t3-lab-08-2",
    "title": "Task 2 · Finding the Cheapest Power Grid!",
    "source": "Lab · Week 08",
    "topic": "MST",
    "type": "code",
    "prompt": "把让所有城市通电的最低成本电线方案写入 powerLines，返回写入条数。",
    "starter": "int planGrid1(struct place cities[], int numCities,\n              struct place powerPlant,\n              struct powerLine powerLines[]) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/8/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week08/downloads/files.zip",
    "rules": "城市与城市、城市与电厂之间可以连线。按平面欧氏距离计成本，并列任选。",
    "example": {
      "input": "电厂 (0,0)，两座城市 (1,0)、(3,0)",
      "output": "电厂接近处城市，再连接两城，总长度 3"
    },
    "context": "struct place 提供 name、x、y。struct powerLine 的两个端点是 p1 和 p2。powerLines 已有足够空间。"
  },
  {
    "id": "unsw-26t3-lab-09-1",
    "title": "Task 1 · Inserting into a Hash Table",
    "source": "Lab · Week 09",
    "topic": "Hash Table",
    "type": "code",
    "prompt": "实现线性探测插入。相同 key 已存在时覆盖它的 value。",
    "starter": "void HashTableInsert(HashTable table, int key, int value) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/9/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week09/downloads/files.zip",
    "rules": "扩容由起始代码处理。哈希位置为 key % 槽数。",
    "example": {
      "input": "5 个槽，key 1 已在槽 1，插入 key 6",
      "output": "若槽 2 为空，把 key 6 放到槽 2"
    }
  },
  {
    "id": "unsw-26t3-lab-09-2",
    "title": "Task 2 · Deleting from a Hash Table",
    "source": "Lab · Week 09",
    "topic": "Hash Table",
    "type": "code",
    "prompt": "用 backshift 方法从线性探测表删除 key，使后续键仍可查到。",
    "starter": "void HashTableDelete(HashTable table, int key) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/9/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week09/downloads/files.zip",
    "rules": "键不存在时直接返回。",
    "example": {
      "input": "槽 1 和槽 2 分别有同样哈希到 1 的 key 1、6，删除 key 1",
      "output": "key 6 仍能查到"
    }
  },
  {
    "id": "unsw-26t3-lab-09-3",
    "title": "Task 3 · Find the Missing Integer",
    "source": "Lab · Week 09",
    "topic": "Hash Table",
    "type": "code",
    "prompt": "从 1 到 n 中找出数组里唯一缺失的整数。",
    "starter": "int findMissingInteger(int *integers, int n) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/9/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week09/downloads/files.zip",
    "rules": "使用课程 HashTable ADT。输入保证只缺一个。",
    "example": {
      "input": "integers = [1, 6, 2, 5, 3]，n = 6",
      "output": "4"
    }
  },
  {
    "id": "unsw-26t3-lab-09-4",
    "title": "Task 4 · Who Won the Vote?",
    "source": "Lab · Week 09",
    "topic": "Hash Table",
    "type": "code",
    "prompt": "统计选票，返回票数最多的候选编号。最高票并列时返回 NO_WINNER。",
    "starter": "int findWinner(int *ballots, int numBallots) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/9/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week09/downloads/files.zip",
    "rules": "使用课程 HashTable ADT。",
    "example": {
      "input": "ballots = [1, 2, 1, 1, 4, 4]",
      "output": "1"
    }
  },
  {
    "id": "unsw-26t3-lab-09-5",
    "title": "Task 5 · Determine if Two Strings are Similar",
    "source": "Lab · Week 09",
    "topic": "Hash Table",
    "type": "code",
    "prompt": "判断两个字符串能否通过一一对应的字符替换互相匹配。",
    "starter": "bool areSimilarStrings(char *s1, char *s2) {\n    // TODO\n}",
    "answer": "",
    "explanation": "请参考同周 Lab 原题的共用设置、文件和提交说明。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/9/questions",
    "starterUrl": "https://cgi.cse.unsw.edu.au/~cs2521/26T3/labs/week09/downloads/files.zip",
    "rules": "使用课程 HashTable ADT。不同字符不能映射到同一个字符。",
    "example": {
      "input": "s1 = \"adt\"，s2 = \"dcc\"",
      "output": "false，因为 d 和 t 都要映射成 c"
    }
  },
  {
    "id": "unsw-practice-furthest-reachable",
    "title": "Furthest Reachable Vertex",
    "source": "Practice · Graph",
    "topic": "Graph",
    "type": "code",
    "prompt": "返回离 src 最远的可达顶点。并列选编号最大者；src 孤立时返回 src。",
    "starter": "int furthestReachable(Graph g, int src) {\n    // TODO\n}",
    "answer": "static int *getDistances(Graph g, int src);\nstatic int *bfs(Graph g, int v);\n\nint furthestReachable(Graph g, int src) {\n    int *dist = getDistances(g, src);\n    \n    int furthest = src;\n    for (int v = 0; v < GraphNumVertices(g); v++) {\n        if (dist[v] != -1 && dist[v] >= dist[furthest]) {\n            furthest = v;\n        }\n    }\n    \n    return furthest;\n}\n\nstatic int *getDistances(Graph g, int src) {\n    int *pred = bfs(g, src);\n\n    int nV = GraphNumVertices(g);\n    int *distances = malloc(nV * sizeof(int));\n    for (int v = 0; v < nV; v++) {\n        if (pred[v] == -1) {\n            distances[v] = -1;\n        } else {\n            int distance = 0;\n            int curr = v;\n            while (curr != src) {\n                distance++;\n                curr = pred[curr];\n            }\n            distances[v] = distance;\n        }\n    }\n    \n    free(pred);\n    return distances;\n}\n\nstatic int *bfs(Graph g, int src) {\n    int nV = GraphNumVertices(g);\n    int *pred = malloc(nV * sizeof(int));\n    for (int i = 0; i < nV; i++) {\n        pred[i] = -1;\n    }\n    pred[src] = src;\n    \n    Queue q = QueueNew();\n    QueueEnqueue(q, src);\n    while (!QueueIsEmpty(q)) {\n        int curr = QueueDequeue(q);\n        for (int next = 0; next < nV; next++) {\n            if (GraphIsAdjacent(g, curr, next) && pred[next] == -1) {\n                pred[next] = curr;\n                QueueEnqueue(q, next);\n            }\n        }\n    }\n    QueueFree(q);\n    \n    return pred;\n}",
    "explanation": "用 BFS 计算起点到各点的距离，再从可达点中选距离最大的顶点。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/graphs/furthest-reachable/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/graphs/furthestReachable/downloads/furthestReachable.zip",
    "rules": "用邻接矩阵，不改原图。",
    "example": {
      "input": "0—1、0—2，src = 0",
      "output": "2"
    }
  },
  {
    "id": "unsw-practice-has-cycle",
    "title": "Is there a Cycle?",
    "source": "Practice · Graph",
    "topic": "Graph",
    "type": "code",
    "prompt": "判断无向图里是否存在环，返回布尔值。",
    "starter": "bool hasCycle(Graph g) {\n    // TODO\n}",
    "answer": "static bool doHasCycle(Graph g, int v, int prev, bool *visited);\n\nbool hasCycle(Graph g) {\n    bool *visited = calloc(GraphNumVertices(g), sizeof(bool));\n    \n    for (int v = 0; v < GraphNumVertices(g); v++) {\n        if (!visited[v]) {\n            if (doHasCycle(g, v, v, visited)) {\n                free(visited);\n                return true;\n            }\n        }\n    }\n    \n    free(visited);\n    return false;\n}\n\nstatic bool doHasCycle(Graph g, int v, int prev, bool *visited) {\n    visited[v] = true;\n    for (int w = 0; w < GraphNumVertices(g); w++) {\n        if (GraphIsAdjacent(g, v, w)) {\n            if (visited[w]) {\n                if (w != prev) {\n                    return true;\n                }\n            } else {\n                if (doHasCycle(g, w, v, visited)) {\n                    return true;\n                }\n            }\n        }\n    }\n    return false;\n}",
    "explanation": "DFS 记录父顶点。无向边指回父顶点是正常的，遇到已经访问的其他邻点则形成环。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/graphs/has-cycle/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/graphs/hasCycle/downloads/hasCycle.zip",
    "rules": "用邻接矩阵，不改原图。",
    "example": {
      "input": "0—1、1—2、2—0",
      "output": "true"
    }
  },
  {
    "id": "unsw-practice-num-reachable",
    "title": "Number of Reachable Vertices",
    "source": "Practice · Graph",
    "topic": "Graph",
    "type": "code",
    "prompt": "数出从 src 能到达多少个顶点，包括 src 自己。",
    "starter": "int numReachable(Graph g, int src) {\n    // TODO\n}",
    "answer": "static int doNumReachable(Graph g, int v, bool *visited);\n\nint numReachable(Graph g, int src) {\n    bool *visited = calloc(GraphNumVertices(g), sizeof(bool));\n    int result = doNumReachable(g, src, visited);\n    free(visited);\n    return result;\n}\n\nstatic int doNumReachable(Graph g, int v, int *visited) {\n    visited[v] = true;\n    int result = 1;\n    for (int w = 0; w < GraphNumVertices(g); w++) {\n        if (GraphIsAdjacent(g, v, w) && !visited[w]) {\n            result += doNumReachable(g, w, visited);\n        }\n    }\n    return result;\n}",
    "explanation": "从起点做 DFS，进入一个点就标记，递归只访问未标记的邻点，避免在环中重复计数。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/graphs/num-reachable/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/graphs/numReachable/downloads/numReachable.zip",
    "rules": "用邻接矩阵，不改原图。",
    "example": {
      "input": "0—1—2，3 孤立，src = 0",
      "output": "3"
    }
  },
  {
    "id": "unsw-practice-num-within",
    "title": "Number of Vertices Within Distance",
    "source": "Practice · Graph",
    "topic": "Graph",
    "type": "code",
    "prompt": "数出与 src 的最短距离不超过 dist 的顶点。",
    "starter": "int numWithin(Graph g, int src, int dist) {\n    // TODO\n}",
    "answer": "static int *getDistances(Graph g, int src);\nstatic int *bfs(Graph g, int src);\n\nint numWithin(Graph g, int src, int dist) {\n    int *distances = getDistances(g, src);\n\n    int count = 0;\n    for (int v = 0; v < GraphNumVertices(g); v++) {\n        if (distances[v] >= 0 && distances[v] <= dist) {\n            count++;\n        }\n    }\n\n    free(distances);\n    return count;\n}\n\nstatic int *getDistances(Graph g, int src) {\n    int *pred = bfs(g, src);\n\n    int nV = GraphNumVertices(g);\n    int *distances = malloc(nV * sizeof(int));\n    for (int v = 0; v < nV; v++) {\n        if (pred[v] == -1) {\n            distances[v] = -1;\n        } else {\n            int distance = 0;\n            int curr = v;\n            while (curr != src) {\n                distance++;\n                curr = pred[curr];\n            }\n            distances[v] = distance;\n        }\n    }\n    \n    free(pred);\n    return distances;\n}\n\nstatic int *bfs(Graph g, int src) {\n    int nV = GraphNumVertices(g);\n    int *pred = malloc(nV * sizeof(int));\n    for (int i = 0; i < nV; i++) {\n        pred[i] = -1;\n    }\n    pred[src] = src;\n    \n    Queue q = QueueNew();\n    QueueEnqueue(q, src);\n    while (!QueueIsEmpty(q)) {\n        int curr = QueueDequeue(q);\n        for (int next = 0; next < nV; next++) {\n            if (GraphIsAdjacent(g, curr, next) && pred[next] == -1) {\n                pred[next] = curr;\n                QueueEnqueue(q, next);\n            }\n        }\n    }\n    QueueFree(q);\n    \n    return pred;\n}",
    "explanation": "用 BFS 记录最短边数，再按题目距离上限统计可达点。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/graphs/num-within/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/graphs/numWithin/downloads/numWithin.zip",
    "rules": "用邻接矩阵，不改原图；距离按边数计算。",
    "example": {
      "input": "0—1—2，src = 0，dist = 1",
      "output": "2（顶点 0 和 1）"
    }
  },
  {
    "id": "unsw-practice-shortest-distance",
    "title": "Shortest Distance Between Vertices",
    "source": "Practice · Graph",
    "topic": "Graph",
    "type": "code",
    "prompt": "返回 src 到 dest 的最短路径边数。不可达返回 -1。",
    "starter": "int shortestDistance(Graph g, int src, int dest) {\n    // TODO\n}",
    "answer": "int shortestDistance(Graph g, int src, int dest) {\n    int nV = GraphNumVertices(g);\n    int *pred = malloc(nV * sizeof(int));\n    for (int i = 0; i < nV; i++) {\n        pred[i] = -1;\n    }\n    pred[src] = src;\n    \n    bool found = false;\n    Queue q = QueueNew();\n    QueueEnqueue(q, src);\n    while (!found && !QueueIsEmpty(q)) {\n        Vertex u = QueueDequeue(q);\n        for (Vertex v = 0; v < nV; v++) {\n            if (GraphIsAdjacent(g, u, v) && pred[v] == -1) {\n                pred[v] = u;\n                if (v == dest) {\n                    found = true;\n                }\n                QueueEnqueue(q, v);\n            }\n        }\n    }\n    QueueFree(q);\n    \n    if (pred[dest] == -1) {\n        return -1;\n    }\n\n    int distance = 0;\n    Vertex curr = dest;\n    while (curr != src) {\n        distance++;\n        curr = pred[curr];\n    }\n    return distance;\n}",
    "explanation": "无权图用 BFS 按距离分层，先到达的路径边数最少。将不可达与距离为零的情况区分开。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/graphs/shortest-distance/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/graphs/shortestDistance/downloads/shortestDistance.zip",
    "rules": "用邻接矩阵，不改原图。",
    "example": {
      "input": "0—1—2，src = 0，dest = 2",
      "output": "2"
    }
  },
  {
    "id": "unsw-practice-list-delete-duplicates",
    "title": "Deleting Duplicates from a Linked List",
    "source": "Practice · Linked List",
    "topic": "Linked List",
    "type": "code",
    "prompt": "原地删除重复节点，每个值只保留首次出现的节点。",
    "starter": "void listDeleteDuplicates(struct list *l) {\n    // TODO\n}",
    "answer": "static struct node *listDelete(struct node *curr, int value);\n\nvoid listDeleteDuplicates(struct list *l) {\n\tstruct node *curr = l->head;\n\twhile (curr != NULL) {\n\t\tcurr->next = listDelete(curr->next, curr->value);\n\t\tcurr = curr->next;\n\t}\n}\n\n// A recursive function to delete all nodes with the given value\n// and then return the head of the list\nstatic struct node *listDelete(struct node *curr, int value) {\n\tif (curr == NULL) {\n\t\treturn NULL;\n\t}\n\t\n\tcurr->next = listDelete(curr->next, value);\n\t\n\tif (curr->value == value) {\n\t\tstruct node *temp = curr->next;\n\t\tfree(curr);\n\t\treturn temp;\n\t} else {\n\t\treturn curr;\n\t}\n}",
    "explanation": "遍历保留节点，再从后续链中移除和它同值的节点。删除后要保留更新后的链头。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/lists/list-delete-duplicates/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/lists/listDeleteDuplicates/downloads/listDeleteDuplicates.zip",
    "rules": "不用数组，不分配新节点，不改节点值。",
    "example": {
      "input": "[3, 1, 3, 2, 1]",
      "output": "[3, 1, 2]"
    }
  },
  {
    "id": "unsw-practice-list-delete-largest",
    "title": "Deleting the Largest Value",
    "source": "Practice · Linked List",
    "topic": "Linked List",
    "type": "code",
    "prompt": "原地删除第一个最大值节点。空链表保持原样。",
    "starter": "void listDeleteLargest(struct list *l) {\n    // TODO\n}",
    "answer": "void listDeleteLargest(struct list *l) {\n    if (l->head == NULL) {\n        return;\n    }\n\n    struct node *max = l->head;\n    for (struct node *curr = l->head; curr != NULL; curr = curr->next) {\n        if (curr->value > max->value) {\n            max = curr;\n        }\n    }\n\n    if (max == l->head) {\n        l->head = l->head->next;\n    } else {\n        struct node *prev = l->head;\n        while (prev->next != max) {\n            prev = prev->next;\n        }\n        prev->next = prev->next->next;\n    }\n    free(max);\n}",
    "explanation": "先找最大值，再按题意删除最大值节点。处理头节点时直接更新链表的 head。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/lists/list-delete-largest/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/lists/listDeleteLargest/downloads/listDeleteLargest.zip",
    "rules": "不用数组，不分配新节点，不改节点值。",
    "example": {
      "input": "[2, 9, 1, 9]",
      "output": "[2, 1, 9]"
    }
  },
  {
    "id": "unsw-practice-list-insert-nth",
    "title": "Inserting into the Nth Position of a Linked List",
    "source": "Practice · Linked List",
    "topic": "Linked List",
    "type": "code",
    "prompt": "在零起算的位置 n 前插入 value；位置超出链表就追加。",
    "starter": "void listInsertNth(struct list *l, int value, int n) {\n    // TODO\n}",
    "answer": "static struct node *newNode(int val);\n\nvoid listInsertNth(struct list *l, int value, int n) {\n\tstruct node *new = newNode(value);\n\t\n\tif (l->head == NULL || n == 0) {\n\t\tnew->next = l->head;\n\t\tl->head = new;\n\t} else {\n\t\tstruct node *curr = l->head;\n\t\tint i = 1;\n\t\twhile (curr->next != NULL && i < n) {\n\t\t\tcurr = curr->next;\n\t\t\ti++;\n\t\t}\n\t\tnew->next = curr->next;\n\t\tcurr->next = new;\n\t}\n}\n\nstatic struct node *newNode(int val) {\n\tstruct node *n = malloc(sizeof(*n));\n\tif (n == NULL) {\n\t\tfprintf(stderr, \"error: out of memory\\n\");\n\t\texit(EXIT_FAILURE);\n\t}\n\tn->value = val;\n\tn->next = NULL;\n\treturn n;\n}",
    "explanation": "沿链走到目标位置，把新节点接到前驱与后继之间。插入位置为零时更新链头。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/lists/list-insert-nth/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/lists/listInsertNth/downloads/listInsertNth.zip",
    "rules": "n ≥ 0。不用数组，不改已有节点的值。",
    "example": {
      "input": "[2, 5, 8]，value = 6，n = 2",
      "output": "[2, 5, 6, 8]"
    }
  },
  {
    "id": "unsw-practice-list-is-k-periodic",
    "title": "List is K-Periodic",
    "source": "Practice · Linked List",
    "topic": "Linked List",
    "type": "code",
    "prompt": "判断相隔 k 位的元素是否总相同。长度不超过 k 时返回 true。",
    "starter": "bool listIsKPeriodic(struct list *l, int k) {\n    // TODO\n}",
    "answer": "bool listIsKPeriodic(struct list *l, int k) {\n\tstruct node *curr = l->head;\n\tstruct node *ahead = curr;\n\t\n\tint i = 0;\n\twhile (ahead != NULL && i < k) {\n\t\tahead = ahead->next;\n\t\ti++;\n\t}\n\t\n\twhile (ahead != NULL) {\n\t\tif (curr->value != ahead->value) {\n\t\t\treturn false;\n\t\t}\n\t\tcurr = curr->next;\n\t\tahead = ahead->next;\n\t}\n\t\n\treturn true;\n}",
    "explanation": "让两个指针相隔 k 个节点并同步推进，逐一比较对应值。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/lists/list-is-k-periodic/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/lists/listIsKPeriodic/downloads/listIsKPeriodic.zip",
    "rules": "k > 0。不用数组或 malloc，也不修改链表。",
    "example": {
      "input": "[1, 2, 1, 2, 1]，k = 2",
      "output": "true"
    }
  },
  {
    "id": "unsw-practice-list-is-ordered",
    "title": "List is Ordered",
    "source": "Practice · Linked List",
    "topic": "Linked List",
    "type": "code",
    "prompt": "判断链表是否非递减或非递增。空链表视为有序。",
    "starter": "bool listIsOrdered(struct list *l) {\n    // TODO\n}",
    "answer": "static bool listIsAscending(struct node *n);\nstatic bool listIsDescending(struct node *n);\n\nbool listIsOrdered(struct list *l) {\n\treturn listIsAscending(l->head) || listIsDescending(l->head);\n}\n\nstatic bool listIsAscending(struct node *n) {\n\tif (n == NULL || n->next == NULL) {\n\t\treturn true;\n\t}\n\treturn n->value <= n->next->value && listIsAscending(n->next);\n}\n\nstatic bool listIsDescending(struct node *n) {\n\tif (n == NULL || n->next == NULL) {\n\t\treturn true;\n\t}\n\treturn n->value >= n->next->value && listIsDescending(n->next);\n}",
    "explanation": "分别检查相邻节点是否满足升序或降序条件，整体只需满足其中一种。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/lists/list-is-ordered/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/lists/listIsOrdered/downloads/listIsOrdered.zip",
    "rules": "不用数组或 malloc，也不修改链表。",
    "example": {
      "input": "[7, 7, 4, 1]",
      "output": "true"
    }
  },
  {
    "id": "unsw-practice-list-is-palindromic",
    "title": "List is Palindromic",
    "source": "Practice · Linked List",
    "topic": "Linked List",
    "type": "code",
    "prompt": "判断双向链表正读和倒读的值是否完全相同。",
    "starter": "bool listIsPalindromic(struct list *l) {\n    // TODO\n}",
    "answer": "bool listIsPalindromic(struct list *l) {\n\tstruct node *curr1 = l->head;\n\tstruct node *curr2 = l->tail;\n\twhile (curr1 != NULL) {\n\t\tif (curr1->value != curr2->value) {\n\t\t\treturn false;\n\t\t}\n\t\tcurr1 = curr1->next;\n\t\tcurr2 = curr2->prev;\n\t}\n\treturn true;\n}",
    "explanation": "按正序和逆序对应比较。遇到不一致即返回，注意空链和单节点。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/lists/list-is-palindromic/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/lists/listIsPalindromic/downloads/listIsPalindromic.zip",
    "rules": "不用数组或 malloc，也不修改链表。",
    "example": {
      "input": "[1, 2, 3, 2, 1]",
      "output": "true"
    }
  },
  {
    "id": "unsw-practice-list-merge-ordered",
    "title": "Merging Two Ordered Lists",
    "source": "Practice · Linked List",
    "topic": "Linked List",
    "type": "code",
    "prompt": "把两个升序链表合成一个新的升序链表。",
    "starter": "struct list *listMergeOrdered(struct list *l1, struct list *l2) {\n    // TODO\n}",
    "answer": "static void listAppend(struct list *l, int val);\nstatic struct node *newNode(int val);\n\nstruct list *listMergeOrdered(struct list *l1, struct list *l2) {\n\tstruct list *l3 = listNew();\n\t\n\tstruct node *curr1 = l1->head;\n\tstruct node *curr2 = l2->head;\n\twhile (curr1 != NULL && curr2 != NULL) {\n\t\tif (curr1->value < curr2->value) {\n\t\t\tlistAppend(l3, curr1->value);\n\t\t\tcurr1 = curr1->next;\t\t\t\n\t\t} else {\n\t\t\tlistAppend(l3, curr2->value);\n\t\t\tcurr2 = curr2->next;\n\t\t}\n\t}\n\t\n\twhile (curr1 != NULL) {\n\t\tlistAppend(l3, curr1->value);\n\t\tcurr1 = curr1->next;\n\t}\n\t\n\twhile (curr2 != NULL) {\n\t\tlistAppend(l3, curr2->value);\n\t\tcurr2 = curr2->next;\n\t}\n\t\n\treturn l3;\n}\n\nstatic void listAppend(struct list *l, int val) {\n\tstruct node *n = newNode(val);\n\tif (l->head == NULL) {\n\t\tl->head = n;\n\t} else {\n\t\tl->tail->next = n;\n\t}\n\tl->tail = n;\n}\n\nstatic struct node *newNode(int val) {\n\tstruct node *n = malloc(sizeof(*n));\n\tif (n == NULL) {\n\t\tfprintf(stderr, \"error: out of memory\\n\");\n\t\texit(EXIT_FAILURE);\n\t}\n\tn->value = val;\n\tn->next = NULL;\n\treturn n;\n}",
    "explanation": "同时遍历两个有序链表，每次取当前较小值，最后接上剩余值。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/lists/list-merge-ordered/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/lists/listMergeOrdered/downloads/listMergeOrdered.zip",
    "rules": "保留重复值，不用数组，不改输入。",
    "example": {
      "input": "[1, 4] 和 [2, 4, 5]",
      "output": "[1, 2, 4, 4, 5]"
    }
  },
  {
    "id": "unsw-practice-list-num-duplicates",
    "title": "Counting Duplicates",
    "source": "Practice · Linked List",
    "topic": "Linked List",
    "type": "code",
    "prompt": "返回让有序链表变成无重复所需删除的最少节点数。",
    "starter": "int listNumDuplicates(struct list *l) {\n    // TODO\n}",
    "answer": "int listNumDuplicates(struct list *l) {\n\tint count = 0;\n\tstruct node *curr = l->head;\n\twhile (curr != NULL && curr->next != NULL) {\n\t\tif (curr->value == curr->next->value) {\n\t\t\tcount++;\n\t\t}\n\t\tcurr = curr->next;\n\t}\n\treturn count;\n}",
    "explanation": "相等值在有序链表中相邻。比较每对相邻节点，相等就加一，因此连续 m 个相同值贡献 m−1。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/lists/list-num-duplicates/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/lists/listNumDuplicates/downloads/listNumDuplicates.zip",
    "rules": "输入可升序或降序。不删除节点，不用数组或 malloc。",
    "example": {
      "input": "[1, 2, 2, 3, 3, 3]",
      "output": "3"
    }
  },
  {
    "id": "unsw-practice-list-set-difference",
    "title": "Difference of Two List Sets",
    "source": "Practice · Linked List",
    "topic": "Linked List",
    "type": "code",
    "prompt": "生成新链表，只保留 l1 中有、l2 中没有的值。",
    "starter": "struct list *listSetDifference(struct list *l1, struct list *l2) {\n    // TODO\n}",
    "answer": "static bool listContains(struct list *l, int value);\nstatic void listPrepend(struct list *l, int value);\nstatic struct node *newNode(int val);\n\nstruct list *listSetDifference(struct list *l1, struct list *l2) {\n\tstruct list *l3 = listNew();\n\t\n\tstruct node *curr = l1->head;\n\twhile (curr != NULL) {\n\t\tif (!listContains(l2, curr->value)) {\n\t\t\tlistPrepend(l3, curr->value);\n\t\t}\n\t\tcurr = curr->next;\n\t}\n\t\n\treturn l3;\n}\n\nstatic bool listContains(struct list *l, int value) {\n\tfor (struct node *curr = l->head; curr != NULL; curr = curr->next) {\n\t\tif (curr->value == value) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n}\n\nstatic void listPrepend(struct list *l, int value) {\n\tstruct node *n = newNode(value);\n\tn->next = l->head;\n\tl->head = n;\n}\n\nstatic struct node *newNode(int val) {\n\tstruct node *n = malloc(sizeof(*n));\n\tif (n == NULL) {\n\t\tfprintf(stderr, \"error: out of memory\\n\");\n\t\texit(EXIT_FAILURE);\n\t}\n\tn->value = val;\n\tn->next = NULL;\n\treturn n;\n}",
    "explanation": "遍历第一集合，只保留第二集合中不存在的值。差集有方向。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/lists/list-set-difference/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/lists/listSetDifference/downloads/listSetDifference.zip",
    "rules": "两个输入各自无重复。不用数组，不改输入，输出顺序不限。",
    "example": {
      "input": "l1 = [1, 3, 4]，l2 = [3, 5]",
      "output": "包含 1 和 4"
    }
  },
  {
    "id": "unsw-practice-list-set-intersection",
    "title": "Intersection of Two List Sets",
    "source": "Practice · Linked List",
    "topic": "Linked List",
    "type": "code",
    "prompt": "生成新链表，包含两个输入集合共有的值。",
    "starter": "struct list *listSetIntersection(struct list *s1, struct list *s2) {\n    // TODO\n}",
    "answer": "static void listPrepend(struct list *l, int val);\nstatic struct node *newNode(int val);\nstatic bool inList(struct list *l, int val);\n\nstruct list *listSetIntersection(struct list *s1, struct list *s2) {\n\tstruct list *s3 = listNew();\n\t\n\tfor (struct node *curr = s1->head; curr != NULL; curr = curr->next) {\n\t\tif (inList(s2, curr->value)) {\n\t\t\tlistPrepend(s3, curr->value);\n\t\t}\n\t}\n\t\n\treturn s3;\n}\n\nstatic void listPrepend(struct list *l, int val) {\n\tstruct node *n = newNode(val);\n\tn->next = l->head;\n\tl->head = n;\n}\n\nstatic struct node *newNode(int val) {\n\tstruct node *n = malloc(sizeof(*n));\n\tif (n == NULL) {\n\t\tfprintf(stderr, \"error: out of memory\\n\");\n\t\texit(EXIT_FAILURE);\n\t}\n\tn->value = val;\n\tn->next = NULL;\n\treturn n;\n}\n\nstatic bool inList(struct list *l, int val) {\n\tfor (struct node *curr = l->head; curr != NULL; curr = curr->next) {\n\t\tif (curr->value == val) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n}",
    "explanation": "遍历第一集合，只把也存在于第二集合的值加入结果。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/lists/list-set-intersection/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/lists/listSetIntersection/downloads/listSetIntersection.zip",
    "rules": "两个输入各自无重复。不用数组，不改输入，输出顺序不限。",
    "example": {
      "input": "[1, 3, 4] 和 [3, 4, 5]",
      "output": "包含 3 和 4"
    }
  },
  {
    "id": "unsw-practice-list-set-union",
    "title": "Union of Two List Sets",
    "source": "Practice · Linked List",
    "topic": "Linked List",
    "type": "code",
    "prompt": "生成新链表，每个出现在任一输入集合中的值只放一次。",
    "starter": "struct list *listSetUnion(struct list *s1, struct list *s2) {\n    // TODO\n}",
    "answer": "static void listPrepend(struct list *l, int val);\nstatic struct node *newNode(int val);\nstatic bool inList(struct list *l, int val);\n\nstruct list *listSetUnion(struct list *s1, struct list *s2) {\n\tstruct list *s3 = listNew();\n\t\n\tfor (struct node *curr = s1->head; curr != NULL; curr = curr->next) {\n\t\tlistPrepend(s3, curr->value);\n\t}\n\tfor (struct node *curr = s2->head; curr != NULL; curr = curr->next) {\n\t\tif (!inList(s3, curr->value)) {\n\t\t\tlistPrepend(s3, curr->value);\n\t\t}\n\t}\n\t\n\treturn s3;\n}\n\nstatic void listPrepend(struct list *l, int val) {\n\tstruct node *n = newNode(val);\n\tn->next = l->head;\n\tl->head = n;\n}\n\nstatic struct node *newNode(int val) {\n\tstruct node *n = malloc(sizeof(*n));\n\tif (n == NULL) {\n\t\tfprintf(stderr, \"error: out of memory\\n\");\n\t\texit(EXIT_FAILURE);\n\t}\n\tn->value = val;\n\tn->next = NULL;\n\treturn n;\n}\n\nstatic bool inList(struct list *l, int val) {\n\tfor (struct node *curr = l->head; curr != NULL; curr = curr->next) {\n\t\tif (curr->value == val) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n}",
    "explanation": "先纳入一个集合的值，再添加另一个集合中尚未出现的值。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/lists/list-set-union/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/lists/listSetUnion/downloads/listSetUnion.zip",
    "rules": "两个输入各自无重复。不用数组，不改输入，输出顺序不限。",
    "example": {
      "input": "[1, 3] 和 [3, 5]",
      "output": "包含 1、3、5"
    }
  },
  {
    "id": "unsw-practice-list-zip",
    "title": "Zipping Two Lists",
    "source": "Practice · Linked List",
    "topic": "Linked List",
    "type": "code",
    "prompt": "从 l1 开始交替取值，生成新链表。一条用尽后，追加另一条剩余的值。",
    "starter": "struct list *listZip(struct list *l1, struct list *l2) {\n    // TODO\n}",
    "answer": "static void listAppend(struct list *l, int val);\nstatic struct node *newNode(int val);\n\nstruct list *listZip(struct list *l1, struct list *l2) {\n\tstruct list *l3 = listNew();\n\t\n\tstruct node *curr1 = l1->head;\n\tstruct node *curr2 = l2->head;\n\twhile (curr1 != NULL && curr2 != NULL) {\n\t\tlistAppend(l3, curr1->value);\n\t\tlistAppend(l3, curr2->value);\n\t\tcurr1 = curr1->next;\n\t\tcurr2 = curr2->next;\n\t}\n\t\n\twhile (curr1 != NULL) {\n\t\tlistAppend(l3, curr1->value);\n\t\tcurr1 = curr1->next;\n\t}\n\t\n\twhile (curr2 != NULL) {\n\t\tlistAppend(l3, curr2->value);\n\t\tcurr2 = curr2->next;\n\t}\n\t\n\treturn l3;\n}\n\nstatic void listAppend(struct list *l, int val) {\n\tstruct node *n = newNode(val);\n\tif (l->head == NULL) {\n\t\tl->head = n;\n\t} else {\n\t\tl->tail->next = n;\n\t}\n\tl->tail = n;\n}\n\nstatic struct node *newNode(int val) {\n\tstruct node *n = malloc(sizeof(*n));\n\tif (n == NULL) {\n\t\tfprintf(stderr, \"error: out of memory\\n\");\n\t\texit(EXIT_FAILURE);\n\t}\n\tn->value = val;\n\tn->next = NULL;\n\treturn n;\n}",
    "explanation": "根据题目规定的节奏从两条链取值，处理一条链先耗尽时的剩余节点。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/lists/list-zip/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/lists/listZip/downloads/listZip.zip",
    "rules": "不用数组，不改输入。",
    "example": {
      "input": "l1 = [7, 5, 2]，l2 = [4, 8]",
      "output": "[7, 4, 5, 8, 2]"
    }
  },
  {
    "id": "unsw-practice-reverse-dllist",
    "title": "Reversing a Doubly Linked List",
    "source": "Practice · Linked List",
    "topic": "Linked List",
    "type": "code",
    "prompt": "原地反转双向链表，更新首尾和节点的前后连接。",
    "starter": "void reverseDLList(struct list *l) {\n    // TODO\n}",
    "answer": "static void swap(struct node **ptr1, struct node **ptr2);\n\nvoid reverseDLList(struct list *l) {\n\tstruct node *curr = l->head;\n\twhile (curr != NULL) {\n\t\tswap(&(curr->prev), &(curr->next));\n\t\tcurr = curr->prev;\n\t}\n\n\tswap(&(l->head), &(l->tail));\n}\n\nstatic void swap(struct node **ptr1, struct node **ptr2) {\n\tstruct node *temp = *ptr1;\n\t*ptr1 = *ptr2;\n\t*ptr2 = temp;\n}",
    "explanation": "双向链表逐节点交换前后指针，最后交换头尾。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/lists/reverse-dllist/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/lists/reverseDLList/downloads/reverseDLList.zip",
    "rules": "不用数组或 malloc，不改节点值。",
    "example": {
      "input": "1 ⇄ 2 ⇄ 3",
      "output": "3 ⇄ 2 ⇄ 1"
    }
  },
  {
    "id": "unsw-practice-reverse-list",
    "title": "Reversing a Linked List",
    "source": "Practice · Linked List",
    "topic": "Linked List",
    "type": "code",
    "prompt": "原地反转单向链表，更新头指针。",
    "starter": "void reverseList(struct list *l) {\n    // TODO\n}",
    "answer": "void reverseList(struct list *l) {\n\tstruct node *prev = NULL;\n\tstruct node *curr = l->head;\n\twhile (curr != NULL) {\n\t\tstruct node *temp = curr;\n\t\tcurr = curr->next;\n\t\ttemp->next = prev;\n\t\tprev = temp;\n\t}\n\tl->head = prev;\n}",
    "explanation": "先保存当前节点的后继，再反转 next 指针。遍历结束后把链头设为最后处理的节点。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/lists/reverse-list/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/lists/reverseList/downloads/reverseList.zip",
    "rules": "不用数组或 malloc，不改节点值。",
    "example": {
      "input": "1 → 2 → 3",
      "output": "3 → 2 → 1"
    }
  },
  {
    "id": "unsw-practice-bst-delete-largest",
    "title": "Deleting the Largest Value in a BST",
    "source": "Practice · BST",
    "topic": "BST",
    "type": "code",
    "prompt": "删除 BST 的最大值，把它写入 *max，返回新的根。",
    "starter": "struct node *bstDeleteLargest(struct node *t, int *max) {\n    // TODO\n}",
    "answer": "struct node *bstDeleteLargest(struct node *t, int *max) {\n\tif (t->right == NULL) {\n\t\t*max = t->value;\n\t\tstruct node *newRoot = t->left;\n\t\tfree(t);\n\t\treturn newRoot;\n\t} else {\n\t\tt->right = bstDeleteLargest(t->right, max);\n\t\treturn t;\n\t}\n}",
    "explanation": "沿右子树找最大节点。删去该节点时用其左子树接替，并把更新后的根传回。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/trees/bst-delete-largest/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/trees/bstDeleteLargest/downloads/bstDeleteLargest.zip",
    "rules": "树非空。不用数组或 malloc，不改节点值。",
    "example": {
      "input": "根为 5，右孩子为 8",
      "output": "*max = 8，更新后只剩 5"
    }
  },
  {
    "id": "unsw-practice-bst-get-kth",
    "title": "Kth Smallest Value in a BST",
    "source": "Practice · BST",
    "topic": "BST",
    "type": "code",
    "prompt": "返回 BST 中按升序排列下标为 k 的值，最小值下标为 0。",
    "starter": "int bstGetKth(struct node *t, int k) {\n    // TODO\n}",
    "answer": "static int bstSize(struct node *t);\n\nint bstGetKth(struct node *t, int k) {\n    int leftSize = bstSize(t->left);\n    if (k == leftSize) {\n        return t->value;\n    } else if (k < leftSize) {\n        return bstGetKth(t->left, k);\n    } else {\n        return bstGetKth(t->right, k - leftSize - 1);\n    }\n}\n\nstatic int bstSize(struct node *t) {\n    if (t == NULL) {\n        return 0;\n    } else {\n        return 1 + bstSize(t->left) + bstSize(t->right);\n    }\n}",
    "explanation": "比较 k 与左子树大小加一。去右子树时扣除左子树和当前根的排名。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/trees/bst-get-kth/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/trees/bstGetKth/downloads/bstGetKth.zip",
    "rules": "k 保证有效，不改原树。",
    "example": {
      "input": "树包含 2、5、9，k = 1",
      "output": "5"
    }
  },
  {
    "id": "unsw-practice-bst-get-smallest",
    "title": "Smallest Value in a BST",
    "source": "Practice · BST",
    "topic": "BST",
    "type": "code",
    "prompt": "返回 BST 最小值所在节点的指针。空树返回 NULL。",
    "starter": "struct node *BSTreeGetSmallest(struct node *t) {\n    // TODO\n}",
    "answer": "struct node *BSTreeGetSmallest(struct node *t) {\n    while (t != NULL && t->left != NULL) {\n        t = t->left;\n    }\n    return t;\n}",
    "explanation": "BST 最小节点在最左端。每步只走左子树，直到无左孩子。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/trees/bst-get-smallest/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/trees/bstGetSmallest/downloads/bstGetSmallest.zip",
    "rules": "不改原树。",
    "example": {
      "input": "树包含 2、5、9",
      "output": "指向值为 2 的节点"
    }
  },
  {
    "id": "unsw-practice-bst-postfix",
    "title": "Postfix Traversal of a BST",
    "source": "Practice · BST",
    "topic": "BST",
    "type": "code",
    "prompt": "按后序遍历打印 BST 的值。",
    "starter": "void bstPostfix(struct node *t) {\n    // TODO\n}",
    "answer": "void bstPostfix(struct node *t) {\n\tif (t != NULL) {\n\t\tbstPostfix(t->left);\n\t\tbstPostfix(t->right);\n\t\tprintf(\"%d \", t->value);\n\t}\n}",
    "explanation": "后序遍历先左、再右、最后处理根；空节点直接返回。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/trees/bst-postfix/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/trees/bstPostfix/downloads/bstPostfix.zip",
    "rules": "单行空格分隔，不改原树。",
    "example": {
      "input": "根为 5，左右孩子为 2 和 7",
      "output": "2 7 5"
    }
  },
  {
    "id": "unsw-practice-tree-copy",
    "title": "Copying a Tree",
    "source": "Practice · BST",
    "topic": "BST",
    "type": "code",
    "prompt": "复制根到指定深度的节点，根深度为 0。",
    "starter": "struct node *treeCopy(struct node *t, int depth) {\n    // TODO\n}",
    "answer": "static struct node *newNode(int value);\n\nstruct node *treeCopy(struct node *t, int depth) {\n\tif (t == NULL || depth < 0) {\n\t\treturn NULL;\n\t}\n\t\n\tstruct node *copy = newNode(t->value);\n\tcopy->left = treeCopy(t->left, depth - 1);\n\tcopy->right = treeCopy(t->right, depth - 1);\n\treturn copy;\n}\n\nstatic struct node *newNode(int value) {\n\tstruct node *t = malloc(sizeof(*t));\n\tif (t == NULL) {\n\t\tfprintf(stderr, \"error: out of memory\\n\");\n\t\texit(EXIT_FAILURE);\n\t}\n\n\tt->value = value;\n\tt->left = NULL;\n\tt->right = NULL;\n\treturn t;\n}",
    "explanation": "空树返回空指针。对每个原节点分配独立节点，递归复制左右子树。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/trees/tree-copy/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/trees/treeCopy/downloads/treeCopy.zip",
    "rules": "深度为负时返回空树，深度超过树高时复制整棵树。",
    "example": {
      "input": "根为 5，左右孩子为 2 和 7，depth = 0",
      "output": "一棵新的树，只含节点 5"
    }
  },
  {
    "id": "unsw-practice-tree-is-size-balanced",
    "title": "Tree is Size Balanced",
    "source": "Practice · BST",
    "topic": "BST",
    "type": "code",
    "prompt": "检查每个节点的左右子树节点数之差是否都不超过 1。",
    "starter": "bool treeIsSizeBalanced(struct node *t) {\n    // TODO\n}",
    "answer": "static int treeSize(struct node *t);\n\nbool treeIsSizeBalanced(struct node *t) {\n\tif (t == NULL) {\n\t\treturn true;\n\t}\n\t\n\tint l = treeSize(t->left);\n\tint r = treeSize(t->right);\n\tif (l - r > 1 || r - l > 1) {\n\t\treturn false;\n\t} else {\n\t\treturn treeIsSizeBalanced(t->left) &&\n\t\t       treeIsSizeBalanced(t->right);\n\t}\n}\n\nstatic int treeSize(struct node *t) {\n\tif (t == NULL) {\n\t\treturn 0;\n\t} else {\n\t\treturn 1 + treeSize(t->left) + treeSize(t->right);\n\t}\n}",
    "explanation": "检查每个节点左右子树的节点数差，并递归验证两边。这里比较节点数，不是高度。",
    "origin": "https://cgi.cse.unsw.edu.au/~cs2521/practice-exercises/trees/tree-is-size-balanced/exercise",
    "starterUrl": "https://www.cse.unsw.edu.au/~cs2521/practice-exercises/trees/treeIsSizeBalanced/downloads/treeIsSizeBalanced.zip",
    "rules": "",
    "example": {
      "input": "根节点只有左子树，左子树有 2 个节点",
      "output": "false"
    }
  }
];

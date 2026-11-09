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
    "example": {
      "input": "arr = [2, 5, 7]，n = 1",
      "output": "arr 变为 [7, 2, 5]"
    },
    "statement": "<p>Your task is to implement the following function in <code>arrayShift.c</code>:</p>\n\n<pre>void shift(int arr[], int size, int n);\n</pre>\n\n\n\t\t<p>This function <i>shifts</i> an array of the given size <em>to the right</em> n times. When an array is shifted to the right, each element is moved one index to the right (i.e., if an element was at index i, it will now be at index i + 1), and the element at the end of the array (at index N - 1 where N is the size of the array) is moved to the start (index 0).</p>\n\n\t\t<p>n can be assumed to be non-negative.</p>",
    "sourceNotes": "<h5>Testing</h5>\n\t\t<p><code>arrayShift.c</code> contains a main function which allows you to test your <code>shift</code> function. The main function:</p>\n\n\t\t<ul>\n\t\t\t<li>Reads the size of the array</li>\n\t\t\t<li>Reads the values of the array</li>\n\t\t\t<li>Displays the array</li>\n\t\t\t<li>Reads the value of n</li>\n\t\t\t<li>Calls <code>shift</code></li>\n\t\t\t<li>Displays the updated array</li>\n\t\t</ul>\n\n\t\t<p>Here are some examples of its usage:</p>\n<pre>\n<kbd>make</kbd>\n...\n<kbd>./arrayShift</kbd>\nEnter array size: <kbd>3</kbd>\nEnter array values: <kbd>16 5 2</kbd>\nArray: [16, 5, 2]\nEnter shift: <kbd>1</kbd>\nArray after shifting 1 time(s): [2, 16, 5]\n<kbd>./arrayShift</kbd>\nEnter array size: <kbd>5</kbd>\nEnter array values: <kbd>16 5 2 -3 4</kbd>\nArray: [16, 5, 2, -3, 4]\nEnter shift: <kbd>3</kbd>\nArray after shifting 3 time(s): [2, -3, 4, 16, 5]\n<kbd>./arrayShift</kbd>\nEnter array size: <kbd>5</kbd>\nEnter array values: <kbd>16 5 2 -3 4</kbd>\nArray: [16, 5, 2, -3, 4]\nEnter shift: <kbd>10</kbd>\nArray after shifting 10 time(s): [16, 5, 2, -3, 4]\n</pre>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "1 → 2 → 3，n = 1",
      "output": "3 → 1 → 2"
    },
    "statement": "<p>Your task is to implement the following function in <code>listShift.c</code>:</p>\n\n<pre>struct node *shift(struct node *list, int n);\n</pre>\n\n\n\t\t<p>This function <i>shifts</i> a linked list <em>to the right</em> n times and returns a pointer to the start of the updated list. When a linked list is shifted to the right, the node at the end of the list is moved to the start.</p>\n\n\t\t<p>n can be assumed to be non-negative.</p>\n\n\t\t<h5>Constraints</h5>\n\t\t<ul>\n\t\t\t<li>You must not use <code>malloc</code> or any of its variants</li>\n\t\t\t<li>You must not modify the integer values in any nodes</li>\n\t\t</ul>",
    "sourceNotes": "<h5>Testing</h5>\n\t\t<p><code>listShift.c</code> contains a main function which allows you to test your <code>shift</code> function. The main function:</p>\n\n\t\t<ul>\n\t\t\t<li>Reads the size of the list</li>\n\t\t\t<li>Reads the values of the list</li>\n\t\t\t<li>Displays the list</li>\n\t\t\t<li>Reads the value of n</li>\n\t\t\t<li>Calls <code>shift</code></li>\n\t\t\t<li>Displays the updated list</li>\n\t\t</ul>\n\n\t\t<p>Here are some examples of its usage:</p>\n<pre>\n<kbd>make</kbd>\n...\n<kbd>./listShift</kbd>\nEnter list size: <kbd>3</kbd>\nEnter list values: <kbd>16 5 2</kbd>\nList: [16, 5, 2]\nEnter shift: <kbd>1</kbd>\nList after shifting 1 time(s): [2, 16, 5]\n<kbd>./listShift</kbd>\nEnter list size: <kbd>5</kbd>\nEnter list values: <kbd>16 5 2 -3 4</kbd>\nList: [16, 5, 2, -3, 4]\nEnter shift: <kbd>3</kbd>\nList after shifting 3 time(s): [2, -3, 4, 16, 5]\n<kbd>./listShift</kbd>\nEnter list size: <kbd>5</kbd>\nEnter list values: <kbd>16 5 2 -3 4</kbd>\nList: [16, 5, 2, -3, 4]\nEnter shift: <kbd>10</kbd>\nList after shifting 10 time(s): [16, 5, 2, -3, 4]\n</pre>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "arr = [2, 5, 8]，value = 6",
      "output": "arr 变为 [2, 5, 6, 8]"
    },
    "statement": "<p>Your task is to implement the following function in <code>arrayInsertOrdered.c</code>:</p>\n\n<pre>void insertOrdered(int arr[], int size, int value);\n</pre>\n\n\n\t\t<p>This function takes an array which is sorted in increasing order, and inserts the given value into the array such that the array remains ordered.</p>\n\t\t\n\t\t\n\t\t\t<p>The function can assume that it can store an element at index <code>size</code>. For example, suppose that the inputs are:</p>\n\n\t\t\t<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/1/images/array-insert-ordered-1.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n\t\t\t<p>Then the value should be inserted like so:</p>\n\n\t\t\t<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/1/images/array-insert-ordered-2.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">",
    "sourceNotes": "<h5>Testing</h5>\n\t\t<p><code>arrayInsertOrdered.c</code> contains a main function which allows you to test your <code>insertOrdered</code> function. The main function:</p>\n\n\t\t<ul>\n\t\t\t<li>Reads the size of the array</li>\n\t\t\t<li>Reads the values of the array</li>\n\t\t\t<li>Displays the array</li>\n\t\t\t<li>Reads the value to be inserted</li>\n\t\t\t<li>Calls <code>insertOrdered</code></li>\n\t\t\t<li>Displays the updated array</li>\n\t\t</ul>\n\n\t\t<p>Here are some examples of its usage:</p>\n<pre>\n<kbd>make</kbd>\n...\n<kbd>./arrayInsertOrdered</kbd>\nEnter array size: <kbd>4</kbd>\nEnter array values (must be in ascending order): <kbd>2 5 7 8</kbd>\nArray: [2, 5, 7, 8]\nEnter value to insert: <kbd>6</kbd>\nArray after inserting 6: [2, 5, 6, 7, 8]\n<kbd>./arrayInsertOrdered</kbd>\nEnter array size: <kbd>5</kbd>\nEnter array values (must be in ascending order): <kbd>-8 -3 -1 2 4</kbd>\nArray: [-8, -3, -1, 2, 4]\nEnter value to insert: <kbd>-9</kbd>\nArray after inserting -9: [-9, -8, -3, -1, 2, 4]\n<kbd>./arrayInsertOrdered</kbd>\nEnter array size: <kbd>6</kbd>\nEnter array values (must be in ascending order): <kbd>-5 0 2 6 9 14</kbd>\nArray: [-5, 0, 2, 6, 9, 14]\nEnter value to insert: <kbd>2</kbd>\nArray after inserting 2: [-5, 0, 2, 2, 6, 9, 14]\n</pre>",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "2 → 5 → 8，value = 1",
      "output": "1 → 2 → 5 → 8"
    },
    "statement": "<p>Your task is to implement the following function in <code>listInsertOrdered.c</code>:</p>\n\n<pre>struct node *insertOrdered(struct node *list, int value);\n</pre>\n\n\n\t\t<p>This function takes a linked list which is sorted in increasing order, inserts the given value into the list such that the list remains ordered, and then returns a pointer to the start of the updated list.</p>",
    "sourceNotes": "<h5>Testing</h5>\n\t\t<p><code>listInsertOrdered.c</code> contains a main function which allows you to test your <code>insertOrdered</code> function. The main function:</p>\n\n\t\t<ul>\n\t\t\t<li>Reads the size of the list</li>\n\t\t\t<li>Reads the values of the list</li>\n\t\t\t<li>Displays the list</li>\n\t\t\t<li>Reads the value to be inserted</li>\n\t\t\t<li>Calls <code>insertOrdered</code></li>\n\t\t\t<li>Displays the updated list</li>\n\t\t</ul>\n\n\t\t<p>Here are some examples of its usage:</p>\n<pre>\n<kbd>make</kbd>\n...\n<kbd>./listInsertOrdered</kbd>\nEnter list size: <kbd>4</kbd>\nEnter list values (must be in ascending order): <kbd>2 5 7 8</kbd>\nList: [2, 5, 7, 8]\nEnter value to insert: <kbd>6</kbd>\nList after inserting 6: [2, 5, 6, 7, 8]\n<kbd>./listInsertOrdered</kbd>\nEnter list size: <kbd>5</kbd>\nEnter list values (must be in ascending order): <kbd>-8 -3 -1 2 4</kbd>\nList: [-8, -3, -1, 2, 4]\nEnter value to insert: <kbd>-9</kbd>\nList after inserting -9: [-9, -8, -3, -1, 2, 4]\n<kbd>./listInsertOrdered</kbd>\nEnter list size: <kbd>6</kbd>\nEnter list values (must be in ascending order): <kbd>-5 0 2 6 9 14</kbd>\nList: [-5, 0, 2, 6, 9, 14]\nEnter value to insert: <kbd>2</kbd>\nList after inserting 2: [-5, 0, 2, 2, 6, 9, 14]\n</pre>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "偶数节点值为 4、16、24、26",
      "output": "70"
    },
    "statement": "<p>Your task is to implement this function in <code>bst.c</code>:</p>\n\n<pre>int bstSumEvens(struct node *t);\n</pre>\n\n\n<p>This function should return the sum of all the even values in the given BST.</p>\n\n<p>For example, consider the following BST:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/images/sum-evens.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>Given the above BST, the function should return 70, because the sum of even values in the BST is 4 + 16 + 24 + 26 = 70.</p>\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>runBst</code> program.</p>\n\n\n\tNo time complexity analysis is required for this task.",
    "sourceNotes": "",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "根为 5，左右孩子分别为 2 和 7",
      "output": "2"
    },
    "statement": "<p>Your task is to implement this function in <code>bst.c</code>:</p>\n\n<pre>int bstNumLeaves(struct node *t);\n</pre>\n\n\n<p>This function should return the number of leaf nodes in the given BST. A leaf node is a node that has no child nodes. The following diagram shows some example trees, with the leaf nodes highlighted in red.</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/images/num-leaves.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>runBst</code> program.</p>",
    "sourceNotes": "<h4>Analysis 🔍</h4>\n\n<p>When you&#x27;re certain that the function works correctly, determine its worst-case time complexity and write it in <code>analysis.txt</code> along with an explanation. The time complexity should be in terms of n or h, where n is the number of nodes in the tree and h is the height of the tree. You should decide which is more appropriate for your implementation.</p>\n\n\n\tTo decide whether to use n or h, think about whether your function always traverses the entire tree (regardless of the structure of the tree) or just one or a constant number of branches. If a function only goes down one or a constant number of branches, then its efficiency depends on the height of the tree rather than the total number of nodes.",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "最小值 2，最大值 29",
      "output": "27"
    },
    "statement": "<p>Your task is to implement this function in <code>bst.c</code>:</p>\n\n<pre>int bstRange(struct node *t);\n</pre>\n\n\n<p>This function should return the range of the given BST. The range of a BST is the difference between its smallest value and largest value. If the given tree is empty, the function should return -1.</p>\n\n<p>For example, consider the following BST:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/images/range.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>Given the above BST, the function should return 27, because its smallest value is 2, its largest value is 29, and thus its range is 29 - 2 = 27.</p>\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>runBst</code> program.</p>",
    "sourceNotes": "<h4>Analysis 🔍</h4>\n\n<p>When you&#x27;re certain that the function works correctly, determine its worst-case time complexity and write it in <code>analysis.txt</code> along with an explanation. The time complexity should be in terms of n or h, where n is the number of nodes in the tree and h is the height of the tree. You should decide which is more appropriate for your implementation.</p>",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "根为 5，左右孩子为 2 和 7",
      "output": "只剩节点 5"
    },
    "statement": "<p>Your task is to implement this function in <code>bst.c</code>:</p>\n\n<pre>struct node *bstDeleteLeaves(struct node *t);\n</pre>\n\n\n<p>This function should delete all the leaf nodes in the given BST and return the root of the updated tree.</p>\n\n<p>For example, consider the following BST:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/images/delete-leaves-1.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>The BST contains four leaf nodes, so the function should delete all of them so that the BST now looks like this:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/images/delete-leaves-2.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>runBst</code> program.</p>\n\n\n\t<b>Note:</b> Be careful to avoid memory leaks! Code that causes memory leaks will incur a penalty which is 10% of the marks for this task.\n\n\t<p></p>\n\tFor this task, you can avoid memory leaks by calling <code>free()</code> on each node that you delete.\n\n\n\n\tNo time complexity analysis is required for this task.",
    "sourceNotes": "",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "树中有 3 和 11，value = 7",
      "output": "3 或 11"
    },
    "statement": "<p>Your task is to implement this function in <code>bst.c</code>:</p>\n\n<pre>int bstClosest(struct node *t, int value);\n</pre>\n\n\n<p>This function should return the value in the BST which is closest to the given value. The function can assume the given BST is not empty. If there is more than one closest value, the function may return any of them. For example, consider the following BST:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/images/closest.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<ul>\n\t<li>If the given value is 30, then the function should return 30, because the closest value to 30 in the BST is 30.</li>\n\t<li>If the given value is 15, then the function should return 18, because the closest value to 15 in the BST is 18.</li>\n\t<li>If the given value is 7, then the function should return 3 or 11, because the closest values to 7 in the BST are 3 or 11 and they are equally close to 7.</li>\n</ul>\n\n\n\t<b>Hint:</b> You may find the <code>abs</code> function (provided by <code>stdlib.h</code>) useful.\n\n\n\n\t<b>Note:</b> To get full marks for this task, your function must have a worst-case time complexity of O(h), where h is the height of the BST. A solution which is slower than O(h) can earn at most half of the marks for this task.\n\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>runBst</code> program.</p>\n\n\n\tNo time complexity analysis is required for this task.",
    "sourceNotes": "",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "根为 5，左右孩子为 3 和 7",
      "output": "5 3 7"
    },
    "statement": "<p>Your task is to implement this function in <code>bst.c</code>:</p>\n\n<pre>void bstLevelOrder(struct node *t);\n</pre>\n\n\n<p>This function should print the level-order traversal of the given BST on a single line separated by spaces (i.e., the same format as the other traverse-and-print functions). The following diagram aims to give an idea of how level-order traversal scans the nodes in a tree:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/images/level-order.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>The output from this traversal would be: <code>5  3  7  2  4  6  9  1  8</code>.</p>\n\n<p>Level-order traversal cannot be done recursively (at least not easily) and is typically implemented using a queue. The algorithm is roughly as follows:</p>\n\n<pre>\nLevel Order Traversal:\n\t<b>Input:</b> bst t\n\n\tcreate an empty queue\n\tadd the root node of t to the queue\n\t<b>while</b> the queue is not empty:\n\t\tremove the node at the front of the queue\n\t\tprint the value in the node\n\t\tadd the node&#x27;s left child (if any) to the queue\n\t\tadd the node&#x27;s right child (if any) to the queue\n</pre>\n\n<p>You must implement this algorithm by making use of the Queue ADT provided. Note that the Queue ADT stores pointers (<code>void *</code> is a generic pointer type). This is because you should store node pointers in the queue rather than integers - if the queue stored integers then after dequeuing an integer, there would be no easy way to add its children to the queue.</p>\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>runBst</code> program.</p>\n\n\n\t<b>Note:</b> Be careful to avoid memory leaks! Code that causes memory leaks will incur a penalty which is 10% of the marks for this task.",
    "sourceNotes": "<h4>Analysis 🔍</h4>\n\n<p>When you&#x27;re certain that the function works correctly, determine its worst-case time complexity and write it in <code>analysis.txt</code> along with an explanation. The time complexity should be in terms of n or h, where n is the number of nodes in the tree and h is the height of the tree. You should decide which is more appropriate for your implementation.</p>\n\n\n\t<b>Note:</b> Make sure to include any Queue ADT functions you used in your analysis, because the time complexity of these functions may affect the time complexity of <code>bstLevelOrder</code>!",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "根为 5，左右孩子为 3 和 7，depth = 0",
      "output": "只剩节点 5"
    },
    "statement": "<p>Your task is to implement this function in <code>bst.c</code>:</p>\n\n<pre>struct node *bstTrim(struct node *t, int depth);\n</pre>\n\n\n<p>This function should delete all the nodes in the given BST that are below the given depth and return the root of the updated tree. The root node is at depth 0, its children are at depth 1, and so on. If the given depth is -1, all nodes should be deleted.</p>\n\n<p>For example, consider the following BST:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/images/trim-1.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>If the given depth is 2, the function should delete all nodes below depth 2 so that the BST now looks like so:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/images/trim-2.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>runBst</code> program.</p>\n\n\n\t<b>Note:</b> Be careful to avoid memory leaks! Code that causes memory leaks will incur a penalty which is 10% of the marks for this task.\n\n\n\n\tNo time complexity analysis is required for this task.",
    "sourceNotes": "",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "第一棵含 {3, 7, 23}，第二棵含 {3, 17, 23}",
      "output": "2"
    },
    "statement": "<p>Your task is to implement this function in <code>numCommonValues.c</code>:</p>\n\n<pre>int numCommonValues(struct node *t1, struct node *t2);\n</pre>\n\n\n<p>This function should return the number of common values between the two given BSTs. <b>The function must not use arrays or <code>malloc</code>/<code>calloc</code>, either directly or indirectly.</b></p>\n\n<p>For example, consider the following BSTs:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/4/images/num-common-values.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>Given the above BSTs, the function should return 3, because there are three common values between them: 3, 17 and 23.</p>\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>numCommonValues</code> program. The program should behave like so:</p>\n\n<pre>\n<kbd>./numCommonValues</kbd>\nEnter values to insert in t1: <kbd>14 7 3 23 20 17 29</kbd>\nt1:\n\n    14\n    / \\\n   /   \\\n  7    23\n /     / \\\n3     /   \\\n     20   29\n    /\n   17\n\nEnter values to insert in t2: <kbd>17 3 2 16 23 26 24</kbd>\nt2:\n\n    17\n    / \\\n   /   \\\n  3    23\n / \\     \\\n2  16    26\n         /\n        24\n\nNumber of common values: 3\n</pre>\n\n\n\t<b>Note:</b> Arrays and <code>malloc</code>/<code>calloc</code> are forbidden in this task. Solutions that use arrays or <code>malloc</code>/<code>calloc</code> will not receive any marks.",
    "sourceNotes": "<h4>Analysis 🔍</h4>\n\n<p>When you&#x27;re certain that the function works correctly, determine its worst-case time complexity and write it in <code>analysis.txt</code> along with an explanation. The time complexity should be in terms of one or more of the following: n _1 (the number of nodes in <code>t1</code>), h_1 (the height of <code>t1</code>), n_2 (the number of nodes in <code>t2</code>), and h_2 (the height of <code>t2</code>).</p>\n\n<h4>Hints</h4>\n\n<p>Please give the task at least 10 minutes of thought before looking at these hints!</p>\n\n\n  \n    \n      \n        Hint 1\n      \n    \n    \n      \n        <p>Here is a simple way to solve this problem:</p>\n        <p>For each value in one of the BSTs (say <code>t1</code>), check if the value exists in the other BST (<code>t2</code>)</p>\n        <p>Think about how you could implement this (and try implementing it) before looking at the next hint!</p>\n      \n    \n  \n  \n    \n      \n        Hint 2\n      \n    \n    \n      \n\t\t<p>This problem is similar to the <code>bstCountOdds</code> tutorial question, but instead of counting the number of values that <i>are odd</i>, we need to count the number of values that <i>exist in the other BST</i>. This means you can solve this problem by following the same structure as <code>bstCountOdds</code>.</p>\n\t\t<p>Try implementing this before looking at the next hint!</p>\n      \n    \n  \n  \n    \n      \n        Hint 3\n      \n    \n    \n      \n        <p>Could you implement a helper function to check if a BST contains a value? Better yet, is there a function provided in <code>bst.h</code> that you can use?</p>\n      \n    \n  \n  \n    \n      \n        Hint 4\n      \n    \n    \n      \n        <p>The previous hints suggest that we need to recurse through one of the BSTs (say <code>t1</code>) to check if each of its values exists in the other BST (<code>t2</code>). When you recurse, you should simply pass down the root node of <code>t2</code> instead of <code>t2-&gt;left</code> or <code>t2-&gt;right</code>, because the value you need to check could be anywhere in <code>t2</code>.</p>",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "A 和 B 原先不是好友",
      "output": "返回 true，双方都能查到对方"
    },
    "context": "fb->names[id] 是用户名；fb->adj[id] 是该用户的邻接表。节点字段为 v（好友 ID）和 next。",
    "statement": "<p>Implement the <code>FbFriend()</code> function in <code>Fb.c</code>, which takes the names of two people, and friends them if they are not already friends. The function should return true if the people were not friends and were successfully friended, and false if the two people were already friends.</p>\n\n<p>You should implement your function so that the adjacency lists are kept in ascending order. For example, in the example in the Background section, since Harry (0) is friends with Ron (1) and Hermione (2), 1 should appear before 2 in Harry&#x27;s adjacency list.</p>\n\n<p>You can assume that the two people exist and are not the same person.</p>\n\n\n\tWe have provided a function <code>newAdjNode</code> which creates a new adjacency list node.\n\n\n\n\tIs inserting into an adjacency list similar to a problem that you have solved in a previous lab exercise?\n\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>runFb</code> program. You can test whether your function works using the <code>+</code> (add person), <code>f</code> (friend) and <code>s</code> (friendship status) commands. For example:</p>\n\n<pre>\n<kbd>./runFb</kbd>\nFriendbook v1.0\nEnter ? to see the list of commands.\n&gt; <kbd>+ Harry</kbd>\nHarry was successfully added to Friendbook!\n&gt; <kbd>+ Ron</kbd>\nRon was successfully added to Friendbook!\n&gt; <kbd>+ Hermione</kbd>\nHermione was successfully added to Friendbook!\n&gt; <kbd>s Ron Hermione</kbd>\nRon and Hermione are not friends.\n&gt; <kbd>f Ron Hermione</kbd>\nSuccessfully friended Ron and Hermione!\n&gt; <kbd>s Ron Hermione</kbd>\nRon and Hermione are friends.\n&gt; <kbd>s Harry Ron</kbd>\nHarry and Ron are not friends.\n&gt; <kbd>f Harry Ron</kbd>\nSuccessfully friended Harry and Ron!\n&gt; <kbd>s Harry Ron</kbd>\nHarry and Ron are friends.\n&gt; <kbd>s Ron Hermione</kbd>\nRon and Hermione are friends.\n&gt; <kbd>s Harry Hermione</kbd>\nHarry and Hermione are not friends.\n</pre>\n\n<p>You can run the above test case with the following command:</p>\n\n<pre>\n<kbd>./runFb -e &lt; tests/friend-1.txt</kbd>\n</pre>\n\n<p>This command runs the <code>./runFb</code> program and causes it to read Friendbook commands from the file <code>tests/friend-1.txt</code>. The <code>-e</code> option (which stands for &quot;echo&quot;) causes the program to print out the commands to the terminal as they are being run, which makes it easy to see which operations are being performed.</p>",
    "sourceNotes": "<h4>Analysis 🔍</h4>\n\n<p>When you&#x27;re certain that the function works correctly, determine its worst-case time complexity and write in <code>analysis.txt</code> along with an explanation. The time complexity should be in terms of n, where n is the total number of people.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "A 的好友是 B 和 C",
      "output": "2"
    },
    "context": "fb->names[id] 是用户名；fb->adj[id] 是该用户的邻接表。节点字段为 v（好友 ID）和 next。",
    "statement": "<p>Implement the <code>FbNumFriends()</code> function in <code>Fb.c</code>, which takes the name of a person and returns the number of friends they have. You can assume that the person exists.</p>\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>runFb</code> program. Here is an example test case:</p>\n\n<pre>\n<kbd>./runFb</kbd>\nFriendbook v1.0\nEnter ? to see the list of commands.\n&gt; <kbd>+ Harry</kbd>\nHarry was successfully added to Friendbook!\n&gt; <kbd>+ Ron</kbd>\nRon was successfully added to Friendbook!\n&gt; <kbd>+ Hermione</kbd>\nHermione was successfully added to Friendbook!\n&gt; <kbd>f Harry Ron</kbd>\nSuccessfully friended Harry and Ron!\n&gt; <kbd>f Ron Hermione</kbd>\nSuccessfully friended Ron and Hermione!\n&gt; <kbd>n Harry</kbd>\nHarry has 1 friend.\n&gt; <kbd>n Ron</kbd>\nRon has 2 friends.\n&gt; <kbd>n Hermione</kbd>\nHermione has 1 friend.\n</pre>\n\n<p>The Friendbook commands used in this example have been stored in the file <code>tests/num-friends-1.txt</code>, so you can also run this test case with the following command:</p>\n\n<pre>\n<kbd>./runFb -e &lt; tests/num-friends-1.txt</kbd>\n</pre>",
    "sourceNotes": "<h4>Analysis 🔍</h4>\n\n<p>When you&#x27;re certain that the function works correctly, determine its worst-case time complexity and write in <code>analysis.txt</code> along with an explanation. The time complexity should be in terms of n, where n is the total number of people.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "A 的好友是 B、C；D 的好友是 B、E",
      "output": "[B]"
    },
    "context": "fb->names[id] 是用户名；fb->adj[id] 是该用户的邻接表。节点字段为 v（好友 ID）和 next。\nListNew() 创建列表，ListAppend(list, name) 添加名字。",
    "statement": "<p>Implement the <code>FbMutualFriends()</code> function in <code>Fb.c</code>, which takes the names of two people, and returns a list of all their mutual friends. A person is a mutual friend of two people if that person is friends with both of those people. To illustrate this, here is an example:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/5/images/mutual-friends.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>In the example, Harry and Hermione have three mutual friends: Neville, Ron and Luna. Draco and Vincent have one mutual friend: Gregory. Harry and Draco have no mutual friends.</p>\n\n<p>You can assume that the two people exist and are not the same person. The mutual friends may be added to the list in any order.</p>\n\n\n\tTo find out how to create a list and add names to it, see the comments in <code>List.h</code>, or read one of the existing functions in <code>Fb.c</code> that use the List ADT.\n\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>runFb</code> program. You can run the following command to test the scenario given above:</p>\n\n<pre>\n<kbd>./runFb -e &lt; tests/mutual-friends-1.txt</kbd>\n</pre>",
    "sourceNotes": "<h4>Analysis 🔍</h4>\n\n<p>When you&#x27;re certain that the function works correctly, determine its worst-case time complexity and write in <code>analysis.txt</code> along with an explanation. The time complexity should be in terms of n, where n is the total number of people.</p>",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "A 和 B 原先是好友",
      "output": "返回 true，双方好友名单都移除对方"
    },
    "context": "fb->names[id] 是用户名；fb->adj[id] 是该用户的邻接表。节点字段为 v（好友 ID）和 next。",
    "statement": "<p>Implement the <code>FbUnfriend()</code> function in <code>Fb.c</code>, which takes the names of two people, and unfriends them if they are friends. The function should return true if the people were friends and were successfully unfriended, and false if the two people were not friends (and so they could not be unfriended).</p>\n\n<p>You can assume that the two people exist and are not the same person.</p>\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>runFb</code> program. Here is an example test case:</p>\n\n<pre>\n<kbd>./runFb</kbd>\nFriendbook v1.0\nEnter ? to see the list of commands.\n&gt; <kbd>+ Harry</kbd>\nHarry was successfully added to Friendbook!\n&gt; <kbd>+ Ron</kbd>\nRon was successfully added to Friendbook!\n&gt; <kbd>+ Hermione</kbd>\nHermione was successfully added to Friendbook!\n&gt; <kbd>f Harry Ron</kbd>\nSuccessfully friended Harry and Ron!\n&gt; <kbd>f Ron Hermione</kbd>\nSuccessfully friended Ron and Hermione!\n&gt; <kbd>s Harry Ron</kbd>\nHarry and Ron are friends.\n&gt; <kbd>s Ron Hermione</kbd>\nRon and Hermione are friends.\n&gt; <kbd>u Harry Ron</kbd>\nSuccessfully unfriended Harry and Ron!\n&gt; <kbd>s Harry Ron</kbd>\nHarry and Ron are not friends.\n&gt; <kbd>s Ron Hermione</kbd>\nRon and Hermione are friends.\n&gt; <kbd>n Harry</kbd>\nHarry has 0 friends.\n</pre>\n\n<p>The Friendbook commands used in this example have been stored in the file <code>tests/unfriend-1.txt</code>, so you can also run this test case with the following command:</p>\n\n<pre>\n<kbd>./runFb -e &lt; tests/unfriend-1.txt</kbd>\n</pre>\n\n\n\tNo time complexity analysis is required for this task.",
    "sourceNotes": "",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "A 只认识 B，B 还认识 C",
      "output": "推荐 C，共同好友数 1"
    },
    "context": "fb->names[id] 是用户名；fb->adj[id] 是该用户的邻接表。节点字段为 v（好友 ID）和 next。",
    "statement": "<p>Implement the <code>FbFriendRecs1()</code> function in <code>Fb.c</code>, which takes the name of a person and finds friend recommendations for them. The function should store the recommendations in the given <code>recs</code> array and return the number of recommendations stored in the array.</p>\n\n<p>The function should only recommend people who are friends of friends of the person. In other words, it should only recommend people who share at least one mutual friend with the person. Obviously, it should not recommend someone who is already the person&#x27;s friend.</p>\n\n<p>Each recommendation consists of the name of the person being recommended and the number of mutual friends they share with the given person.</p>\n\n<p>The recommendations should be sorted in descending order on the number of mutual friends shared, since someone with more mutual friends is more likely to be known by the person, and is therefore more likely to be added as a friend. If two people share the same number of mutual friends, they may be sorted in any order.</p>\n\n<p>For example, consider the following scenario:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/5/images/friend-recs-1.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>If <code>FbFriendRecs1()</code> is called with the name &quot;Harry&quot;, the following output should be produced:</p>\n\n<pre>\nHarry&#x27;s friend recommendations:\n\tNeville                3 mutual friends\n\tLavender               2 mutual friends\n\tDraco                  1 mutual friends\n</pre>\n\n<p><b>Explanation:</b> Neville should be recommended first as he shares three mutual friends with Harry: Luna, Ron and Hermione. Lavender should be recommended next as she shares two mutual friends with Harry: Ron and Hermione. Draco should be recommended last as he shares just one mutual friend with Harry: Hermione. (<i>Note:</i> There is no typo on the last line - it is left as &quot;friends&quot; for simplicity&#x27;s sake.)</p>\n\n\n\t<b>Hint:</b> You can use <code>strcpy</code> to copy a name into the <code>name</code> field of the recommendation struct.\n\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>runFb</code> program. You can run the following command to test the scenario given above:</p>\n\n<pre>\n<kbd>./runFb -e &lt; tests/friend-recs-1.txt</kbd>\n</pre>",
    "sourceNotes": "<h4>Analysis 🔍</h4>\n\n<p>When you&#x27;re certain that the function works correctly, determine its worst-case time complexity and write in <code>analysis.txt</code> along with an explanation. The time complexity should be in terms of n, where n is the total number of people.</p>",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "三角形 0—1、0—2、1—2，src = 0",
      "output": "树边 0—1、0—2"
    },
    "statement": "<p>One idea discussed in lectures is that if we perform a graph traversal and take all the edges were <i>used</i> during the traversal (i.e., edges that led to an unvisited vertex during the traversal), these edges produce a spanning tree.</p>\n\n<p>For example, consider the following graph:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/7/images/bfs-tree-1.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>If a breadth-first search was performed on the graph starting from vertex 0, then the edges used during the BFS would produce the following spanning tree:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/7/images/bfs-tree-2.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>One way to identify these edges is to use the predecessor array from the graph traversal, since the edges in the spanning tree simply connect each vertex to its predecessor. For example, the predecessor array below was produced from a BFS on the above graph starting from vertex 0. You can check it against the spanning tree shown above.</p>\n\n\n\n<table>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>Index</td>\n\t\t\t<td>0</td>\n\t\t\t<td>1</td>\n\t\t\t<td>2</td>\n\t\t\t<td>3</td>\n\t\t\t<td>4</td>\n\t\t\t<td>5</td>\n\t\t\t<td>6</td>\n\t\t\t<td>7</td>\n\t\t\t<td>8</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td>-</td>\n\t\t\t<td>0</td>\n\t\t\t<td>0</td>\n\t\t\t<td>0</td>\n\t\t\t<td>2</td>\n\t\t\t<td>1</td>\n\t\t\t<td>3</td>\n\t\t\t<td>5</td>\n\t\t\t<td>6</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>Your task is to implement breadth-first search and then return the spanning tree produced by the BFS as a graph. Implement this function in <code>bfsTree.c</code>:</p>\n\n<pre>Graph bfsTree(Graph g, int src);\n</pre>\n\n\n<p>This function takes a graph and a vertex <code>src</code>, and returns a new graph which is the spanning tree produced by a BFS in the graph starting from <code>src</code>. The BFS should prioritise lower-numbered vertices, so if a vertex has multiple neighbours, they should be enqueued in increasing order.</p>\n\n<p>You can assume that the graph is connected and contains at least two vertices.</p>\n\n\n\tFor this task, you must use the adjacency matrix representation, which is defined in <code>GraphAdjMatrixRep.h</code>.\n\n\n\n\t<p>Here is the pseudocode for BFS:</p>\n\n<pre>\nbfs(g, src):\n\t<b>Inputs:</b> graph g\n\t        source vertex src\n\t\n\tinitialise visited and predecessor arrays\n\tcreate queue and enqueue src\n\n\tmark src as visited\n\t<b>while</b> the queue is not empty:\n\t\tdequeue u\n\n\t\t<b>for each</b> neighbour v of u:\n\t\t\t<b>if</b> v has not been visited:\n\t\t\t\tmark v as visited\n\t\t\t\tset predecessor of v to u\n\t\t\t\tenqueue v\n</pre>\n\n\n\n\t<b>Hint:</b> When creating the new spanning tree graph, you can use <code>GraphInsertEdge</code> to insert edges.",
    "sourceNotes": "<h4>Testing</h4>\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>bfsTree</code> program. The program takes two command-line arguments: the path to a graph file, and a source vertex. For example:</p>\n\n<pre>\n<kbd>make</kbd>\n...\n<kbd>./bfsTree graphs/graph-1.txt 0</kbd>\n-----\nGraph\n-----\nNumber of vertices: 9\nEdges:\n 0: 1 2 3\n 1: 0 3 5\n 2: 0 3 4\n 3: 0 1 2 6\n 4: 2\n 5: 1 7\n 6: 3 7 8\n 7: 5 6\n 8: 6\n\n----------------------\nBFS tree from vertex 0\n----------------------\nNumber of vertices: 9\nEdges:\n 0: 1 2 3\n 1: 0 5\n 2: 0 4\n 3: 0 6\n 4: 2\n 5: 1 7\n 6: 3 8\n 7: 5\n 8: 6\n</pre>\n\n<p>You can check whether the output is correct by using the graph visualiser tool. First, switch to <i>2-graph mode</i>, then copy the input graph into the first panel, and then copy the output graph into the second panel. After moving the vertices around, you should get the following:</p>\n\n\n\t<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/7/images/bfs-tree-3.png\" alt=\"Diagram from the original exercise\" loading=\"lazy\">",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "三角形 0—1、0—2、1—2，src = 0",
      "output": "树边 0—1、1—2"
    },
    "statement": "<p>Similarly, graph traversal with depth-first search also produces a spanning tree.</p>\n\n<p>For example, depth-first search on the graph shown in Task 1 would produce the following spanning tree (assuming that the DFS prioritises lower-numbered vertices):</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/7/images/dfs-tree-1.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>Your task is to implement <i>recursive</i> depth-first search and then return the spanning tree produced by the DFS as a graph. Implement this function in <code>dfsTree.c</code>:</p>\n\n<pre>Graph dfsTree(Graph g, int src);\n</pre>\n\n\n<p>This function takes a graph and a vertex <code>src</code>, and returns a new graph which is the spanning tree produced by a DFS in the graph starting from <code>src</code>. The DFS should prioritise lower-numbered vertices, so if a vertex has multiple neighbours, the neighbour with the lowest number should be visited first.</p>\n\n<p>You can assume that the graph is connected and contains at least two vertices.</p>\n\n\n\tFor this task, you must use the adjacency list representation, which is defined in <code>GraphAdjListRep.h</code>.\n\n\n\n\t<p>Here is the pseudocode for DFS:</p>\n\n<pre>\ndfs(g, src):\n\t<b>Inputs:</b> graph g\n\t        source vertex src\n\t\n\tinitialise visited and predecessor arrays\n\n\trecursiveDfs(g, src, visited, predecessor)\n\nrecursiveDfs(g, u, visited, predecessor):\n\tmark u as visited\n\n\t<b>for each</b> neighbour v of u:\n\t\t<b>if</b> v has not been visited:\n\t\t\tset predecessor of v to u\n\t\t\trecursiveDfs(g, v, visited, predecessor)\n</pre>",
    "sourceNotes": "<h4>Testing</h4>\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>dfsTree</code> program. The program takes two command-line arguments: the path to a graph file, and a source vertex. For example:</p>\n\n<pre>\n<kbd>make</kbd>\n...\n<kbd>./dfsTree graphs/graph-1.txt 0</kbd>\n-----\nGraph\n-----\nNumber of vertices: 9\nEdges:\n 0: 1 2 3\n 1: 0 3 5\n 2: 0 3 4\n 3: 0 1 2 6\n 4: 2\n 5: 1 7\n 6: 3 7 8\n 7: 5 6\n 8: 6\n\n----------------------\nDFS tree from vertex 0\n----------------------\nNumber of vertices: 9\nEdges:\n 0: 1\n 1: 0 3\n 2: 3 4\n 3: 1 2 6\n 4: 2\n 5: 7\n 6: 3 7 8\n 7: 5 6\n 8: 6\n</pre>\n\n<p>As in the previous task, you can check whether the output is correct by using the graph visualiser tool.",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "0—6—1—10 是 0 到 10 的最短路径",
      "output": "path = [0, 6, 1, 10]，返回 4"
    },
    "statement": "<p>Your task is to implement this function in <code>shortestPath.c</code>:</p>\n\n<pre>int shortestPath(Graph g, int src, int dest, int path[]);\n</pre>\n\n\n<p>This function takes a graph, a source vertex <code>src</code>, a destination vertex <code>dest</code>, and an array <code>path</code>, and finds the shortest path from <code>src</code> to <code>dest</code>. It should store the path as a sequence of vertices in the given <code>path</code> array and return the number of vertices stored in the array. If there is no path from <code>src</code> to <code>dest</code>, the function should return 0. If there are multiple shortest paths from <code>src</code> to <code>dest</code>, it may return any of them.</p>\n\n<p>For example, consider the following graph:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/7/images/shortest-path-1.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>If <code>src</code> is 0 and <code>dest</code> is 10, then the function should store the path <code>[0, 6, 1, 10]</code> in the <code>path</code> array and return 4.</p>\n\n\n\tFor this task, you must use the adjacency list representation, which is defined in <code>GraphAdjListRep.h</code>.",
    "sourceNotes": "<h4>Testing</h4>\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>shortestPath</code> program. The program takes three command-line arguments: the path to a graph file, a source vertex and a destination vertex. For example:</p>\n\n<pre>\n<kbd>make</kbd>\n...\n<kbd>./shortestPath graphs/graph-2.txt 0 10</kbd>\n-----\nGraph\n-----\nNumber of vertices: 11\nEdges:\n 0: 3 4 6\n 1: 5 6 8 10\n 2: 9 10\n 3: 0 6 7\n 4: 0 5\n 5: 1 4 6 9\n 6: 0 1 3 5\n 7: 3\n 8: 1\n 9: 2 5\n 10: 1 2\n\nShortest path from 0 to 10: 0 6 1 10\n</pre>\n\n<h4>Analysis 🔍</h4>\n\n<p>When you&#x27;re certain that the function works correctly, determine its worst-case time complexity and write it in <code>analysis.txt</code> along with an explanation. The time complexity should be in terms of V and/or E, where V is the number of vertices in the graph and E is the number of edges in the graph.</p>",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "三角形 0—1、1—2、2—0",
      "output": "path 可以是 [0, 1, 2, 0]，返回 4"
    },
    "statement": "<p>Your task is to implement this function in <code>cycle.c</code>:</p>\n\n<pre>int cycle(Graph g, int path[]);\n</pre>\n\n\n<p>This function takes a graph and an array <code>path</code>, and finds a cycle in the graph. It should store the cycle as a sequence of vertices in the given <code>path</code> array such that the first and last vertices are the same (showing that it is a cycle), and return the number of vertices stored in the array. If there is no cycle in the graph, the function should return 0. If there are multiple cycles, it may return any of them.</p>\n\n<p>For example, consider the following graph:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/7/images/cycle-1.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>The function should store one of the following sequences in the <code>path</code> array and return 5.</p>\n\n<pre>\n[1, 2, 6, 5, 1]\n[1, 5, 6, 2, 1]\n[2, 6, 5, 1, 2]\n[2, 1, 5, 6, 2]\n[6, 5, 1, 2, 6]\n[6, 2, 1, 5, 6]\n[5, 1, 2, 6, 5]\n[5, 6, 2, 1, 5]\n</pre>\n\n\n\tFor this task, you must use the adjacency matrix representation, which is defined in <code>GraphAdjMatrixRep.h</code>.",
    "sourceNotes": "<h4>Hints</h4>\n\n<p>Please give the task at least 10 minutes of thought before looking at these hints!</p>\n\n\n  \n    \n      \n        Hint 1\n      \n    \n    \n      \n        <p>The problem of checking if a cycle exists is covered in lectures. How can you modify the solution to get the vertices in the cycle?</p>\n      \n    \n  \n  \n    \n      \n        Hint 2\n      \n    \n    \n      \n\t\t<p>Think about how you could use a predecessor array to get the vertices in the cycle.</p>\n      \n    \n  \n  \n    \n      \n        Hint 3\n      \n    \n    \n      \n\t\t<p>As soon as you detect a cycle during the graph traversal, use the predecessor array to trace backwards through the cycle. Be careful, because the source vertex might not be part of the cycle!</p>\n      \n    \n  \n\n\n<h4>Testing</h4>\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>cycle</code> program. The program takes one command-line argument: the path to a graph file. For example:</p>\n\n<pre>\n<kbd>make</kbd>\n...\n<kbd>./cycle graphs/graph-3.txt</kbd>\n-----\nGraph\n-----\nNumber of vertices: 7\nEdges:\n 0: 1 4\n 1: 0 2 5\n 2: 1 3 6\n 3: 2\n 4: 0\n 5: 1 6\n 6: 2 5\n\nCycle: 1 5 6 2 1\n</pre>\n\n<h4>Analysis 🔍</h4>\n\n<p>When you&#x27;re certain that the function works correctly, determine its worst-case time complexity and write it in <code>analysis.txt</code> along with an explanation. The time complexity should be in terms of V and/or E, where V is the number of vertices in the graph and E is the number of edges in the graph.</p>",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "0—1—2，src = 0",
      "output": "vertex = 2，distance = 2"
    },
    "statement": "<p>Your task is to implement this function in <code>furthestVertex.c</code>:</p>\n\n<pre>struct result furthestVertex(Graph g, int src);\n</pre>\n\n\n<p>This function takes a graph and a source vertex <code>src</code>, and finds the vertex which is furthest from <code>src</code> but still reachable. It should return that vertex and its distance from <code>src</code> in a <code>struct result</code>, which is defined as follows:</p>\n\n<pre>struct result {\n\tint vertex;\n\tint distance;\n};\n</pre>\n\n\n<p>If there are multiple vertices which are furthest from <code>src</code>, the function may return any of them.</p>\n\n<p>For example, consider the following graph:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/7/images/furthest-vertex-1.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>If <code>src</code> is 0, then the function should return a <code>struct result</code> with <code>vertex</code> set to 6 and <code>distance</code> set to 5.\n\n\n\tFor this task, you must use the adjacency matrix representation, which is defined in <code>GraphAdjMatrixRep.h</code>.",
    "sourceNotes": "<h4>Testing</h4>\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>furthestVertex</code> program. The program takes two command-line arguments: the path to a graph file and a source vertex. For example:</p>\n\n<pre>\n<kbd>make</kbd>\n...\n<kbd>./furthestVertex graphs/graph-4.txt 0</kbd>\n-----\nGraph\n-----\nNumber of vertices: 12\nEdges:\n 0: 3 7\n 1: 3\n 2: 3 5 7 11\n 3: 0 1 2\n 4: 10 11\n 5: 2 9\n 6: 8\n 7: 0 2 11\n 8: 6 9 10\n 9: 5 8 11\n 10: 4 8\n 11: 2 4 7 9\n\nFurthest vertex: 6 (distance = 5)\n</pre>\n\n\n\tNo time complexity analysis is required for this task.",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "分量分别为 {0, 1, 2} 和 {3, 4}",
      "output": "写入 0、1、2，返回 3"
    },
    "statement": "<p>Your task is to implement this function in <code>largestComponent.c</code>:</p>\n\n<pre>int largestComponent(Graph g, int component[]);\n</pre>\n\n\n<p>This function takes a graph and finds the largest connected component in the graph, which is the connected component that contains the most vertices. It should store the vertices in this component in the given <code>component</code> array (in any order) and return the number of vertices stored. If there are multiple connected components containing the most vertices, the function may return any of them.</p>\n\n<p>For example, consider the following graph:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/7/images/largest-component-1.svg\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>The largest connected component is the component that contains the vertices 3, 4, 6, 7 and 12, so the function should store these vertices in the <code>component</code> array (in any order) and return 5.</p>\n\n\n\tFor this task, you must use the adjacency list representation, which is defined in <code>GraphAdjListRep.h</code>.",
    "sourceNotes": "<h4>Testing</h4>\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with <code>make</code> and running the <code>largestComponent</code> program. The program takes one command-line argument: the path to a graph file. For example:</p>\n\n<pre>\n<kbd>make</kbd>\n...\n<kbd>./largestComponent graphs/graph-5.txt</kbd>\n-----\nGraph\n-----\nNumber of vertices: 14\nEdges:\n 0: 2 10\n 1: 8\n 2: 0\n 3: 6 12\n 4: 6 12\n 5: 13\n 6: 3 4 7\n 7: 6 12\n 8: 1 9 11\n 9: 8\n 10: 0\n 11: 8\n 12: 3 4 7\n 13: 5\n\nLargest component contains 5 vertices: 3 4 6 7 12\n</pre>\n\n\n\tNo time complexity analysis is required for this task.",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "边 0—1 重 5，0—2 重 4，1—2 重 3",
      "output": "选 0—2 和 1—2，总权重 7"
    },
    "statement": "<p>Implement the <code>GraphMst()</code> function in <code>Graph.c</code> which takes in a graph and returns a minimum spanning tree of the graph as a new graph. If the given graph has no minimum spanning tree, the function should return NULL. If the graph has multiple minimum spanning trees, you can return any of them. The function must not modify the given graph.</p>\n\n<p>You may use any minimum spanning tree algorithm you like. You can (and are encouraged to) make use of the priority queue ADT that we&#x27;ve supplied.</p>\n\n<p>When you think you are done, use the <code>make</code> command to recompile the <code>testGraphMst</code> program and use the provided input files (and/or your own) in the <code>tests/graphMst</code> directory to test your code. Each input file <code><i>t</i>.in</code> has a corresponding expected output file <code><i>t</i>.exp</code>. For example:</p>\n\n<pre>\n<kbd>./testGraphMst &lt; tests/graphMst/1.in</kbd>\nGraph:\nNumber of vertices: 3\nNumber of edges: 3\nEdge 0 - 1: 5.000000\nEdge 0 - 2: 4.000000\nEdge 1 - 2: 3.000000\n\nMinimum Spanning Tree:\nNumber of vertices: 3\nNumber of edges: 2\nEdge 0 - 2: 4.000000\nEdge 1 - 2: 3.000000\n<kbd></kbd># now compare with expected output in 1.exp\n</pre>\n\n<p>Another way to test your code is to add the <b><code>-v</code></b> flag to toggle the program&#x27;s visualiser mode. This will cause the program to output an HTML page containing a visualisation of the minimum spanning tree produced by your function. You&#x27;ll need to redirect the output to an <code>.html</code> file like so:</p>\n\n<pre>\n<kbd>./testGraphMst -v &lt; tests/graphMst/1.in &gt; tests/graphMst/1.html</kbd>\n</pre>\n\n<p>Now open the file in your web browser to get a nice visualisation of the result. For example, here is what the visualisation for <code>3.in</code> should look like:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/8/images/mst-1.png\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n<p>The edges of the MST (if it exists) will be highlighted in green. The vertices will always be initially arranged in a circle, but you can change how the graph looks by dragging the vertices around the canvas.</p>\n\n\n\tThe <code>.html</code> file must be in the <code>tests/graphMst</code> directory for the visualiser to work, because the visualiser depends on other files in that directory (<code>style.css</code> and <code>visualiser.js</code>). Alternatively, you can move <code>style.css</code> and <code>visualiser.js</code> to the same directory as the <code>.html</code> file.",
    "sourceNotes": "",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "电厂 (0,0)，两座城市 (1,0)、(3,0)",
      "output": "电厂接近处城市，再连接两城，总长度 3"
    },
    "context": "struct place 提供 name、x、y。struct powerLine 的两个端点是 p1 和 p2。powerLines 已有足够空间。",
    "statement": "<p>Implement the <code>planGrid1()</code> function in <code>planner.c</code> which takes an array of cities (of size <code>numCities</code>) and a power plant, and determines the most optimal (i.e., cost-minimising) configuration of power lines such that every city has access to electricity. The function should fill the given <code>powerLines</code> array with the required power lines and return the number of power lines stored in the array. If there are multiple optimal configurations, you can choose any of them.</p>\n\n<p>You can make the following simplifying assumptions:</p>\n<ul>\n\t<li>Cost is directly proportional to the total length of power lines used, so you should aim to minimise this total length.</li>\n\t<li>Power lines can only be built between pairs of cities or between a city and a power plant, so you can&#x27;t create a new place and build a power line to it.</li>\n\t<li>You can assume the land is flat so that there is no additional cost from a difference in altitude. The cost of a power line between two locations (x_1, y_1) and (x_2, y_2) will therefore be directly proportional to\n\t\t$$ \\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2} $$\n\t</li>\n</ul>\n\n<p>Please note that you are not required to calculate the total cost - you are only required to find the configuration of power lines that would minimise the cost.</p>\n\n<p>When you think you are done, use the <code>make</code> command to recompile the <code>gridPlanner</code> program and use the provided input files (and/or your own) in the <code>tests/gridPlanner</code> directory to test your code. Each input file <code><i>t</i>.in</code> has a corresponding expected output file <code><i>t</i>.exp</code>. For example:</p>\n\n<pre>\n<kbd>./gridPlanner &lt; tests/gridPlanner/1.in</kbd>\nCity Sydney at (870, 204)\nCity Melbourne at (727, 94)\nCity Adelaide at (581, 174)\nCity Alice Springs at (474, 469)\nCity Darwin at (406, 736)\nCity Perth at (65, 254)\nCity Brisbane at (910, 374)\nPower Plant Canberra at (821, 165)\nPower line between Sydney (870, 204) and Canberra (821, 165)\nPower line between Sydney (870, 204) and Brisbane (910, 374)\nPower line between Melbourne (727, 94) and Canberra (821, 165)\nPower line between Melbourne (727, 94) and Adelaide (581, 174)\nPower line between Adelaide (581, 174) and Alice Springs (474, 469)\nPower line between Alice Springs (474, 469) and Darwin (406, 736)\nPower line between Alice Springs (474, 469) and Perth (65, 254)\n<kbd></kbd># now compare with 1.exp\n</pre>\n\n\n<b>Note:</b> You are not required to match the exact order of power lines or match the order of place names for each power line. For example, it would be valid for the power line between Sydney and Canberra to read:\n\n<pre>\nPower line between Canberra (821, 165) and Sydney (870, 204) \n</pre>\n\n\n\n\n<p>You can also test by using the program&#x27;s visualiser mode:</p>\n\n<pre>\n<kbd>./gridPlanner -v &lt; tests/gridPlanner/1.in &gt; tests/gridPlanner/1.html</kbd>\n</pre>\n\n<p>Here is what the visualisation for <code>1.in</code> should look like:</p>\n\n<img src=\"https://cgi.cse.unsw.edu.au/~cs2521/26T3/lab/8/images/grid-1.png\" alt=\"Diagram from the original exercise\" loading=\"lazy\">\n\n\n\tThe <code>.html</code> file must be in the <code>tests/gridPlanner</code> directory for the visualiser to work, because the visualiser depends on other files in that directory (<code>style.css</code> and <code>visualiser.js</code>). Alternatively, you can move <code>style.css</code> and <code>visualiser.js</code> to the same directory as the <code>.html</code> file.\n\n\n\n\t<p>Only the input files <code>1.in</code>, <code>2.in</code> and <code>3.in</code> are relevant for this task. The other input files (<code>challenge1.in</code> and <code>challenge2.in</code>) are relevant for the challenge task.</p>",
    "sourceNotes": "",
    "hasOfficialDiagram": true
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
    "example": {
      "input": "5 个槽，key 1 已在槽 1，插入 key 6",
      "output": "若槽 2 为空，把 key 6 放到槽 2"
    },
    "statement": "<p>The stub code for <code>HashTableInsert</code> already takes care of resizing the table if necessary. Your task is to finish the implementation, using the linear probing strategy described in the Background section (and in the lectures) to handle hash collisions:</p>\n\n<pre>void HashTableInsert(HashTable table, int key, int value);\n</pre>\n\n\n<p>If the key already exists in the hash table, this function should overwrite the existing value.</p>\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with make and running the <code>runHashTable</code> program. Note that the hash table uses the simple hash function h(k) = k\\ \\%\\ N where N is the number of slots.</p>",
    "sourceNotes": "",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "槽 1 和槽 2 分别有同样哈希到 1 的 key 1、6，删除 key 1",
      "output": "key 6 仍能查到"
    },
    "statement": "<p>When deleting a key from a hash table using linear probing, we can&#x27;t simply make the corresponding slot empty and be done, as this would prematurely end probe paths and hence break our search and insertion algorithms. One way of doing deletion properly is the <i>backshift method</i>: find the slot holding the to-be-deleted key and mark it as empty, then delete and reinsert the items in all subsequent slots up to the next empty slot.</p>\n\n<p>Your task is to implement <code>HashTableDelete</code>, using the backshift deletion method described above (and in the lectures):</p>\n\n<pre>void HashTableDelete(HashTable table, int key);\n</pre>\n\n\n<p>If the key doesn&#x27;t exist in the hash table, nothing should happen.</p>\n\n<p>Once you think you&#x27;ve got the function working, test it by recompiling with make and running the <code>runHashTable</code> program. Note that the hash table uses the simple hash function h(k) = k\\ \\%\\ N where N is the number of slots.</p>",
    "sourceNotes": "",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "integers = [1, 6, 2, 5, 3]，n = 6",
      "output": "4"
    },
    "statement": "<p>Given an array that contains all of the integers from 1 to n with <i>exactly one of them missing</i>, we want to find the missing integer. For example, given the list <code>[1, 6, 2, 5, 3]</code>, the missing integer is 4.</p>\n\n<p>There is a simple but slow O(n^2) algorithm (loop through the array and search for each integer, and return the first one which isn&#x27;t there) to solve this problem. Your task is to implement the following function in <code>missing.c</code>, using the <code>HashTable</code> ADT to solve it more efficiently:</p>\n\n<pre>int findMissingInteger(int *integers, int n);\n</pre>\n\n\n<p>You should assume that the array is always well-formed, i.e., it satisfies the property described above (and hence the problem will always have a unique answer).</p>",
    "sourceNotes": "<h5>Testing</h5>\n\n<p><code>missing.c</code> contains a main function which allows you to test your <code>findMissingInteger</code> function. It accepts a space-separated list of integers as command-line arguments, which will be converted into an array that gets passed to your function. Here are some examples of its usage, and some expected outputs:</p>\n\n<pre>\n<kbd>make</kbd>\n...\n<kbd>./missing 1 6 2 5 3</kbd>\nThe missing integer is 4\n<kbd>./missing 1 2 3 5 6</kbd>\nThe missing integer is 4\n</pre>\n\n\n\t<b>Note:</b> Your solution must use the <code>HashTable</code> ADT to solve the problem. Solutions that do not use the <code>HashTable</code> ADT will not receive any marks.",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "ballots = [1, 2, 1, 1, 4, 4]",
      "output": "1"
    },
    "statement": "<p>A vote has been held. Each running candidate was assigned a number, and voters were instructed to write the number of the candidate they wished to vote for on their ballot. The election is first-past-the-post, so the candidate with the most votes wins. For example, if the ballots were <code>[1, 2, 1, 1, 4, 4]</code>, then the winner is candidate #1. If the ballots were <code>[1, 2, 2, 1, 4]</code> though, then we have a two-way tie with no clear winner. Since first-past-the-post doesn&#x27;t specify how to handle ties, we will just declare situations like this a tie for now and resort to some other way of finding the winner later.</p>\n\n<p>Your task is to implement the following function in <code>winner.c</code>, using the <code>HashTable</code> ADT to try and find the winner given all of the ballots:</p>\n\n<pre>int findWinner(int *ballots, int numBallots);\n</pre>\n\n\n<p>If there is a tie, the function should return <code>NO_WINNER</code> (which is defined for you in <code>winner.c</code>).</p>",
    "sourceNotes": "<h5>Testing</h5>\n\n<p><code>winner.c</code> contains a <code>main</code> function which allows you to test your <code>findWinner</code> function. It accepts a space-separated list of integers as command-line arguments, which will be converted into an array that gets passed to your function. Here are some examples of its usage, and some expected outputs:</p>\n\n<pre>\n<kbd>make</kbd>\n...\n<kbd>./winner 1 2 1 1 4 4</kbd>\nThe winner is candidate #1\n<kbd>./winner 1 2 2 1 4</kbd>\nTie!\n</pre>\n\n\n\t<b>Note:</b> Your solution must use the <code>HashTable</code> ADT to solve the problem. Solutions that do not use the <code>HashTable</code> ADT will not receive any marks.",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "s1 = \"adt\"，s2 = \"dcc\"",
      "output": "false，因为 d 和 t 都要映射成 c"
    },
    "statement": "<p>Two strings <code>s1</code> and <code>s2</code> similar if there exists a one-to-one mapping from each distinct character in <code>s1</code> to each distinct character in <code>s2</code> that transforms <code>s1</code> into <code>s2</code>. For example:</p>\n\n<ul>\n\t<li>The strings <code>s1 = &quot;adt&quot;</code> and <code>s2 = &quot;bst&quot;</code> are similar, because the mapping <code>&#x27;a&#x27; -&gt; &#x27;b&#x27;</code>, <code>&#x27;d&#x27; -&gt; &#x27;s&#x27;</code> and <code>&#x27;t&#x27; -&gt; &#x27;t&#x27;</code> transforms <code>s1</code> into <code>s2</code>.</li>\n\t<li>The strings <code>s1 = &quot;adt&quot;</code> and <code>s2 = &quot;dcc&quot;</code> are not similar, because the mapping that is required to transform <code>s1</code> into <code>s2</code> is <code>&#x27;a&#x27; -&gt; &#x27;d&#x27;</code>, <code>&#x27;d&#x27; -&gt; &#x27;c&#x27;</code> and <code>&#x27;t&#x27; -&gt; &#x27;c&#x27;</code>, but this mapping is not one-to-one.</li>\n\t<li>The strings <code>s1 = &quot;ab&quot;</code> and <code>s2 = &quot;ac&quot;</code> are similar, because the mapping <code>&#x27;a&#x27; -&gt; &#x27;a&#x27;</code>, <code>&#x27;b&#x27; -&gt; &#x27;c&#x27;</code> transforms <code>s1</code> into <code>s2</code>.</li>\n\t<li>The strings <code>s1 = &quot;aa&quot;</code> and <code>s2 = &quot;bc&quot;</code> are not similar, because to transform <code>s1</code> into <code>s2</code> we would need to map <code>&#x27;a&#x27;</code> to two different characters, but such a mapping would not be one-to-one.</li>\n\t<li>The strings <code>s1 = &quot;abc&quot;</code> and <code>s2 = &quot;abcd&quot;</code> are not similar, because there is no mapping that would transform <code>s1</code> into <code>s2</code>.</li>\n</ul>\n\n<p>Your task is to implement the following function in <code>similar.c</code>, using the <code>HashTable</code> ADT to write an algorithm that determines if two strings are similar:</p>\n\n<pre>bool areSimilarStrings(char *s1, char *s2);\n</pre>",
    "sourceNotes": "<h5>Testing</h5>\n\n<p><code>similar.c</code> contains a main function which allows you to test your <code>areSimilarStrings</code> function. It accepts two strings as command-line arguments which will be passed to your function. Here are some examples of its usage, and some expected outputs:</p>\n\n<pre>\n<kbd>make</kbd>\n...\n<kbd>./similar adt bst</kbd>\nThe strings are similar\n<kbd>./similar adt dcc</kbd>\nThe strings are not similar\n<kbd>./similar aa bc</kbd>\nThe strings are not similar\n</pre>\n\n\n\t<b>Note:</b> Your solution must use the <code>HashTable</code> ADT to solve the problem. Solutions that do not use the <code>HashTable</code> ADT will not receive any marks.",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "0—1、0—2，src = 0",
      "output": "2"
    },
    "statement": "<p>Your task is to write a function, <code>furthestReachable</code>, that returns the furthest vertex that is reachable from a given source vertex. If there are multiple furthest vertices, return the one with the largest vertex number. If the source vertex is not connected to any other vertices, return the source vertex.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>The graph contains at least one vertex.</li>\n\t<li>The graph uses the adjacency matrix representation, and the graph struct is defined in <code>Graph.h</code> (and is therefore accessible from <code>furthestReachable.c</code>).</li>\n\t<li>Vertices are numbered from 0 to n - 1, where n is the number of vertices.</li>\n\t<li>The source vertex is between 0 and n - 1 (inclusive), where n is the number of vertices.</li>\n\t<li>The given graph should not be modified.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testFurthestReachable</kbd>\nEnter number of vertices: <kbd>14</kbd>\nEnter number of edges: <kbd>12</kbd>\nEnter 12 edges in the form `v w` (no quotes):\n<kbd>0 3</kbd>\n<kbd>0 8</kbd>\n<kbd>0 10</kbd>\n<kbd>1 5</kbd>\n<kbd>1 9</kbd>\n<kbd>2 10</kbd>\n<kbd>3 8</kbd>\n<kbd>3 12</kbd>\n<kbd>4 6</kbd>\n<kbd>4 7</kbd>\n<kbd>4 11</kbd>\n<kbd>7 13</kbd>\nNumber of vertices: 14\nNumber of edges: 12\nEdges:\n 0: 3 8 10\n 1: 5 9\n 2: 10\n 3: 0 8 12\n 4: 6 7 11\n 5: 1\n 6: 4\n 7: 4 13\n 8: 0 3\n 9: 1\n10: 0 2\n11: 4\n12: 3\n13: 7\n\nEnter the source vertex: <kbd>10</kbd>\nFurthest vertex reachable from vertex 10: 12\nEnter the source vertex: <kbd>12</kbd>\nFurthest vertex reachable from vertex 12: 2\nEnter the source vertex: <kbd>5</kbd>\nFurthest vertex reachable from vertex 5: 9\nEnter the source vertex: <kbd>6</kbd>\nFurthest vertex reachable from vertex 6: 13\nEnter the source vertex:  \n</pre>\n\n<pre>\n<kbd>./testFurthestReachable</kbd>\nEnter number of vertices: <kbd>12</kbd>\nEnter number of edges: <kbd>7</kbd>\nEnter 7 edges in the form `v w` (no quotes):\n<kbd>0 1</kbd>\n<kbd>2 3</kbd>\n<kbd>3 4</kbd>\n<kbd>5 10</kbd>\n<kbd>5 9</kbd>\n<kbd>9 11</kbd>\n<kbd>10 11</kbd>\nNumber of vertices: 12\nNumber of edges: 7\nEdges:\n 0: 1\n 1: 0\n 2: 3\n 3: 2 4\n 4: 3\n 5: 9 10\n 6:\n 7:\n 8:\n 9: 5 11\n10: 5 11\n11: 9 10\n\nEnter the source vertex: <kbd>0</kbd>\nFurthest vertex reachable from vertex 0: 1\nEnter the source vertex: <kbd>3</kbd>\nFurthest vertex reachable from vertex 3: 4\nEnter the source vertex: <kbd>5</kbd>\nFurthest vertex reachable from vertex 5: 11\nEnter the source vertex: <kbd>6</kbd>\nFurthest vertex reachable from vertex 6: 6\nEnter the source vertex: \n</pre>\n\n<h4>Hints</h4>\n\n<p>Only look at these hints if you are stuck. Note that hints like this will <b>not</b> be supplied in the exam.</p>\n\n\n\t\n\t\t\n\t\t\t\n\t\t\t\t\n\t\t\t\t\tHint 1\n\t\t\t\t\n\t\t\t\n\t\t\n\n\t\t\n\t\t\t\n\t\t\t\tOne way to start would be to find the distances of each vertex from the starting vertex.",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/graphs/furthestReachable/downloads/furthestReachable.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>furthestReachable.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>Graph.c</b></td>\n\t\t<td>Contains code for creating and printing a Graph</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Graph.h</b></td>\n\t\t<td>Contains the definition of the Graph data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Queue.c</b></td>\n\t\t<td>Contains the implementation of a Queue ADT</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Queue.h</b></td>\n\t\t<td>Contains the interface of a Queue ADT</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testFurthestReachable.c</b></td>\n\t\t<td>Contains the main function, which reads in a graph from standard input, calls <code>furthestReachable</code> and prints out the result</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>furthestReachable.c</b></td>\n\t\t<td>Contains <code>furthestReachable</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                     # compiles the program\n<kbd>./testFurthestReachable</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testFurthestReachable &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testFurthestReachable &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                           # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "0—1、1—2、2—0",
      "output": "true"
    },
    "statement": "<p>Your task is to write a function, <code>hasCycle</code>, that determines whether or not the given graph contains a cycle. It should return true if the graph contains a cycle, and false otherwise.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>The graph contains at least one vertex.</li>\n\t<li>The graph uses the adjacency matrix representation, and the graph struct is defined in <code>Graph.h</code> (and is therefore accessible from <code>hasCycle.c</code>).</li>\n\t<li>Vertices are numbered from 0 to n - 1, where n is the number of vertices.</li>\n\t<li>The given graph should not be modified.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testHasCycle</kbd>\nEnter number of vertices: <kbd>8</kbd>\nEnter number of edges: <kbd>7</kbd>\nEnter 7 edges in the form `v w` (no quotes):\n<kbd>0 1</kbd>\n<kbd>0 2</kbd>\n<kbd>0 3</kbd>\n<kbd>1 6</kbd>\n<kbd>2 5</kbd>\n<kbd>3 4</kbd>\n<kbd>3 7</kbd>\nNumber of vertices: 8\nNumber of edges: 7\nEdges:\n 0: 1 2 3\n 1: 0 6\n 2: 0 5\n 3: 0 4 7\n 4: 3\n 5: 2\n 6: 1\n 7: 3\n\nhasCycle returned: FALSE\n</pre>\n\n<pre>\n<kbd>./testHasCycle</kbd>\nEnter number of vertices: <kbd>9</kbd>\nEnter number of edges: <kbd>9</kbd>\nEnter 9 edges in the form `v w` (no quotes):\n<kbd>0 1</kbd>\n<kbd>0 5</kbd>\n<kbd>1 3</kbd>\n<kbd>1 6</kbd>\n<kbd>2 8</kbd>\n<kbd>3 4</kbd>\n<kbd>3 4</kbd>\n<kbd>6 7</kbd>\n<kbd>6 8</kbd>\nNumber of vertices: 9\nNumber of edges: 9\nEdges:\n 0: 1 5\n 1: 0 3 6\n 2: 8\n 3: 1 4\n 4: 3\n 5: 0 8\n 6: 1 7 8\n 7: 6\n 8: 2 5 6\n\nhasCycle returned: TRUE\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/graphs/hasCycle/downloads/hasCycle.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>hasCycle.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>Graph.c</b></td>\n\t\t<td>Contains code for creating and printing a Graph</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Graph.h</b></td>\n\t\t<td>Contains the definition of the Graph data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Stack.c</b></td>\n\t\t<td>Contains the implementation of a Stack ADT</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Stack.h</b></td>\n\t\t<td>Contains the interface of a Stack ADT</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testHasCycle.c</b></td>\n\t\t<td>Contains the main function, which reads in a graph from standard input, calls <code>hasCycle</code> and prints out the result</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>hasCycle.c</b></td>\n\t\t<td>Contains <code>hasCycle</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                            # compiles the program\n<kbd>./testHasCycle</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testHasCycle &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testHasCycle &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                  # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "0—1—2，3 孤立，src = 0",
      "output": "3"
    },
    "statement": "<p>Your task is to write a function, <code>numReachable</code>, that returns the number of vertices that are reachable from a source vertex in the given graph, including the source vertex itself.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>The graph contains at least one vertex.</li>\n\t<li>The graph uses the adjacency matrix representation, and the graph struct is defined in <code>Graph.h</code> (and is therefore accessible from <code>numReachable.c</code>).</li>\n\t<li>Vertices are numbered from 0 to n - 1, where n is the number of vertices.</li>\n\t<li>The source vertex is between 0 and n - 1 (inclusive), where n is the number of vertices.</li>\n\t<li>The given graph should not be modified.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testNumReachable</kbd>\nEnter number of vertices: <kbd>12</kbd>\nEnter number of edges: <kbd>11</kbd>\nEnter 11 edges in the form `v w` (no quotes):\n<kbd>0 8</kbd>\n<kbd>0 3</kbd>\n<kbd>3 8</kbd>\n<kbd>0 10</kbd>\n<kbd>10 2</kbd>\n<kbd>1 9</kbd>\n<kbd>1 5</kbd>\n<kbd>5 9</kbd>\n<kbd>4 6</kbd>\n<kbd>4 7</kbd>\n<kbd>4 11</kbd>\nNumber of vertices: 12\nNumber of edges: 11\nEdges:\n 0: 3 8 10\n 1: 5 9\n 2: 10\n 3: 0 8\n 4: 6 7 11\n 5: 1 9\n 6: 4\n 7: 4\n 8: 0 3\n 9: 1 5\n10: 0 2\n11: 4\n\nEnter the source vertex: <kbd>2</kbd>\nNumber of vertices reachable from vertex 2: 5\nEnter the source vertex: <kbd>1</kbd>\nNumber of vertices reachable from vertex 1: 3\nEnter the source vertex: <kbd>4</kbd>\nNumber of vertices reachable from vertex 4: 4\nEnter the source vertex: \n</pre>\n\n<pre>\n<kbd>./testNumReachable</kbd>\nEnter number of vertices: <kbd>12</kbd>\nEnter number of edges: <kbd>7</kbd>\nEnter 7 edges in the form `v w` (no quotes):\n<kbd>0 1</kbd>\n<kbd>2 3</kbd>\n<kbd>3 4</kbd>\n<kbd>5 9</kbd>\n<kbd>5 10</kbd>\n<kbd>9 11</kbd>\n<kbd>10 11</kbd>\nNumber of vertices: 12\nNumber of edges: 7\nEdges:\n 0: 1\n 1: 0\n 2: 3\n 3: 2 4\n 4: 3\n 5: 9 10\n 6:\n 7:\n 8:\n 9: 5 11\n10: 5 11\n11: 9 10\n\nEnter the source vertex: <kbd>1</kbd>\nNumber of vertices reachable from vertex 1: 2\nEnter the source vertex: <kbd>3</kbd>\nNumber of vertices reachable from vertex 3: 3\nEnter the source vertex: <kbd>6</kbd>\nNumber of vertices reachable from vertex 6: 1\nEnter the source vertex: <kbd>9</kbd>\nNumber of vertices reachable from vertex 9: 4\nEnter the source vertex: \n</pre>\n\n<pre>\n<kbd>./testNumReachable</kbd>\nEnter number of vertices: <kbd>11</kbd>\nEnter number of edges: <kbd>12</kbd>\nEnter 12 edges in the form `v w` (no quotes):\n<kbd>0 5</kbd>\n<kbd>1 2</kbd>\n<kbd>1 3</kbd>\n<kbd>1 4</kbd>\n<kbd>2 3</kbd>\n<kbd>2 4</kbd>\n<kbd>3 4</kbd>\n<kbd>5 6</kbd>\n<kbd>6 7</kbd>\n<kbd>7 8</kbd>\n<kbd>8 9</kbd>\n<kbd>9 10</kbd>\nNumber of vertices: 11\nNumber of edges: 12\nEdges:\n 0: 5\n 1: 2 3 4\n 2: 1 3 4\n 3: 1 2 4\n 4: 1 2 3\n 5: 0 6\n 6: 5 7\n 7: 6 8\n 8: 7 9\n 9: 8 10\n10: 9\n\nEnter the source vertex: <kbd>3</kbd>\nNumber of vertices reachable from vertex 3: 4\nEnter the source vertex: <kbd>9</kbd>\nNumber of vertices reachable from vertex 9: 7\nEnter the source vertex: \n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/graphs/numReachable/downloads/numReachable.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>numReachable.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>Graph.c</b></td>\n\t\t<td>Contains code for creating and printing a Graph</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Graph.h</b></td>\n\t\t<td>Contains the definition of the Graph data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testNumReachable.c</b></td>\n\t\t<td>Contains the main function, which reads in a graph from standard input, calls <code>numReachable</code> and prints out the result</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>numReachable.c</b></td>\n\t\t<td>Contains <code>numReachable</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                # compiles the program\n<kbd>./testNumReachable</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testNumReachable &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testNumReachable &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                      # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "0—1—2，src = 0，dist = 1",
      "output": "2（顶点 0 和 1）"
    },
    "statement": "<p>Your task is to write a function, <code>numWithin</code>, that determines the number of vertices that are within a given distance of the given source vertex.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>The graph contains at least one vertex.</li>\n\t<li>The graph uses the adjacency matrix representation, and the graph struct is defined in <code>Graph.h</code> (and is therefore accessible from <code>numWithin.c</code>).</li>\n\t<li>Vertices are numbered from 0 to n - 1, where n is the number of vertices.</li>\n\t<li>The source vertex is between 0 and n - 1 (inclusive), where n is the number of vertices.</li>\n\t<li>The given graph should not be modified.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testNumWithin</kbd>\nEnter number of vertices: <kbd>11</kbd>\nEnter number of edges: <kbd>10</kbd>\nEnter 10 edges in the form `v w` (no quotes):\n<kbd>0 1</kbd>\n<kbd>1 2</kbd>\n<kbd>2 3</kbd>\n<kbd>3 4</kbd>\n<kbd>0 5</kbd>\n<kbd>5 6</kbd>\n<kbd>6 7</kbd>\n<kbd>0 8</kbd>\n<kbd>8 9</kbd>\n<kbd>0 10</kbd>\nNumber of vertices: 11\nNumber of edges: 10\nEdges:\n 0: 1 5 8 10\n 1: 0 2\n 2: 1 3\n 3: 2 4\n 4: 3\n 5: 0 6\n 6: 5 7\n 7: 6\n 8: 0 9\n 9: 8\n10: 0\n\nEnter the source vertex and maximum distance: <kbd>0 5</kbd>\nnumWithin(g, 0, 5) = 11\nEnter the source vertex and maximum distance: <kbd>0 4</kbd>\nnumWithin(g, 0, 4) = 11\nEnter the source vertex and maximum distance: <kbd>0 3</kbd>\nnumWithin(g, 0, 3) = 10\nEnter the source vertex and maximum distance: <kbd>0 2</kbd>\nnumWithin(g, 0, 2) = 8\nEnter the source vertex and maximum distance: <kbd>0 1</kbd>\nnumWithin(g, 0, 1) = 5\nEnter the source vertex and maximum distance: <kbd>0 0</kbd>\nnumWithin(g, 0, 0) = 1\nEnter the source vertex and maximum distance: \n</pre>\n\n<pre>\n<kbd>./testNumWithin</kbd>\nEnter number of vertices: <kbd>11</kbd>\nEnter number of edges: <kbd>12</kbd>\nEnter 12 edges in the form `v w` (no quotes):\n<kbd>0 1</kbd>\n<kbd>0 2</kbd>\n<kbd>0 6</kbd>\n<kbd>0 7</kbd>\n<kbd>1 2</kbd>\n<kbd>2 3</kbd>\n<kbd>2 5</kbd>\n<kbd>3 4</kbd>\n<kbd>6 7</kbd>\n<kbd>7 8</kbd>\n<kbd>7 10</kbd>\n<kbd>8 9</kbd>\nNumber of vertices: 11\nNumber of edges: 12\nEdges:\n 0: 1 2 6 7\n 1: 0 2\n 2: 0 1 3 5\n 3: 2 4\n 4: 3\n 5: 2\n 6: 0 7\n 7: 0 6 8 10\n 8: 7 9\n 9: 8\n10: 7\n\nEnter the source vertex and maximum distance: <kbd>1 1</kbd>\nnumWithin(g, 1, 1) = 3\nEnter the source vertex and maximum distance: <kbd>1 2</kbd>\nnumWithin(g, 1, 2) = 7\nEnter the source vertex and maximum distance: <kbd>1 3</kbd>\nnumWithin(g, 1, 3) = 10\nEnter the source vertex and maximum distance: <kbd>1 4</kbd>\nnumWithin(g, 1, 4) = 11\nEnter the source vertex and maximum distance: <kbd>4 1</kbd>\nnumWithin(g, 4, 1) = 2\nEnter the source vertex and maximum distance: <kbd>4 4</kbd>\nnumWithin(g, 4, 4) = 8\nEnter the source vertex and maximum distance: \n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/graphs/numWithin/downloads/numWithin.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>numWithin.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>Graph.c</b></td>\n\t\t<td>Contains code for creating and printing a Graph</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Graph.h</b></td>\n\t\t<td>Contains the definition of the Graph data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Queue.c</b></td>\n\t\t<td>Contains the implementation of a Queue ADT</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Queue.h</b></td>\n\t\t<td>Contains the interface of a Queue ADT</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testNumWithin.c</b></td>\n\t\t<td>Contains the main function, which reads in a graph from standard input, calls <code>numWithin</code> and prints out the result</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>numWithin.c</b></td>\n\t\t<td>Contains <code>numWithin</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                             # compiles the program\n<kbd>./testNumWithin</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testNumWithin &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testNumWithin &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                   # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "0—1—2，src = 0，dest = 2",
      "output": "2"
    },
    "statement": "<p>Your task is to write a function, <code>shortestDistance</code>, that returns the number of edges on the shortest path between two vertices in the given graph. If there is no path between the two vertices, return -1.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>The graph contains at least one vertex.</li>\n\t<li>The graph uses the adjacency matrix representation, and the graph struct is defined in <code>Graph.h</code> (and is therefore accessible from <code>shortestDistance.c</code>).</li>\n\t<li>Vertices are numbered from 0 to n - 1, where n is the number of vertices.</li>\n\t<li>The source and destination vertices are between 0 and n - 1 (inclusive), where n is the number of vertices.</li>\n\t<li>The given graph should not be modified.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testShortestDistance</kbd>\nEnter number of vertices: <kbd>6</kbd>\nEnter number of edges: <kbd>5</kbd>\nEnter 5 edges in the form `v w` (no quotes):\n<kbd>0 1</kbd>\n<kbd>1 2</kbd>\n<kbd>2 3</kbd>\n<kbd>3 4</kbd>\n<kbd>4 5</kbd>\nNumber of vertices: 6\nNumber of edges: 5\nEdges:\n 0: 1\n 1: 0 2\n 2: 1 3\n 3: 2 4\n 4: 3 5\n 5: 4\n\nEnter two vertices: <kbd>0 0</kbd>\nThe shortest distance between vertices 0 and 0 is: 0\nEnter two vertices: <kbd>0 3</kbd>\nThe shortest distance between vertices 0 and 3 is: 3\nEnter two vertices: <kbd>4 0</kbd>\nThe shortest distance between vertices 4 and 0 is: 4\nEnter two vertices: <kbd>1 5</kbd>\nThe shortest distance between vertices 1 and 5 is: 4\nEnter two vertices: \n</pre>\n\n<pre>\n<kbd>./testShortestDistance</kbd>\nEnter number of vertices: <kbd>10</kbd>\nEnter number of edges: <kbd>10</kbd>\nEnter 10 edges in the form `v w` (no quotes):\n<kbd>0 1</kbd>\n<kbd>0 2</kbd>\n<kbd>1 3</kbd>\n<kbd>1 6</kbd>\n<kbd>2 9</kbd>\n<kbd>3 4</kbd>\n<kbd>3 5</kbd>\n<kbd>5 7</kbd>\n<kbd>5 9</kbd>\n<kbd>7 8</kbd>\nNumber of vertices: 10\nNumber of edges: 10\nEdges:\n 0: 1 2\n 1: 0 3 6\n 2: 0 9\n 3: 1 4 5\n 4: 3\n 5: 3 7 9\n 6: 1\n 7: 5 8\n 8: 7\n 9: 2 5\n\nEnter two vertices: <kbd>0 7</kbd>\nThe shortest distance between vertices 0 and 7 is: 4\nEnter two vertices: <kbd>8 2</kbd>\nThe shortest distance between vertices 8 and 2 is: 4\nEnter two vertices: <kbd>5 6</kbd>\nThe shortest distance between vertices 5 and 6 is: 3\nEnter two vertices: \n</pre>\n\n<pre>\n<kbd>./testShortestDistance</kbd>\nEnter number of vertices: <kbd>10</kbd>\nEnter number of edges: <kbd>9</kbd>\nEnter 9 edges in the form `v w` (no quotes):\n<kbd>0 1</kbd>\n<kbd>1 2</kbd>\n<kbd>1 3</kbd>\n<kbd>2 4</kbd>\n<kbd>2 5</kbd>\n<kbd>3 5</kbd>\n<kbd>3 6</kbd>\n<kbd>7 8</kbd>\n<kbd>8 9</kbd>\nNumber of vertices: 10\nNumber of edges: 9\nEdges:\n 0: 1\n 1: 0 2 3\n 2: 1 4 5\n 3: 1 5 6\n 4: 2\n 5: 2 3\n 6: 3\n 7: 8\n 8: 7 9\n 9: 8\n\nEnter two vertices: <kbd>6 4</kbd>\nThe shortest distance between vertices 6 and 4 is: 4\nEnter two vertices: <kbd>0 5</kbd>\nThe shortest distance between vertices 0 and 5 is: 3\nEnter two vertices: <kbd>0 8</kbd>\nThere is no path between vertices 0 and 8\nEnter two vertices: \n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/graphs/shortestDistance/downloads/shortestDistance.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>shortestDistance.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>Graph.c</b></td>\n\t\t<td>Contains code for creating and printing a Graph</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Graph.h</b></td>\n\t\t<td>Contains the definition of the Graph data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Queue.c</b></td>\n\t\t<td>Contains the implementation of a Queue ADT</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Queue.h</b></td>\n\t\t<td>Contains the interface of a Queue ADT</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testShortestDistance.c</b></td>\n\t\t<td>Contains the main function, which reads in a graph from standard input, calls <code>shortestDistance</code> and prints out the result</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>shortestDistance.c</b></td>\n\t\t<td>Contains <code>shortestDistance</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                    # compiles the program\n<kbd>./testShortestDistance</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testShortestDistance &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testShortestDistance &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                          # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "[3, 1, 3, 2, 1]",
      "output": "[3, 1, 2]"
    },
    "statement": "<p>Your task is to write a function, <code>listDeleteDuplicates</code>, that deletes all duplicate values from a given list. For each value that occurs more than once in the list, every instance of the value <b>except the first</b> should be deleted.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>You must not use arrays.</li>\n\t<li>You must not use any variant of <code>malloc</code>, either directly or indirectly.</li>\n\t<li>You must not change the values in any nodes.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testListDeleteDuplicates</kbd>\nEnter list: <kbd>1 2 3 4 5 6 1</kbd>\n\nOriginal list: [1] -&gt; [2] -&gt; [3] -&gt; [4] -&gt; [5] -&gt; [6] -&gt; [1] -&gt; X\nAfter deleting duplicates: [1] -&gt; [2] -&gt; [3] -&gt; [4] -&gt; [5] -&gt; [6] -&gt; X\n</pre>\n<pre>\n<kbd>./testListDeleteDuplicates</kbd>\nEnter list: <kbd>1 2 2 3 3 3 4 4 4 4</kbd>\n\nOriginal list: [1] -&gt; [2] -&gt; [2] -&gt; [3] -&gt; [3] -&gt; [3] -&gt; [4] -&gt; [4] -&gt; [4] -&gt; [4] -&gt; X\nAfter deleting duplicates: [1] -&gt; [2] -&gt; [3] -&gt; [4] -&gt; X\n</pre>\n<pre>\n<kbd>./testListDeleteDuplicates</kbd>\nEnter list: <kbd>1 2 3 4 5 5 4 3 2 1</kbd>\n\nOriginal list: [1] -&gt; [2] -&gt; [3] -&gt; [4] -&gt; [5] -&gt; [5] -&gt; [4] -&gt; [3] -&gt; [2] -&gt; [1] -&gt; X\nAfter deleting duplicates: [1] -&gt; [2] -&gt; [3] -&gt; [4] -&gt; [5] -&gt; X\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/lists/listDeleteDuplicates/downloads/listDeleteDuplicates.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>listDeleteDuplicates.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>list.c</b></td>\n\t\t<td>Contains the implementation of basic list functions</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>list.h</b></td>\n\t\t<td>Contains the definition of the list data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testListDeleteDuplicates.c</b></td>\n\t\t<td>Contains the main function, which reads in a list from standard input, calls <code>listDeleteDuplicates</code>, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>listDeleteDuplicates.c</b></td>\n\t\t<td>Contains <code>listDeleteDuplicates</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                        # compiles the program\n<kbd>./testListDeleteDuplicates</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testListDeleteDuplicates &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testListDeleteDuplicates &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                              # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "[2, 9, 1, 9]",
      "output": "[2, 1, 9]"
    },
    "statement": "<p>Your task is to write a function, <code>listDeleteLargest</code>, that deletes the largest value from a given list. If the largest value occurs multiple times in the list, delete only the first instance. If the given list is empty, the function should do nothing.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>You must not use arrays.</li>\n\t<li>You must not use any variant of <code>malloc</code>, either directly or indirectly.</li>\n\t<li>You must not change the values in any nodes.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testListDeleteLargest</kbd>\nEnter list: <kbd>2 8 4 9 5</kbd>\n\nOriginal list: [2] -&gt; [8] -&gt; [4] -&gt; [9] -&gt; [5] -&gt; X\nAfter deleting largest: [2] -&gt; [8] -&gt; [4] -&gt; [5] -&gt; X\n</pre>\n<pre>\n<kbd>./testListDeleteLargest</kbd>\nEnter list: <kbd>1 7 2 7 3</kbd>\n\nOriginal list: [1] -&gt; [7] -&gt; [2] -&gt; [7] -&gt; [3] -&gt; X\nAfter deleting largest: [1] -&gt; [2] -&gt; [7] -&gt; [3] -&gt; X\n</pre>\n<pre>\n<kbd>./testListDeleteLargest</kbd>\nEnter list: <kbd>1</kbd>\n\nOriginal list: [1] -&gt; X\nAfter deleting largest: X\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/lists/listDeleteLargest/downloads/listDeleteLargest.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>listDeleteLargest.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>list.c</b></td>\n\t\t<td>Contains the implementation of basic list functions</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>list.h</b></td>\n\t\t<td>Contains the definition of the list data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testListDeleteLargest.c</b></td>\n\t\t<td>Contains the main function, which reads in a list from standard input, calls <code>listDeleteLargest</code>, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>listDeleteLargest.c</b></td>\n\t\t<td>Contains <code>listDeleteLargest</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                     # compiles the program\n<kbd>./testListDeleteLargest</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testListDeleteLargest &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testListDeleteLargest &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                           # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "[2, 5, 8]，value = 6，n = 2",
      "output": "[2, 5, 6, 8]"
    },
    "statement": "<p>Your task is to write a function, <code>listInsertNth</code>, that takes three arguments: a linked list, a value and a position <code>n</code>, and inserts the value before position <code>n</code> of the list. Positions are counted in the same manner as the indexes of an array, so the first element in the list is regarded as being at position 0, the second element is regarded as being at position 1, and so on. If there are fewer than <code>n</code> elements in the list, the value should be appended to the end of the list.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li><code>n</code> is non-negative.</li>\n\t<li>You must not use arrays.</li>\n\t<li>You must not change the values in any existing nodes.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testListInsertNth</kbd>\nEnter list: <kbd>16 7 8</kbd>\nEnter value to insert: <kbd>12</kbd>\nEnter position to insert at: <kbd>0</kbd>\nOriginal list: [16] -&gt; [7] -&gt; [8] -&gt; X\nList after inserting 12 at position 0: [12] -&gt; [16] -&gt; [7] -&gt; [8] -&gt; X\n</pre>\n<pre>\n<kbd>./testListInsertNth</kbd>\nEnter list: <kbd>16 7 8</kbd>\nEnter value to insert: <kbd>12</kbd>\nEnter position to insert at: <kbd>1</kbd>\nOriginal list: [16] -&gt; [7] -&gt; [8] -&gt; X\nList after inserting 12 at position 1: [16] -&gt; [12] -&gt; [7] -&gt; [8] -&gt; X\n</pre>\n<pre>\n<kbd>./testListInsertNth</kbd>\nEnter list: <kbd>16 7 8</kbd>\nEnter value to insert: <kbd>12</kbd>\nEnter position to insert at: <kbd>2</kbd>\nOriginal list: [16] -&gt; [7] -&gt; [8] -&gt; X\nList after inserting 12 at position 2: [16] -&gt; [7] -&gt; [12] -&gt; [8] -&gt; X\n</pre>\n<pre>\n<kbd>./testListInsertNth</kbd>\nEnter list: <kbd>16 7 8</kbd>\nEnter value to insert: <kbd>12</kbd>\nEnter position to insert at: <kbd>3</kbd>\nOriginal list: [16] -&gt; [7] -&gt; [8] -&gt; X\nList after inserting 12 at position 3: [16] -&gt; [7] -&gt; [8] -&gt; [12] -&gt; X\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/lists/listInsertNth/downloads/listInsertNth.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>listInsertNth.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>list.c</b></td>\n\t\t<td>Contains the implementation of basic list functions</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>list.h</b></td>\n\t\t<td>Contains the definition of the list data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testListInsertNth.c</b></td>\n\t\t<td>Contains the main function, which reads in a list, a value and a position from standard input, calls <code>listInsertNth</code>, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>listInsertNth.c</b></td>\n\t\t<td>Contains <code>listInsertNth</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                 # compiles the program\n<kbd>./testListInsertNth</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testListInsertNth &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testListInsertNth &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                       # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "[1, 2, 1, 2, 1]，k = 2",
      "output": "true"
    },
    "statement": "<p>Your task is to write a function, <code>listIsKPeriodic</code>, that takes two arguments: a linked list and a value <code>k</code>, and determines if the list is k-periodic. A list is k-periodic if it repeats itself every <code>k</code> values. If the list has <code>k</code> or fewer elements, then it is k-periodic by default.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li><code>k</code> is positive.</li>\n\t<li>You must not use arrays.</li>\n\t<li>You must not use any variant of <code>malloc</code>, either directly or indirectly.</li>\n\t<li>You must not modify the given list.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testListIsKPeriodic</kbd>\nEnter list: <kbd>2 2 2 2 2 2 2</kbd>\nEnter k: <kbd>1</kbd>\nList: [2] -&gt; [2] -&gt; [2] -&gt; [2] -&gt; [2] -&gt; [2] -&gt; [2] -&gt; X\nlistIsKPeriodic returned TRUE\n</pre>\n<pre>\n<kbd>./testListIsKPeriodic</kbd>\nEnter list: <kbd>2 2 2 2 2 2 3</kbd>\nEnter k: <kbd>1</kbd>\nList: [2] -&gt; [2] -&gt; [2] -&gt; [2] -&gt; [2] -&gt; [2] -&gt; [3] -&gt; X\nlistIsKPeriodic returned FALSE\n</pre>\n<pre>\n<kbd>./testListIsKPeriodic</kbd>\nEnter list: <kbd>2 3 4 2 3 4 2</kbd>\nEnter k: <kbd>2</kbd>\nList: [2] -&gt; [3] -&gt; [4] -&gt; [2] -&gt; [3] -&gt; [4] -&gt; [2] -&gt; X\nlistIsKPeriodic returned FALSE\n</pre>\n<pre>\n<kbd>./testListIsKPeriodic</kbd>\nEnter list: <kbd>2 3 4 2 3 4 2</kbd>\nEnter k: <kbd>3</kbd>\nList: [2] -&gt; [3] -&gt; [4] -&gt; [2] -&gt; [3] -&gt; [4] -&gt; [2] -&gt; X\nlistIsKPeriodic returned TRUE\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/lists/listIsKPeriodic/downloads/listIsKPeriodic.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>listIsKPeriodic.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>list.c</b></td>\n\t\t<td>Contains the implementation of basic list functions</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>list.h</b></td>\n\t\t<td>Contains the definition of the list data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testListIsKPeriodic.c</b></td>\n\t\t<td>Contains the main function, which reads in a list and a position from standard input, calls <code>listIsKPeriodic</code>, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>listIsKPeriodic.c</b></td>\n\t\t<td>Contains <code>listIsKPeriodic</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                   # compiles the program\n<kbd>./testListIsKPeriodic</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testListIsKPeriodic &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testListIsKPeriodic &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                         # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "[7, 7, 4, 1]",
      "output": "true"
    },
    "statement": "<p>Your task is to write a function, <code>listIsOrdered</code>, that determines whether a linked list is sorted in either ascending or descending order. It should return true if the list is sorted in ascending or descending order, and false otherwise. Your function should <b>not</b> modify the list. An empty list is considered to be sorted.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>You must not use arrays.</li>\n\t<li>You must not use any variant of <code>malloc</code>, either directly or indirectly.</li>\n\t<li>You must not modify the given list.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testListIsOrdered</kbd>\nEnter list: <kbd>2 4 5 5 8 9</kbd>\nlistIsOrdered returned TRUE\n</pre>\n<pre>\n<kbd>./testListIsOrdered</kbd>\nEnter list: <kbd>2 4 7 5 4</kbd>\nlistIsOrdered returned FALSE\n</pre>\n<pre>\n<kbd>./testListIsOrdered</kbd>\nEnter list: <kbd>9 8 7 2</kbd>\nlistIsOrdered returned TRUE\n</pre>\n<pre>\n<kbd>./testListIsOrdered</kbd>\nEnter list: \nlistIsOrdered returned TRUE\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/lists/listIsOrdered/downloads/listIsOrdered.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>listIsOrdered.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>list.c</b></td>\n\t\t<td>Contains the implementation of basic list functions</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>list.h</b></td>\n\t\t<td>Contains the definition of the list data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testListIsOrdered.c</b></td>\n\t\t<td>Contains the main function, which reads in a list from standard input, calls <code>listIsOrdered</code>, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>listIsOrdered.c</b></td>\n\t\t<td>Contains <code>listIsOrdered</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                 # compiles the program\n<kbd>./testListIsOrdered</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testListIsOrdered &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testListIsOrdered &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                       # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "[1, 2, 3, 2, 1]",
      "output": "true"
    },
    "statement": "<p>Your task is to write a function, <code>listIsPalindromic</code>, that determines whether the sequence of values in a given <b>doubly</b> linked list is palindromic. A sequence of values is palindromic if it reads the same backwards as forwards. For example, the sequence [1, 2, 3, 2, 1] is palindromic, whereas the sequence [1, 2, 3, 4] is not. The function should return true if the sequence of values in the linked list is palindromic, and false otherwise.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>You must not use arrays.</li>\n\t<li>You must not use any variant of <code>malloc</code>, either directly or indirectly.</li>\n\t<li>You must not modify the given list.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testListIsPalindromic</kbd>\nEnter list: <kbd>1 2 3 2 1</kbd>\nlistIsPalindromic returned TRUE\n</pre>\n<pre>\n<kbd>./testListIsPalindromic</kbd>\nEnter list: <kbd>1 2 3 4</kbd>\nlistIsPalindromic returned FALSE\n</pre>\n<pre>\n<kbd>./testListIsPalindromic</kbd>\nEnter list: <kbd>9 4 7 1 1 7 4 9</kbd>\nlistIsPalindromic returned TRUE\n</pre>\n<pre>\n<kbd>./testListIsPalindromic</kbd>\nEnter list: <kbd>1 8 2 7 7 2 9 1</kbd>\nlistIsPalindromic returned FALSE\n</pre>\n<pre>\n<kbd>./testListIsPalindromic</kbd>\nEnter list: \nlistIsPalindromic returned TRUE\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/lists/listIsPalindromic/downloads/listIsPalindromic.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>listIsPalindromic.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>list.c</b></td>\n\t\t<td>Contains the implementation of basic list functions</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>list.h</b></td>\n\t\t<td>Contains the definition of the list data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testListIsPalindromic.c</b></td>\n\t\t<td>Contains the main function, which reads in a list from standard input, calls <code>listIsPalindromic</code>, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>listIsPalindromic.c</b></td>\n\t\t<td>Contains <code>listIsPalindromic</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                     # compiles the program\n<kbd>./testListIsPalindromic</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testListIsPalindromic &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testListIsPalindromic &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                           # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>\n\n\n<b>Follow up:</b> How would you solve this problem if the list was only a singly linked list? Can you still do it in O(n) time?",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "[1, 4] 和 [2, 4, 5]",
      "output": "[1, 2, 4, 4, 5]"
    },
    "statement": "<p>Your task is to write a function, <code>listMergeOrdered</code>, that takes two ordered lists and merges their values into a <b>new</b> ordered list. For example, if the two lists are [1, 5, 7, 8] and [2, 3, 4, 6, 9], the function should return the list [1, 2, 3, 4, 5, 6, 7, 8, 9].</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>The given lists are sorted in ascending order.</li>\n\t<li>You must not use arrays.</li>\n\t<li>You must not modify the given lists.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testListMergeOrdered</kbd>\nEnter list 1: <kbd>1 5 7 8</kbd>\nEnter list 2: <kbd>2 3 4 6 9</kbd>\n\nList 1: [1] -&gt; [5] -&gt; [7] -&gt; [8] -&gt; X\nList 2: [2] -&gt; [3] -&gt; [4] -&gt; [6] -&gt; [9] -&gt; X\nMerged: [1] -&gt; [2] -&gt; [3] -&gt; [4] -&gt; [5] -&gt; [6] -&gt; [7] -&gt; [8] -&gt; [9] -&gt; X\n</pre>\n<pre>\n<kbd>./testListMergeOrdered</kbd>\nEnter list 1: <kbd>1 2 4 8 9</kbd>\nEnter list 2: <kbd>3 5 6</kbd>\n\nList 1: [1] -&gt; [2] -&gt; [4] -&gt; [8] -&gt; [9] -&gt; X\nList 2: [3] -&gt; [5] -&gt; [6] -&gt; X\nMerged: [1] -&gt; [2] -&gt; [3] -&gt; [4] -&gt; [5] -&gt; [6] -&gt; [8] -&gt; [9] -&gt; X\n</pre>\n<pre>\n<kbd>./testListMergeOrdered</kbd>\nEnter list 1: <kbd>2 3 4 4 5 7 8</kbd>\nEnter list 2: <kbd>1 4 7</kbd>\n\nList 1: [2] -&gt; [3] -&gt; [4] -&gt; [4] -&gt; [5] -&gt; [7] -&gt; [8] -&gt; X\nList 2: [1] -&gt; [4] -&gt; [7] -&gt; X\nMerged: [1] -&gt; [2] -&gt; [3] -&gt; [4] -&gt; [4] -&gt; [4] -&gt; [5] -&gt; [7] -&gt; [7] -&gt; [8] -&gt; X\n</pre>\n<pre>\n<kbd>./testListMergeOrdered</kbd>\nEnter list 1: \nEnter list 2: <kbd>1 3 4 5 6 8 9</kbd>\n\nList 1: X\nList 2: [1] -&gt; [3] -&gt; [4] -&gt; [5] -&gt; [6] -&gt; [8] -&gt; [9] -&gt; X\nMerged: [1] -&gt; [3] -&gt; [4] -&gt; [5] -&gt; [6] -&gt; [8] -&gt; [9] -&gt; X\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/lists/listMergeOrdered/downloads/listMergeOrdered.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>listMergeOrdered.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>list.c</b></td>\n\t\t<td>Contains the implementation of basic list functions</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>list.h</b></td>\n\t\t<td>Contains the definition of the list data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testListMergeOrdered.c</b></td>\n\t\t<td>Contains the main function, which reads in two lists from standard input, calls <code>listMergeOrdered</code>, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>listMergeOrdered.c</b></td>\n\t\t<td>Contains <code>listMergeOrdered</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                    # compiles the program\n<kbd>./testListMergeOrdered</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testListMergeOrdered &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testListMergeOrdered &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                          # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "[1, 2, 2, 3, 3, 3]",
      "output": "3"
    },
    "statement": "<p>Your task is to write a function, <code>listNumDuplicates</code>, that returns the number of duplicate elements in the given linked list, which you can assume is ordered. The number of duplicate elements is the minimum number of elements that would need to be removed to obtain a list with no duplicates. For example, the list [1, 2, 2, 3, 3, 3] contains three duplicate elements, because three elements would need to be removed to obtain a list with no duplicates: 2, 3 and 3. (However, you should not actually remove any elements - you should simply return the number of duplicate values.)</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>The given list is sorted in either ascending or descending order.</li>\n\t<li>You must not use arrays.</li>\n\t<li>You must not use any variant of <code>malloc</code>, either directly or indirectly.</li>\n\t<li>You must not modify the given list.</li>\n</ul>\n\n<h4>Examples</h4>\n<p>Your program should behave like these examples:</p>\n<pre>\n<kbd>./testListNumDuplicates</kbd>\nEnter list: <kbd>1 2 3 4 5 5 5</kbd>\nlistNumDuplicates returned 2\n</pre>\n\n<p><i>Explanation:</i> two elements would need to be removed to obtain a list with no duplicates: 5 and 5.</p>\n\n<pre>\n<kbd>./testListNumDuplicates</kbd>\nEnter list: <kbd>1 1 1 1 1 1 1</kbd>\nlistNumDuplicates returned 6\n</pre>\n\n<p><i>Explanation:</i> six elements would need to be removed to obtain a list with no duplicates: 1, 1, 1, 1, 1 and 1.</p>\n\n<pre>\n<kbd>./testListNumDuplicates</kbd>\nEnter list: <kbd>6 6 5 5 4 4 3 3 2 2 1 1 0</kbd>\nlistNumDuplicates returned 6\n</pre>\n\n<p><i>Explanation:</i> six elements would need to be removed to obtain a list with no duplicates: 6, 5, 4, 3, 2 and 1.</p>\n\n<pre>\n<kbd>./testListNumDuplicates</kbd>\nEnter list: <kbd>1 1 1 1 1 1 2 2 3 4 5 5 5 5</kbd>\nlistNumDuplicates returned 9\n</pre>\n\n<p><i>Explanation:</i> nine elements would need to be removed to obtain a list with no duplicates: 1, 1, 1, 1, 1, 2, 5, 5 and 5.</p>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/lists/listNumDuplicates/downloads/listNumDuplicates.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>listNumDuplicates.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>list.c</b></td>\n\t\t<td>Contains the implementation of basic list functions</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>list.h</b></td>\n\t\t<td>Contains the definition of the list data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testListNumDuplicates.c</b></td>\n\t\t<td>Contains the main function, which reads in a list from standard input, calls <code>listNumDuplicates</code>, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>listNumDuplicates.c</b></td>\n\t\t<td>Contains <code>listNumDuplicates</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                     # compiles the program\n<kbd>./testListNumDuplicates</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testListNumDuplicates &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testListNumDuplicates &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                           # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>\n\n\n<b>Follow up:</b> How would you solve this problem if the list was unordered? Can you do it without modifying the list or creating any new lists?",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "l1 = [1, 3, 4]，l2 = [3, 5]",
      "output": "包含 1 和 4"
    },
    "statement": "<p>Your task is to write a function, <code>listSetDifference</code>, that takes two lists, <code>l1</code> and <code>l2</code>, that represent sets and returns a <b>new list</b> representing the set difference <code>l1 - l2</code>. The values in the returned list may be in any order. Since the given lists represent sets, you may assume that no value appears more than once in a list.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>No value appears more than once in a list.</li>\n\t<li>You must not use arrays.</li>\n\t<li>You must not modify the given lists.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testListSetDifference</kbd>\nEnter list 1: <kbd>4 3 1 7 6</kbd>\nEnter list 2: <kbd>6 2 1 5 3</kbd>\n\nSet 1: {4, 3, 1, 7, 6}\nSet 2: {6, 2, 1, 5, 3}\nDifference: {4, 7}\n</pre>\n<pre>\n<kbd>./testListSetDifference</kbd>\nEnter list 1: <kbd>1 3 5 7 9</kbd>\nEnter list 2: <kbd>8 6 4 2 0</kbd>\n\nSet 1: {1, 3, 5, 7, 9}\nSet 2: {8, 6, 4, 2, 0}\nDifference: {1, 3, 5, 7, 9}\n</pre>\n<pre>\n<kbd>./testListSetDifference</kbd>\nEnter list 1: <kbd>9 1 8 2 5</kbd>\nEnter list 2: <kbd>1 5 2 9 8</kbd>\n\nSet 1: {9, 1, 8, 2, 5}\nSet 2: {1, 5, 2, 9, 8}\nDifference: {}\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/lists/listSetDifference/downloads/listSetDifference.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>listSetDifference.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>list.c</b></td>\n\t\t<td>Contains the implementation of basic list functions</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>list.h</b></td>\n\t\t<td>Contains the definition of the list data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testListSetDifference.c</b></td>\n\t\t<td>Contains the main function, which reads in two lists from standard input, calls <code>listSetDifference</code>, sorts the returned list, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>listSetDifference.c</b></td>\n\t\t<td>Contains <code>listSetDifference</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                     # compiles the program\n<kbd>./testListSetDifference</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testListSetDifference &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testListSetDifference &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                           # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "[1, 3, 4] 和 [3, 4, 5]",
      "output": "包含 3 和 4"
    },
    "statement": "<p>Your task is to write a function, <code>listSetIntersection</code>, that takes two lists representing sets and returns a <b>new list</b> that represents the intersection of those sets. For example, if the two lists are [4, 3, 1, 7, 6] and [3, 2, 5, 1, 6], the function should return a list containing the elements 1, 3 and 6. The values in the returned list may be in any order. Since the given lists represent sets, you may assume that no value appears more than once in a list.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>No value appears more than once in a list.</li>\n\t<li>You must not use arrays.</li>\n\t<li>You must not modify the given lists.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testListSetIntersection</kbd>\nEnter list 1: <kbd>4 3 1 7 6</kbd>\nEnter list 2: <kbd>3 2 1 5 6</kbd>\n\nSet 1: {4, 3, 1, 7, 6}\nSet 2: {3, 2, 1, 5, 6}\nIntersection: {1, 3, 6}\n</pre>\n<pre>\n<kbd>./testListSetIntersection</kbd>\nEnter list 1: <kbd>1 3 5 7 9</kbd>\nEnter list 2: <kbd>8 6 4 2 0</kbd>\n\nSet 1: {1, 3, 5, 7, 9}\nSet 2: {8, 6, 4, 2, 0}\nIntersection: {}\n</pre>\n<pre>\n<kbd>./testListSetIntersection</kbd>\nEnter list 1: \nEnter list 2: <kbd>1 8 3 9</kbd>\n\nSet 1: {}\nSet 2: {1, 8, 3, 9}\nIntersection: {}\n</pre>\n<pre>\n<kbd>./testListSetIntersection</kbd>\nEnter list 1: <kbd>5 8 3 9 6 7 1 4 2</kbd>\nEnter list 2: <kbd>3 2 8 4 0 9</kbd>\n\nSet 1: {5, 8, 3, 9, 6, 7, 1, 4, 2}\nSet 2: {3, 2, 8, 4, 0, 9}\nIntersection: {2, 3, 4, 8, 9}\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/lists/listSetIntersection/downloads/listSetIntersection.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>listSetIntersection.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>list.c</b></td>\n\t\t<td>Contains the implementation of basic list functions</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>list.h</b></td>\n\t\t<td>Contains the definition of the list data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testListSetIntersection.c</b></td>\n\t\t<td>Contains the main function, which reads in two lists from standard input, calls <code>listSetIntersection</code>, sorts the returned list, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>listSetIntersection.c</b></td>\n\t\t<td>Contains <code>listSetIntersection</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                       # compiles the program\n<kbd>./testListSetIntersection</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testListSetIntersection &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testListSetIntersection &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                             # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "[1, 3] 和 [3, 5]",
      "output": "包含 1、3、5"
    },
    "statement": "<p>Your task is to write a function, <code>listSetUnion</code>, that takes two lists representing sets and returns a <b>new list</b> that represents the union of those sets. For example, if the two lists are [4, 3, 1, 7, 6] and [3, 2, 5, 1, 6], the function should return a list containing the elements 1, 2, 3, 4, 5, 6 and 7. The values in the returned list may be in any order. Since the given lists represent sets, you may assume that no value appears more than once in a list.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>No value appears more than once in a list.</li>\n\t<li>You must not use arrays.</li>\n\t<li>You must not modify the given lists.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testListSetUnion</kbd>\nEnter list 1: <kbd>4 3 1 7 6</kbd>\nEnter list 2: <kbd>3 2 1 5 6</kbd>\n\nSet 1: {4, 3, 1, 7, 6}\nSet 2: {3, 2, 1, 5, 6}\nUnion: {1, 2, 3, 4, 5, 6, 7}\n</pre>\n<pre>\n<kbd>./testListSetUnion</kbd>\nEnter list 1: <kbd>1 3 5 7 9</kbd>\nEnter list 2: <kbd>8 6 4 2 0</kbd>\n\nSet 1: {1, 3, 5, 7, 9}\nSet 2: {8, 6, 4, 2, 0}\nUnion: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}\n</pre>\n<pre>\n<kbd>./testListSetUnion</kbd>\nEnter list 1: \nEnter list 2: <kbd>1 8 3 9</kbd>\n\nSet 1: {}\nSet 2: {1, 8, 3, 9}\nUnion: {1, 3, 8, 9}\n</pre>\n<pre>\n<kbd>./testListSetUnion</kbd>\nEnter list 1: \nEnter list 2: \n\nSet 1: {}\nSet 2: {}\nUnion: {}\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/lists/listSetUnion/downloads/listSetUnion.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>listSetUnion.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>list.c</b></td>\n\t\t<td>Contains the implementation of basic list functions</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>list.h</b></td>\n\t\t<td>Contains the definition of the list data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testListSetUnion.c</b></td>\n\t\t<td>Contains the main function, which reads in two lists from standard input, calls <code>listSetUnion</code>, sorts the returned list, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>listSetUnion.c</b></td>\n\t\t<td>Contains <code>listSetUnion</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                # compiles the program\n<kbd>./testListSetUnion</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testListSetUnion &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testListSetUnion &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                      # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "l1 = [7, 5, 2]，l2 = [4, 8]",
      "output": "[7, 4, 5, 8, 2]"
    },
    "statement": "<p>Your task is to write a function, <code>listZip</code>, that takes two lists and zips their values into a <b>new list</b> by alternating taking values from each of the lists. For example, if the two lists are [7, 5, 2, 9] and [4, 8, 1, 6], the function should return the list [7, 4, 5, 8, 2, 1, 9, 6]. If one of the lists is longer than the other, then the excess values in the longer list should simply be appended to the resulting list.</p>\n\n<p>In the general case, <code>listZip</code> takes two lists [a_1, a_2, ... , a_n] and [b_1, b_2, ... , b_m], and produces a new list as shown below:</p>\n\n<ul>\n\t<li>If n = m, the new list is [ a_1, b_1, a_2, b_2, ... , a_n, b_n]</li>\n\t<li>If \\( n &lt; m \\), the new list is [ a_1, b_1, a_2, b_2, ... , a_n, b_n, b_{n + 1}, b_{n + 2}, ... , b_m]</li>\n\t<li>If n &gt; m, the new list is [ a_1, b_1, a_2, b_2, ... , a_m, b_m, a_{m + 1}, a_{m + 2}, ... , a_n]</li>\n</ul>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>You must not use arrays.</li>\n\t<li>You must not modify the given lists.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testListZip</kbd>\nEnter list 1: <kbd>1 3 5 7</kbd>\nEnter list 2: <kbd>8 6 4 2</kbd>\n\nList 1: [1] -&gt; [3] -&gt; [5] -&gt; [7] -&gt; X\nList 2: [8] -&gt; [6] -&gt; [4] -&gt; [2] -&gt; X\nZipped: [1] -&gt; [8] -&gt; [3] -&gt; [6] -&gt; [5] -&gt; [4] -&gt; [7] -&gt; [2] -&gt; X\n</pre>\n<pre>\n<kbd>./testListZip</kbd>\nEnter list 1: <kbd>7 2 8</kbd>\nEnter list 2: <kbd>5 1 4 9 3 6</kbd>\n\nList 1: [7] -&gt; [2] -&gt; [8] -&gt; X\nList 2: [5] -&gt; [1] -&gt; [4] -&gt; [9] -&gt; [3] -&gt; [6] -&gt; X\nZipped: [7] -&gt; [5] -&gt; [2] -&gt; [1] -&gt; [8] -&gt; [4] -&gt; [9] -&gt; [3] -&gt; [6] -&gt; X\n</pre>\n<pre>\n<kbd>./testListZip</kbd>\nEnter list 1: <kbd>4 3 7 2 9</kbd>\nEnter list 2: <kbd>6 1</kbd>\n\nList 1: [4] -&gt; [3] -&gt; [7] -&gt; [2] -&gt; [9] -&gt; X\nList 2: [6] -&gt; [1] -&gt; X\nZipped: [4] -&gt; [6] -&gt; [3] -&gt; [1] -&gt; [7] -&gt; [2] -&gt; [9] -&gt; X\n</pre>\n<pre>\n<kbd>./testListZip</kbd>\nEnter list 1: \nEnter list 2: <kbd>1 7 3 8 5 2 4</kbd>\n\nList 1: X\nList 2: [1] -&gt; [7] -&gt; [3] -&gt; [8] -&gt; [5] -&gt; [2] -&gt; [4] -&gt; X\nZipped: [1] -&gt; [7] -&gt; [3] -&gt; [8] -&gt; [5] -&gt; [2] -&gt; [4] -&gt; X\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/lists/listZip/downloads/listZip.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>listZip.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>list.c</b></td>\n\t\t<td>Contains the implementation of basic list functions</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>list.h</b></td>\n\t\t<td>Contains the definition of the list data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testListZip.c</b></td>\n\t\t<td>Contains the main function, which reads in two lists from standard input, calls <code>listZip</code>, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>listZip.c</b></td>\n\t\t<td>Contains <code>listZip</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                           # compiles the program\n<kbd>./testListZip</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testListZip &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testListZip &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                 # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "1 ⇄ 2 ⇄ 3",
      "output": "3 ⇄ 2 ⇄ 1"
    },
    "statement": "<p>Your task is to write a function, <code>reverseDLList</code>, that reverses a given <b>doubly</b> linked list. You should <b>not</b> change the values in any nodes or create any new nodes - instead, you should just rearrange the nodes and pointers of the given list.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>You must not use arrays.</li>\n\t<li>You must not use any variant of <code>malloc</code>, either directly or indirectly.</li>\n\t<li>You must not change the values in any nodes.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testReverseDLList</kbd>\nEnter list: <kbd>2 3 5 7 11</kbd>\n\nOriginal list:\nSize: 5\nForwards:  [2] -&gt; [3] -&gt; [5] -&gt; [7] -&gt; [11] -&gt; X\nBackwards: [11] -&gt; [7] -&gt; [5] -&gt; [3] -&gt; [2] -&gt; X\n\nReversed list:\nSize: 5\nForwards:  [11] -&gt; [7] -&gt; [5] -&gt; [3] -&gt; [2] -&gt; X\nBackwards: [2] -&gt; [3] -&gt; [5] -&gt; [7] -&gt; [11] -&gt; X\n</pre>\n<pre>\n<kbd>./testReverseDLList</kbd>\nEnter list: \n\nOriginal list:\nSize: 0\nForwards:  X\nBackwards: X\n\nReversed list:\nSize: 0\nForwards:  X\nBackwards: X\n</pre>\n<pre>\n<kbd>./testReverseDLList</kbd>\nEnter list: <kbd>1 2 7 9 2 1</kbd>\n\nOriginal list:\nSize: 6\nForwards:  [1] -&gt; [2] -&gt; [7] -&gt; [9] -&gt; [2] -&gt; [1] -&gt; X\nBackwards: [1] -&gt; [2] -&gt; [9] -&gt; [7] -&gt; [2] -&gt; [1] -&gt; X\n\nReversed list:\nSize: 6\nForwards:  [1] -&gt; [2] -&gt; [9] -&gt; [7] -&gt; [2] -&gt; [1] -&gt; X\nBackwards: [1] -&gt; [2] -&gt; [7] -&gt; [9] -&gt; [2] -&gt; [1] -&gt; X\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/lists/reverseDLList/downloads/reverseDLList.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>reverseDLList.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>list.c</b></td>\n\t\t<td>Contains the implementation of basic list functions</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>list.h</b></td>\n\t\t<td>Contains the definition of the list data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testReverseDLList.c</b></td>\n\t\t<td>Contains the main function, which reads in a list from standard input, calls <code>reverseDLList</code>, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>reverseDLList.c</b></td>\n\t\t<td>Contains <code>reverseDLList</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                 # compiles the program\n<kbd>./testReverseDLList</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testReverseDLList &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testReverseDLList &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                       # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "1 → 2 → 3",
      "output": "3 → 2 → 1"
    },
    "statement": "<p>Your task is to write a function, <code>reverseList</code>, that reverses a given singly linked list. You should <b>not</b> change the values in any nodes or create any new nodes - instead, you should just rearrange the nodes and pointers of the given list.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>You must not use arrays.</li>\n\t<li>You must not use any variant of <code>malloc</code>, either directly or indirectly.</li>\n\t<li>You must not change the values in any nodes.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testReverseList</kbd>\nEnter list: <kbd>2 3 5 7 11</kbd>\nOriginal list: [2] -&gt; [3] -&gt; [5] -&gt; [7] -&gt; [11] -&gt; X\nReversed list: [11] -&gt; [7] -&gt; [5] -&gt; [3] -&gt; [2] -&gt; X\n</pre>\n<pre>\n<kbd>./testReverseList</kbd>\nEnter list: \nOriginal list: X\nReversed list: X\n</pre>\n<pre>\n<kbd>./testReverseList</kbd>\nEnter list: <kbd>1 2 7 9 2 1</kbd>\nOriginal list: [1] -&gt; [2] -&gt; [7] -&gt; [9] -&gt; [2] -&gt; [1] -&gt; X\nReversed list: [1] -&gt; [2] -&gt; [9] -&gt; [7] -&gt; [2] -&gt; [1] -&gt; X\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/lists/reverseList/downloads/reverseList.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>reverseList.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>list.c</b></td>\n\t\t<td>Contains the implementation of basic list functions</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>list.h</b></td>\n\t\t<td>Contains the definition of the list data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testReverseList.c</b></td>\n\t\t<td>Contains the main function, which reads in a list from standard input, calls <code>reverseList</code>, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>reverseList.c</b></td>\n\t\t<td>Contains <code>reverseList</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                               # compiles the program\n<kbd>./testReverseList</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testReverseList &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testReverseList &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                     # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "根为 5，右孩子为 8",
      "output": "*max = 8，更新后只剩 5"
    },
    "statement": "<p>Your task is to write a function, <code>bstDeleteLargest</code>, that takes a BST and a pointer to an integer <code>max</code>, and deletes the largest value in the given BST, sets <code>*max</code> to the value that was deleted, and returns the root of the updated tree,</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>The given BST is non-empty.</li>\n\t<li>You must not use arrays.</li>\n\t<li>You must not use any variant of <code>malloc</code>, either directly or indirectly.</li>\n\t<li>You must not change the values in any nodes.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testBstDeleteLargest</kbd>\nEnter the preorder traversal of the BST: <kbd>5 3 2 7 8</kbd>\n\nBST:\n\n    5\n   / \\\n  3   7\n /     \\\n2       8\n\nBST after deleting largest:\n\n    5\n   / \\\n  3   7\n /\n2\n\nThe largest value was 8\n</pre>\n\n<pre>\n<kbd>./testBstDeleteLargest</kbd>\nEnter the preorder traversal of the BST: <kbd>6 2 1 4</kbd>\n\nBST:\n\n    6\n   /\n  2\n / \\\n1   4\n\nBST after deleting largest:\n\n  2\n / \\\n1   4\n\nThe largest value was 6\n</pre>\n\n<pre>\n<kbd>./testBstDeleteLargest</kbd>\nEnter the preorder traversal of the BST: <kbd>2 3 7 5</kbd>\n\nBST:\n\n2\n \\\n  3\n   \\\n    7\n   /\n  5\n\nBST after deleting largest:\n\n2\n \\\n  3\n   \\\n    5\n\nThe largest value was 7\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/trees/bstDeleteLargest/downloads/bstDeleteLargest.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>bstDeleteLargest.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>bst.c</b></td>\n\t\t<td>Contains code for reading and printing a BST</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>bst.h</b></td>\n\t\t<td>Contains the definition of the BST data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testBstDeleteLargest.c</b></td>\n\t\t<td>Contains the main function, which reads in a BST from standard input, calls <code>bstDeleteLargest</code> and prints out the result</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>bstDeleteLargest.c</b></td>\n\t\t<td>Contains <code>bstDeleteLargest</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                    # compiles the program\n<kbd>./testBstDeleteLargest</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testBstDeleteLargest &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testBstDeleteLargest &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                          # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>\n\n\n\t<b>Follow up:</b> Can you solve this using both iterative and recursive approaches?",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "树包含 2、5、9，k = 1",
      "output": "5"
    },
    "statement": "<p>Your task is to write a function, <code>bstGetKth</code>, that takes a BST and a value <code>k</code>, and returns the value at index k in the BST. The smallest value in the BST is regarded as being at index 0, the second smallest value is regarded as being at index 1, and so on.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>k is between 0 and n - 1, where n is the size of the tree</li>\n\t<li>You must not modify the given tree.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testBstGetKth</kbd>\nEnter the preorder traversal of the BST: <kbd>3 2 1 4 5</kbd>\n\nBST:\n\n    3\n   / \\\n  2   4\n /     \\\n1       5\n\nEnter k: <kbd>0</kbd>\nFor k = 0, bstGetKth returned 1\nEnter k: <kbd>1</kbd>\nFor k = 1, bstGetKth returned 2\nEnter k: <kbd>2</kbd>\nFor k = 2, bstGetKth returned 3\nEnter k: <kbd>3</kbd>\nFor k = 3, bstGetKth returned 4\nEnter k: <kbd>4</kbd>\nFor k = 4, bstGetKth returned 5\nEnter k: \n</pre>\n\n<pre>\n<kbd>./testBstGetKth</kbd>\nEnter the preorder traversal of the BST: <kbd>8 2 5 4 7 12 13</kbd>\n\nBST:\n\n   8\n  / \\\n /   \\\n2    12\n \\     \\\n  5    13\n / \\\n4   7\n\nEnter k: <kbd>0</kbd>\nFor k = 0, bstGetKth returned 2\nEnter k: <kbd>1</kbd>\nFor k = 1, bstGetKth returned 4\nEnter k: <kbd>2</kbd>\nFor k = 2, bstGetKth returned 5\nEnter k: <kbd>3</kbd>\nFor k = 3, bstGetKth returned 7\nEnter k: <kbd>4</kbd>\nFor k = 4, bstGetKth returned 8\nEnter k: <kbd>5</kbd>\nFor k = 5, bstGetKth returned 12\nEnter k: <kbd>6</kbd>\nFor k = 6, bstGetKth returned 13\nEnter k: \n</pre>\n\n<pre>\n<kbd>./testBstGetKth</kbd>\nEnter the preorder traversal of the BST: <kbd>7</kbd>\n\nBST:\n\n7\n\nEnter k: <kbd>0</kbd>\nFor k = 0, bstGetKth returned 7\nEnter k: \n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/trees/bstGetKth/downloads/bstGetKth.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>files.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>bst.c</b></td>\n\t\t<td>Contains code for reading and printing a BST</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>bst.h</b></td>\n\t\t<td>Contains the definition of the BST data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testBstGetKth.c</b></td>\n\t\t<td>Contains the main function, which reads in a BST and the value of k from standard input, calls <code>bstGetKth</code> and prints out the result</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>bstGetKth.c</b></td>\n\t\t<td>Contains <code>bstGetKth</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                             # compiles the program\n<kbd>./testBstGetKth</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testBstGetKth &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testBstGetKth &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                   # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "树包含 2、5、9",
      "output": "指向值为 2 的节点"
    },
    "statement": "<p>Your task is to write a function, <code>bstGetSmallest</code>, that returns a pointer to the node containing the smallest value in the given BST. If the tree is empty, return <code>NULL</code>.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>You must not modify the given tree.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testBstGetSmallest</kbd>\nEnter the preorder traversal of the BST: <kbd>6 5 2 8 9</kbd>\n\nBST:\n\n    6\n   / \\\n  5   8\n /     \\\n2       9\n\nbstGetSmallest returned: 2\n</pre>\n\n<pre>\n<kbd>./testBstGetSmallest</kbd>\nEnter the preorder traversal of the BST: <kbd>5 8 6 9</kbd>\n\nBST:\n\n5\n \\\n  8\n / \\\n6   9\n\nbstGetSmallest returned: 5\n</pre>\n\n<pre>\n<kbd>./testBstGetSmallest</kbd>\nEnter the preorder traversal of the BST: \n\nBST:\n\nX\n\nbstGetSmallest returned: NULL\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/trees/bstGetSmallest/downloads/bstGetSmallest.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>bstGetSmallest.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>bst.c</b></td>\n\t\t<td>Contains code for reading and printing a BST</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>bst.h</b></td>\n\t\t<td>Contains the definition of the BST data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testBstGetSmallest.c</b></td>\n\t\t<td>Contains the main function, which reads in a BST from standard input, calls <code>bstGetSmallest</code> and prints out the result</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>bstGetSmallest.c</b></td>\n\t\t<td>Contains <code>bstGetSmallest</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                  # compiles the program\n<kbd>./testBstGetSmallest</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testBstGetSmallest &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testBstGetSmallest &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                        # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>\n\n\n\t<b>Follow up:</b> Can you solve this using both iterative and recursive approaches?",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "根为 5，左右孩子为 2 和 7",
      "output": "2 7 5"
    },
    "statement": "<p>Your task is to write a function, <code>bstPostfix</code>, that prints out the values of the given BST in postfix order. The values should be printed out space-separated on a single line.</p>\n\n<h4>Assumptions and Constraints</h4>\n<ul>\n\t<li>You must not modify the given tree.</li>\n</ul>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testBstPostfix</kbd>\nEnter the preorder traversal of the BST: \n\nBST:\n\nX\n\nValues in postfix order: \n</pre>\n\n<pre>\n<kbd>./testBstPostfix</kbd>\nEnter the preorder traversal of the BST: <kbd>8 7 4 2 1 3 6</kbd>\n\nBST:\n\n        8\n       /\n      7\n     /\n    4\n   / \\\n  2   6\n / \\\n1   3\n\nValues in postfix order: 1 3 2 6 4 7 8 \n</pre>\n\n<pre>\n<kbd>./testBstPostfix</kbd>\nEnter the preorder traversal of the BST: <kbd>7 4 3 1 10 8 13</kbd>\n\nBST:\n\n       7\n      / \\\n     /   \\\n    4    10\n   /     / \\\n  3     8  13\n /\n1\n\nValues in postfix order: 1 3 4 8 13 10 7 \n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/trees/bstPostfix/downloads/bstPostfix.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>bstPostfix.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>bst.c</b></td>\n\t\t<td>Contains code for reading and printing a BST</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>bst.h</b></td>\n\t\t<td>Contains the definition of the BST data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testBstPostfix.c</b></td>\n\t\t<td>Contains the main function, which reads in a BST from standard input and calls <code>bstPostfix</code></td>\n\t</tr>\n\t<tr>\n\t\t<td><b>bstPostfix.c</b></td>\n\t\t<td>Contains <code>bstPostfix</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                 # compiles the program\n<kbd>./testBstPostfix</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testBstPostfix &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testBstPostfix &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                       # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "根为 5，左右孩子为 2 和 7，depth = 0",
      "output": "一棵新的树，只含节点 5"
    },
    "statement": "<p>Your task is to write a function, <code>treeCopy</code>, that copies a tree <b>up to a given depth</b>. If the given depth is negative, you should return an empty tree. If the given depth is greater than the height of the tree, you should return <b>a copy</b> of the entire tree.</p>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testTreeCopy</kbd>\nEnter the preorder traversal of the tree: <kbd>4 2 1 3 6 5 7</kbd>\nEnter the in-order traversal of the tree: <kbd>1 2 3 4 5 6 7</kbd>\nEnter depth: <kbd>1</kbd>\n\nTree:\n\n      4\n     / \\\n    /   \\\n   /     \\\n  2       6\n / \\     / \\\n1   3   5   7\n\nCopy of the tree up to depth 1:\n\n  4\n / \\\n2   6\n</pre>\n\n<pre>\n<kbd>./testTreeCopy</kbd>\nEnter the preorder traversal of the tree: <kbd>2 1 4 3 6 5</kbd>\nEnter the in-order traversal of the tree: <kbd>1 2 3 4 5 6</kbd>\nEnter depth: <kbd>0</kbd>\n\nTree:\n\n  2\n / \\\n1   4\n   / \\\n  3   6\n     /\n    5\n\nCopy of the tree up to depth 0:\n\n2\n</pre>\n\n<pre>\n<kbd>./testTreeCopy</kbd>\nEnter the preorder traversal of the tree: <kbd>4 1 7</kbd>\nEnter the in-order traversal of the tree: <kbd>1 4 7</kbd>\nEnter depth: <kbd>-1</kbd>\n\nTree:\n\n  4\n / \\\n1   7\n\nCopy of the tree up to depth -1:\n\nX\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/trees/treeCopy/downloads/treeCopy.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>treeCopy.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>tree.c</b></td>\n\t\t<td>Contains code for reading and printing a binary tree</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tree.h</b></td>\n\t\t<td>Contains the definition of the binary tree data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testTreeCopy.c</b></td>\n\t\t<td>Contains the main function, which reads in a binary tree from standard input, calls <code>treeCopy</code>, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>treeCopy.c</b></td>\n\t\t<td>Contains <code>treeCopy</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                            # compiles the program\n<kbd>./testTreeCopy</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testTreeCopy &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testTreeCopy &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                  # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>",
    "hasOfficialDiagram": false
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
    "example": {
      "input": "根节点只有左子树，左子树有 2 个节点",
      "output": "false"
    },
    "statement": "<p>Your task is to write a function, <code>treeIsSizeBalanced</code>, that determines whether a given tree is size balanced. A tree is size balanced if, for every node, the difference in size (i.e., number of nodes) between its left and right subtrees does not exceed 1. The function should return true if the tree is size balanced, and false otherwise.</p>\n\n<h4>Examples</h4>\n<pre>\n<kbd>./testTreeIsSizeBalanced</kbd>\nEnter the preorder traversal of the tree: 3 2 1 4 5\nEnter the in-order traversal of the tree: 1 2 3 4 5\n\nTree:\n\n    3\n   / \\\n  2   4\n /     \\\n1       5\n\ntreeIsSizeBalanced returned TRUE\n</pre>\n\n<pre>\n<kbd>./testTreeIsSizeBalanced</kbd>\nEnter the preorder traversal of the tree: 1 2 4 7 5 3 6\nEnter the in-order traversal of the tree: 7 4 2 5 1 6 3\n\nTree:\n\n        1\n       / \\\n      /   \\\n     /     \\\n    2       3\n   / \\     /\n  4   5   6\n /\n7\n\ntreeIsSizeBalanced returned FALSE\n</pre>\n\n<pre>\n<kbd>./testTreeIsSizeBalanced</kbd>\nEnter the preorder traversal of the tree: \nEnter the in-order traversal of the tree: \n\nTree:\n\nX\n\ntreeIsSizeBalanced returned TRUE\n</pre>",
    "sourceNotes": "<h4>Download</h4>\n<p>While in your practice exercises directory, run the following command:</p>\n<pre>\n<kbd>unzip /web/cs2521/practice-exercises/trees/treeIsSizeBalanced/downloads/treeIsSizeBalanced.zip</kbd>\n</pre>\n<p>If you&#x27;re working at home, download <code>treeIsSizeBalanced.zip</code> by clicking on the above link and then unzip the downloaded file.</p>\n\n<h4>Files</h4>\n<table>\n\t<tr>\n\t\t<td><b>tree.c</b></td>\n\t\t<td>Contains code for reading and printing a binary tree</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tree.h</b></td>\n\t\t<td>Contains the definition of the binary tree data structure and function prototypes</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>testTreeIsSizeBalanced.c</b></td>\n\t\t<td>Contains the main function, which reads in a binary tree from standard input, calls <code>treeIsSizeBalanced</code>, and prints out the result.</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>treeIsSizeBalanced.c</b></td>\n\t\t<td>Contains <code>treeIsSizeBalanced</code>, the function you must implement</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>Makefile</b></td>\n\t\t<td>A makefile to compile your code</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>tests/</b></td>\n\t\t<td>A directory containing the inputs and expected outputs for some basic tests</td>\n\t</tr>\n\t<tr>\n\t\t<td><b>autotest<b></td>\n\t\t<td>A script that uses the tests in the tests directory to autotest your solution. You should only run this after you have tested your solution manually.</td>\n\t</tr>\n</table>\n\n<h4>Testing</h4>\n\n<p>You can compile and test your function using the following commands:</p>\n\n<pre>\n<kbd>make</kbd>                                      # compiles the program\n<kbd>./testTreeIsSizeBalanced</kbd>                  # tests with manual input, outputs to terminal\n<kbd>./testTreeIsSizeBalanced &lt; <i>input-file</i></kbd>     # tests with input from a file, outputs to terminal\n<kbd>./testTreeIsSizeBalanced &lt; tests/01.in</kbd>    # for example, tests with input from tests/01.in\n                                            # (then manually compare with tests/01.exp)\n</pre>\n\n<p>After you have manually tested your solution, you can autotest it by running <code>./autotest</code>. This will run some basic tests on your program, as well as check for memory leaks/errors.</p>\n\n<p>It is possible to devise your own tests by creating your own input files. See the existing input files for examples. Note that you will need to check the output yourself.</p>\n\n\n\t<b>Follow up:</b> Can you solve this in O(n) time?",
    "hasOfficialDiagram": false
  }
];

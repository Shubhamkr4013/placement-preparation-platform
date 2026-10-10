// ============================================
// DSA QUESTION BANK
// Placement Preparation Platform
// React + Vite
// ============================================

// Format:
// [title, topic, difficulty, id, approach, companies]

const legacyQuestions = [
  ["Find Minimum in Rotated Sorted Array", "Binary Search", "Medium", "find-minimum-in-rotated-sorted-array", "Binary Search", ["Amazon", "Google"]],
  ["Search in Rotated Sorted Array", "Binary Search", "Medium", "search-in-rotated-sorted-array", "Modified Binary Search", ["Amazon", "Microsoft"]],
  ["Find Peak Element", "Binary Search", "Medium", "find-peak-element", "Binary Search", ["Amazon", "Google"]],
  ["Median of Two Sorted Arrays", "Binary Search", "Hard", "median-of-two-sorted-arrays", "Binary Search Partition", ["Amazon", "Google"]],
  ["Kth Missing Positive Number", "Binary Search", "Easy", "kth-missing-positive-number", "Binary Search", ["Amazon"]],

  ["Rotate Array", "Arrays & Hashing", "Medium", "rotate-array", "Reverse Array", ["Amazon", "Microsoft"]],
  ["First Missing Positive", "Arrays & Hashing", "Hard", "first-missing-positive", "Index Placement", ["Amazon", "Google"]],
  ["Set Matrix Zeroes", "Arrays & Hashing", "Medium", "set-matrix-zeroes", "In-place Matrix", ["Amazon", "Microsoft"]],
  ["Spiral Matrix", "Arrays & Hashing", "Medium", "spiral-matrix", "Matrix Traversal", ["Amazon"]],
  ["Rotate Image", "Arrays & Hashing", "Medium", "rotate-image", "Transpose + Reverse", ["Amazon", "Google"]],
  ["Subarray Sum Equals K", "Arrays & Hashing", "Medium", "subarray-sum-equals-k", "Prefix Sum + Hash Map", ["Amazon", "Google"]],
  ["Longest Consecutive Sequence", "Arrays & Hashing", "Medium", "longest-consecutive-sequence", "Hash Set", ["Amazon", "Google"]],
  ["Insert Delete GetRandom O(1)", "Hashing", "Medium", "insert-delete-getrandom-o1", "Hash Map + Array", ["Amazon"]],
  ["Valid Sudoku", "Arrays & Hashing", "Medium", "valid-sudoku", "Hashing", ["Amazon"]],

  ["Longest Repeating Character Replacement", "Sliding Window", "Medium", "longest-repeating-character-replacement", "Sliding Window", ["Amazon", "Google"]],
  ["Permutation in String", "Sliding Window", "Medium", "permutation-in-string", "Sliding Window + Frequency", ["Amazon", "Microsoft"]],
  ["Minimum Size Subarray Sum", "Sliding Window", "Medium", "minimum-size-subarray-sum", "Sliding Window", ["Amazon"]],
  ["Find All Anagrams in a String", "Sliding Window", "Medium", "find-all-anagrams-in-a-string", "Sliding Window", ["Amazon"]],

  ["Valid Parentheses", "Stack & Queue", "Easy", "valid-parentheses", "Stack", ["TCS", "Infosys", "Accenture"]],
  ["Implement Queue using Stacks", "Stack & Queue", "Easy", "implement-queue-using-stacks", "Stack Design", ["Amazon"]],
  ["Daily Temperatures", "Stack & Queue", "Medium", "daily-temperatures", "Monotonic Stack", ["Amazon", "Google"]],
  ["Largest Rectangle in Histogram", "Stack & Queue", "Hard", "largest-rectangle-in-histogram", "Monotonic Stack", ["Amazon", "Google"]],
  ["Simplify Path", "Stack & Queue", "Medium", "simplify-path", "Stack", ["Amazon"]],
  ["Next Greater Element I", "Stack & Queue", "Easy", "next-greater-element-i", "Monotonic Stack", ["Amazon"]],
  ["LRU Cache", "Stack & Queue", "Medium", "lru-cache", "Hash Map + Doubly Linked List", ["Amazon", "Google"]],

  ["Reverse Nodes in k-Group", "Linked List", "Hard", "reverse-nodes-in-k-group", "Pointer Manipulation", ["Amazon", "Google"]],
  ["Reorder List", "Linked List", "Medium", "reorder-list", "Fast/Slow + Reverse", ["Amazon"]],
  ["Copy List with Random Pointer", "Linked List", "Medium", "copy-list-with-random-pointer", "Hash Map", ["Amazon", "Google"]],
  ["Add Two Numbers", "Linked List", "Medium", "add-two-numbers", "Carry + Linked List", ["Amazon"]],
  ["Merge k Sorted Lists", "Linked List", "Hard", "merge-k-sorted-lists", "Heap / Divide and Conquer", ["Amazon", "Google"]],

  ["Binary Tree Right Side View", "Trees", "Medium", "binary-tree-right-side-view", "BFS / DFS", ["Amazon"]],
  ["Construct Binary Tree from Preorder and Inorder Traversal", "Trees", "Medium", "construct-binary-tree-from-preorder-and-inorder-traversal", "Tree Recursion", ["Amazon", "Google"]],
  ["Kth Smallest Element in a BST", "Trees", "Medium", "kth-smallest-element-in-a-bst", "Inorder Traversal", ["Amazon"]],
  ["Binary Tree Maximum Path Sum", "Trees", "Hard", "binary-tree-maximum-path-sum", "Tree DP", ["Amazon", "Google"]],
  ["Serialize and Deserialize Binary Tree", "Trees", "Hard", "serialize-and-deserialize-binary-tree", "Tree Traversal", ["Amazon", "Google"]],
  ["Lowest Common Ancestor of a Binary Tree", "Trees", "Medium", "lowest-common-ancestor-of-a-binary-tree", "Tree Recursion", ["Amazon", "Microsoft"]],

  ["Implement Trie (Prefix Tree)", "Tries", "Medium", "implement-trie-prefix-tree", "Trie", ["Google", "Amazon"]],

  ["Word Search", "Backtracking", "Medium", "word-search", "Backtracking + Grid DFS", ["Amazon"]],
  ["Combination Sum", "Backtracking", "Medium", "combination-sum", "Backtracking", ["Amazon", "Google"]],
  ["Letter Combinations of a Phone Number", "Backtracking", "Medium", "letter-combinations-of-a-phone-number", "Backtracking", ["Amazon"]],
  ["Permutations", "Backtracking", "Medium", "permutations", "Backtracking", ["Amazon"]],
  ["Subsets", "Backtracking", "Medium", "subsets", "Backtracking", ["Amazon", "Google"]],

  ["Number of Islands", "Graphs", "Medium", "number-of-islands", "DFS / BFS", ["Amazon", "Google"]],
  ["Clone Graph", "Graphs", "Medium", "clone-graph", "DFS + Hash Map", ["Amazon"]],
  ["Course Schedule", "Graphs", "Medium", "course-schedule", "Topological Sort", ["Amazon", "Google"]],
  ["Pacific Atlantic Water Flow", "Graphs", "Medium", "pacific-atlantic-water-flow", "Multi-source DFS", ["Google"]],
  ["Rotting Oranges", "Graphs", "Medium", "rotting-oranges", "Multi-source BFS", ["Amazon"]],
  ["Network Delay Time", "Graphs", "Medium", "network-delay-time", "Dijkstra", ["Amazon", "Google"]],
  ["Redundant Connection", "Graphs", "Medium", "redundant-connection", "Union Find", ["Amazon"]],
  ["Accounts Merge", "Graphs", "Medium", "accounts-merge", "Union Find", ["Amazon", "Google"]],

  ["Climbing Stairs", "Dynamic Programming", "Easy", "climbing-stairs", "1D DP", ["TCS", "Infosys"]],
  ["House Robber", "Dynamic Programming", "Medium", "house-robber", "1D DP", ["Amazon"]],
  ["House Robber II", "Dynamic Programming", "Medium", "house-robber-ii", "Circular DP", ["Amazon"]],
  ["Coin Change", "Dynamic Programming", "Medium", "coin-change", "Unbounded Knapsack", ["Amazon", "Google"]],
  ["Longest Increasing Subsequence", "Dynamic Programming", "Medium", "longest-increasing-subsequence", "DP / Binary Search", ["Amazon"]],
  ["Word Break", "Dynamic Programming", "Medium", "word-break", "DP + Hash Set", ["Amazon"]],
  ["Partition Equal Subset Sum", "Dynamic Programming", "Medium", "partition-equal-subset-sum", "0/1 Knapsack", ["Amazon"]],
  ["Edit Distance", "Dynamic Programming", "Medium", "edit-distance", "2D DP", ["Amazon", "Google"]],
  ["Unique Paths", "Dynamic Programming", "Medium", "unique-paths", "Grid DP", ["Amazon"]],
  ["Longest Common Subsequence", "Dynamic Programming", "Medium", "longest-common-subsequence", "2D DP", ["Amazon"]],

  ["Jump Game", "Greedy", "Medium", "jump-game", "Greedy", ["Amazon"]],
  ["Jump Game II", "Greedy", "Medium", "jump-game-ii", "Greedy / Range Expansion", ["Amazon"]],

  ["Merge Intervals", "Intervals", "Medium", "merge-intervals", "Sorting + Intervals", ["Amazon", "Google"]],
  ["Non-overlapping Intervals", "Intervals", "Medium", "non-overlapping-intervals", "Greedy + Sorting", ["Amazon"]],
  ["Meeting Rooms II", "Intervals", "Medium", "meeting-rooms-ii", "Heap / Sweep Line", ["Amazon", "Google"]],

  ["Kth Largest Element in an Array", "Heap & Priority Queue", "Medium", "kth-largest-element-in-an-array", "Heap / Quickselect", ["Amazon"]],
  ["Top K Frequent Elements", "Heap & Priority Queue", "Medium", "top-k-frequent-elements", "Heap / Bucket Sort", ["Amazon", "Google"]],
  ["Find Median from Data Stream", "Heap & Priority Queue", "Hard", "find-median-from-data-stream", "Two Heaps", ["Amazon", "Google"]],

  ["Product of Array Except Self", "Arrays & Hashing", "Medium", "product-of-array-except-self", "Prefix / Suffix", ["Amazon", "Google"]],
  ["Maximum Subarray", "Arrays & Hashing", "Medium", "maximum-subarray", "Kadane's Algorithm", ["TCS", "Infosys", "Amazon"]],
  ["Group Anagrams", "Strings", "Medium", "group-anagrams", "Hash Map", ["Amazon", "Google"]],
  ["Longest Palindromic Substring", "Strings", "Medium", "longest-palindromic-substring", "Expand Around Center", ["Amazon"]],
  ["Minimum Window Substring", "Sliding Window", "Hard", "minimum-window-substring", "Sliding Window", ["Amazon", "Google"]],

  ["Trapping Rain Water", "Two Pointers", "Hard", "trapping-rain-water", "Two Pointers / Prefix Max", ["Amazon", "Google"]],
  ["3Sum", "Two Pointers", "Medium", "3sum", "Sorting + Two Pointers", ["Amazon", "Google"]],
  ["Container With Most Water", "Two Pointers", "Medium", "container-with-most-water", "Two Pointers", ["Amazon"]],

  ["Single Number", "Bit Manipulation", "Easy", "single-number", "XOR", ["TCS", "Infosys"]],
  ["Counting Bits", "Bit Manipulation", "Easy", "counting-bits", "Bit DP", ["Google", "Amazon"]],
  ["Reverse Bits", "Bit Manipulation", "Easy", "reverse-bits", "Bit Manipulation", ["Amazon"]],

  ["Pow(x, n)", "Recursion & Math", "Medium", "powx-n", "Binary Exponentiation", ["Amazon"]],
  ["Sqrt(x)", "Recursion & Math", "Easy", "sqrtx", "Binary Search", ["TCS", "Infosys"]],
  ["Palindrome Number", "Recursion & Math", "Easy", "palindrome-number", "Math", ["TCS", "Infosys"]],

  ["Longest Common Prefix", "Strings", "Easy", "longest-common-prefix", "String Traversal", ["TCS", "Infosys", "Wipro"]],
  ["First Unique Character in a String", "Strings", "Easy", "first-unique-character-in-a-string", "Frequency Count", ["TCS", "Infosys"]],
  ["Isomorphic Strings", "Strings", "Easy", "isomorphic-strings", "Hash Map", ["TCS", "Amazon"]],
  ["Ransom Note", "Strings", "Easy", "ransom-note", "Frequency Count", ["TCS", "Infosys"]],
  ["Reverse Words in a String", "Strings", "Medium", "reverse-words-in-a-string", "String Manipulation", ["Amazon"]],

  ["Flood Fill", "Graphs", "Easy", "flood-fill", "DFS / BFS", ["TCS", "Amazon"]],
  ["Maximal Square", "Dynamic Programming", "Medium", "maximal-square", "2D DP", ["Amazon", "Google"]],
  ["Decode Ways", "Dynamic Programming", "Medium", "decode-ways", "1D DP", ["Amazon"]],
  ["Best Time to Buy and Sell Stock II", "Greedy", "Medium", "best-time-to-buy-and-sell-stock-ii", "Greedy", ["Amazon"]],
  ["Sort Colors", "Arrays & Hashing", "Medium", "sort-colors", "Dutch National Flag", ["Amazon", "Google"]],
  ["Find the Duplicate Number", "Arrays & Hashing", "Medium", "find-the-duplicate-number", "Cycle Detection", ["Amazon", "Microsoft"]],
  ["Majority Element", "Arrays & Hashing", "Easy", "majority-element", "Boyer-Moore", ["TCS", "Infosys", "Accenture"]],
  ["Missing Number", "Arrays & Hashing", "Easy", "missing-number", "Math / XOR", ["TCS", "Infosys", "Capgemini"]],

  ["Reverse Linked List", "Linked List", "Easy", "reverse-linked-list", "Pointers", ["TCS", "Infosys", "Amazon"]],
  ["Linked List Cycle", "Linked List", "Easy", "linked-list-cycle", "Fast & Slow Pointers", ["TCS", "Infosys", "Amazon"]],

  ["Maximum Depth of Binary Tree", "Trees", "Easy", "maximum-depth-of-binary-tree", "DFS", ["TCS", "Infosys", "Amazon"]],
  ["Invert Binary Tree", "Trees", "Easy", "invert-binary-tree", "DFS / BFS", ["Amazon", "Google"]],
  ["Validate Binary Search Tree", "Trees", "Medium", "validate-binary-search-tree", "DFS / Bounds", ["Amazon", "Google"]],

  ["Find the Town Judge", "Graphs", "Easy", "find-the-town-judge", "Graph / In-degree", ["Amazon"]],
  ["Gas Station", "Greedy", "Medium", "gas-station", "Greedy", ["Amazon"]],
  ["N-Queens", "Backtracking", "Hard", "n-queens", "Backtracking", ["Amazon", "Google"]],
  ["Word Ladder", "Graphs", "Hard", "word-ladder", "BFS", ["Amazon", "Google"]],
];

// ============================================
// DETAILED QUESTIONS
// ============================================

const detailedQuestions = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    topic: "Array",
    companies: ["Amazon", "Microsoft", "Google"],
    description: "Find two numbers in an array whose sum equals the target.",
    examples: [
      {
        input: "nums = [2, 7, 11, 15], target = 9",
        output: "[0, 1]",
      },
    ],
    approach: "HashMap",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    topic: "Array",
    companies: ["Amazon", "Microsoft", "Google"],
    description:
      "Find the maximum profit possible by buying and selling a stock once.",
    examples: [
      {
        input: "prices = [7, 1, 5, 3, 6, 4]",
        output: "5",
      },
    ],
    approach: "Track minimum price and maximum profit",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    topic: "Stack",
    companies: ["Amazon", "Microsoft", "Google"],
    description:
      "Check whether brackets in a string are correctly matched and nested.",
    examples: [
      {
        input: 's = "()[]{}"',
        output: "true",
      },
    ],
    approach: "Stack",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    topic: "Array",
    companies: ["Amazon", "Microsoft", "Google"],
    description: "Merge all overlapping intervals in an array.",
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
    ],
    approach: "Sorting",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
  },
  {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    topic: "Binary Search",
    companies: ["Amazon", "Microsoft", "Google"],
    description:
      "Find a target in a rotated sorted array in logarithmic time.",
    examples: [
      {
        input: "nums = [4,5,6,7,0,1,2], target = 0",
        output: "4",
      },
    ],
    approach: "Modified Binary Search",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
  },
  {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    topic: "Graph",
    companies: ["Amazon", "Microsoft", "Google"],
    description: "Count the number of connected islands in a grid.",
    examples: [
      {
        input: 'grid = [["1","1","0"],["1","0","0"],["0","0","1"]]',
        output: "2",
      },
    ],
    approach: "DFS or BFS",
    timeComplexity: "O(m * n)",
    spaceComplexity: "O(m * n)",
  },
  {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    topic: "Graph",
    companies: ["Amazon", "Microsoft", "Google"],
    description:
      "Determine whether all courses can be completed given prerequisite relationships.",
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
      },
    ],
    approach: "Topological Sort or DFS",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V + E)",
  },
  {
    id: "lru-cache",
    title: "LRU Cache",
    difficulty: "Medium",
    topic: "Design",
    companies: ["Amazon", "Microsoft", "Google"],
    description:
      "Design a Least Recently Used cache with efficient get and put operations.",
    examples: [
      {
        input: "capacity = 2; put(1,1); put(2,2); get(1)",
        output: "1",
      },
    ],
    approach: "HashMap + Doubly Linked List",
    timeComplexity: "O(1) per operation",
    spaceComplexity: "O(capacity)",
  },
];

// ============================================
// NORMALIZE OLD QUESTIONS
// ============================================

const normalizedLegacyQuestions = legacyQuestions.map(
  ([title, topic, difficulty, id, approach, companies]) => ({
    id,
    title,
    topic,
    difficulty,
    companies,
    description: `Practice ${title} to improve your ${topic} problem-solving skills.`,
    examples: [],
    approach,
    timeComplexity: "Not specified",
    spaceComplexity: "Not specified",
  })
);

// ============================================
// NORMALIZE TOPICS FOR FILTERING
// ============================================

const topicAliases = {
  "Arrays & Hashing": "Array",
  "Stack & Queue": "Stack",
  "Heap & Priority Queue": "Heap",
  "Graphs": "Graph",
  "Strings": "String",
  "Trees": "Tree",
  "Tries": "Trie",
  "Two Pointers": "Two Pointers",
  "Recursion & Math": "Math",
};

function normalizeQuestion(question) {
  const normalizedTopic = topicAliases[question.topic] || question.topic;

  return {
    ...question,
    topic: normalizedTopic,
    companies: question.companies || [],
    description:
      question.description ||
      `Practice ${question.title} to improve your ${normalizedTopic} skills.`,
    examples: question.examples || [],
    approach: question.approach || "Not specified",
    timeComplexity: question.timeComplexity || "Not specified",
    spaceComplexity: question.spaceComplexity || "Not specified",
  };
}

// ============================================
// FINAL QUESTION BANK
// ============================================

const extraQuestions = [
  ...normalizedLegacyQuestions,
  ...detailedQuestions,
]
  .map(normalizeQuestion)
  .filter(
    (question, index, questions) =>
      questions.findIndex((item) => item.id === question.id) === index
  );

export default extraQuestions;
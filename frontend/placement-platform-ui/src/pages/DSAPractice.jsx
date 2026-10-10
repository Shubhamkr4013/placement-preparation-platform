import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  CheckCircle2,
  Circle,
  ExternalLink,
  Code2,
  Trophy,
  Target,
  BookOpen,
  RotateCcw,
  Filter,
  ChevronDown,
  Flame,
  ListChecks,
  Building2,
  Layers3,
  ArrowLeft,
  GraduationCap,
  X,
  Check,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import "./DSAPractice.css";
import * as questionBank from "./dsaQuestionBank.js";

const extraQuestions =
  questionBank.extraQuestions ??
  questionBank.default ??
  [];

const rawQuestions = [
  ["Two Sum", "Arrays & Hashing", "Easy", "two-sum", "Hash Map", ["TCS", "Infosys", "Accenture", "Deloitte", "Amazon"]],
  ["Best Time to Buy and Sell Stock", "Arrays & Hashing", "Easy", "best-time-to-buy-and-sell-stock", "One Pass", ["TCS", "Infosys", "Accenture", "Amazon"]],
  ["Contains Duplicate", "Arrays & Hashing", "Easy", "contains-duplicate", "Hash Set", ["TCS", "Infosys", "Accenture"]],
  ["Product of Array Except Self", "Arrays & Hashing", "Medium", "product-of-array-except-self", "Prefix / Suffix", ["Amazon", "Google", "Deloitte"]],
  ["Maximum Subarray", "Arrays & Hashing", "Medium", "maximum-subarray", "Kadane's Algorithm", ["TCS", "Infosys", "Amazon", "Google"]],
  ["Maximum Product Subarray", "Arrays & Hashing", "Medium", "maximum-product-subarray", "Dynamic Tracking", ["Amazon", "Google"]],
  ["3Sum", "Arrays & Hashing", "Medium", "3sum", "Two Pointers", ["Amazon", "Google", "Deloitte"]],
  ["Move Zeroes", "Arrays & Hashing", "Easy", "move-zeroes", "Two Pointers", ["TCS", "Infosys", "Accenture", "Capgemini"]],
  ["Merge Sorted Array", "Arrays & Hashing", "Easy", "merge-sorted-array", "Two Pointers", ["TCS", "Infosys", "Wipro"]],
  ["Remove Duplicates from Sorted Array", "Arrays & Hashing", "Easy", "remove-duplicates-from-sorted-array", "Two Pointers", ["TCS", "Infosys", "Wipro"]],
  ["Majority Element", "Arrays & Hashing", "Easy", "majority-element", "Boyer-Moore", ["TCS", "Infosys", "Accenture"]],
  ["Missing Number", "Arrays & Hashing", "Easy", "missing-number", "Math / XOR", ["TCS", "Infosys", "Capgemini"]],
  ["Subarray Sum Equals K", "Arrays & Hashing", "Medium", "subarray-sum-equals-k", "Prefix Sum", ["Amazon", "Google"]],
  ["Sort Colors", "Arrays & Hashing", "Medium", "sort-colors", "Dutch National Flag", ["Amazon", "Google"]],
  ["Longest Consecutive Sequence", "Arrays & Hashing", "Medium", "longest-consecutive-sequence", "Hash Set", ["Amazon", "Google"]],
  ["Container With Most Water", "Two Pointers", "Medium", "container-with-most-water", "Two Pointers", ["Amazon", "Google"]],
  ["Trapping Rain Water", "Two Pointers", "Hard", "trapping-rain-water", "Two Pointers", ["Amazon", "Google"]],
  ["Valid Anagram", "Strings", "Easy", "valid-anagram", "Frequency Count", ["TCS", "Infosys", "Accenture", "Capgemini"]],
  ["Valid Palindrome", "Strings", "Easy", "valid-palindrome", "Two Pointers", ["TCS", "Infosys", "Amazon"]],
  ["Longest Common Prefix", "Strings", "Easy", "longest-common-prefix", "String Traversal", ["TCS", "Infosys", "Wipro"]],
  ["First Unique Character in a String", "Strings", "Easy", "first-unique-character-in-a-string", "Frequency Count", ["TCS", "Infosys"]],
  ["Reverse String", "Strings", "Easy", "reverse-string", "Two Pointers", ["TCS", "Infosys", "Accenture"]],
  ["Reverse Words in a String", "Strings", "Medium", "reverse-words-in-a-string", "String Manipulation", ["Amazon", "Deloitte"]],
  ["Longest Substring Without Repeating Characters", "Sliding Window", "Medium", "longest-substring-without-repeating-characters", "Sliding Window", ["Amazon", "Google", "Deloitte"]],
  ["Minimum Window Substring", "Sliding Window", "Hard", "minimum-window-substring", "Sliding Window", ["Amazon", "Google"]],
  ["Group Anagrams", "Strings", "Medium", "group-anagrams", "Hash Map", ["Amazon", "Google"]],
  ["Longest Palindromic Substring", "Strings", "Medium", "longest-palindromic-substring", "Expand Around Center", ["Amazon", "Google"]],
  ["Binary Search", "Binary Search", "Easy", "binary-search", "Binary Search", ["TCS", "Infosys", "Accenture", "Capgemini"]],
  ["Search Insert Position", "Binary Search", "Easy", "search-insert-position", "Binary Search", ["TCS", "Infosys"]],
  ["Find First and Last Position of Element", "Binary Search", "Medium", "find-first-and-last-position-of-element-in-sorted-array", "Boundary Search", ["Amazon", "Google"]],
  ["Search a 2D Matrix", "Binary Search", "Medium", "search-a-2d-matrix", "Binary Search", ["Amazon", "Deloitte"]],
  ["Koko Eating Bananas", "Binary Search", "Medium", "koko-eating-bananas", "Binary Search on Answer", ["Amazon", "Google"]],
  ["Valid Parentheses", "Stack & Queue", "Easy", "valid-parentheses", "Stack", ["TCS", "Infosys", "Accenture", "Amazon"]],
  ["Min Stack", "Stack & Queue", "Medium", "min-stack", "Stack Design", ["Amazon", "Google"]],
  ["Evaluate Reverse Polish Notation", "Stack & Queue", "Medium", "evaluate-reverse-polish-notation", "Stack", ["Amazon", "Google"]],
  ["Daily Temperatures", "Stack & Queue", "Medium", "daily-temperatures", "Monotonic Stack", ["Amazon", "Google"]],
  ["Reverse Linked List", "Linked List", "Easy", "reverse-linked-list", "Pointers", ["TCS", "Infosys", "Accenture", "Amazon"]],
  ["Merge Two Sorted Lists", "Linked List", "Easy", "merge-two-sorted-lists", "Two Pointers", ["TCS", "Infosys", "Amazon"]],
  ["Linked List Cycle", "Linked List", "Easy", "linked-list-cycle", "Fast & Slow Pointers", ["TCS", "Infosys", "Amazon"]],
  ["Middle of the Linked List", "Linked List", "Easy", "middle-of-the-linked-list", "Fast & Slow Pointers", ["TCS", "Infosys"]],
  ["Remove Nth Node From End of List", "Linked List", "Medium", "remove-nth-node-from-end-of-list", "Two Pointers", ["Amazon", "Google"]],
  ["Add Two Numbers", "Linked List", "Medium", "add-two-numbers", "Linked List Traversal", ["Amazon", "Google"]],
  ["Maximum Depth of Binary Tree", "Trees", "Easy", "maximum-depth-of-binary-tree", "DFS", ["TCS", "Infosys", "Amazon"]],
  ["Invert Binary Tree", "Trees", "Easy", "invert-binary-tree", "DFS", ["Amazon", "Google"]],
  ["Same Tree", "Trees", "Easy", "same-tree", "DFS", ["TCS", "Amazon"]],
  ["Binary Tree Level Order Traversal", "Trees", "Medium", "binary-tree-level-order-traversal", "BFS", ["Amazon", "Google"]],
  ["Validate Binary Search Tree", "Trees", "Medium", "validate-binary-search-tree", "DFS / Bounds", ["Amazon", "Google"]],
  ["Lowest Common Ancestor of a BST", "Trees", "Medium", "lowest-common-ancestor-of-a-binary-search-tree", "BST", ["Amazon", "Google"]],
  ["Diameter of Binary Tree", "Trees", "Easy", "diameter-of-binary-tree", "DFS", ["Amazon", "Google"]],
  ["Implement Trie (Prefix Tree)", "Tries", "Medium", "implement-trie-prefix-tree", "Trie", ["Amazon", "Google"]],
  ["Number of Islands", "Graphs", "Medium", "number-of-islands", "DFS / BFS", ["Amazon", "Google"]],
  ["Clone Graph", "Graphs", "Medium", "clone-graph", "DFS / Hash Map", ["Amazon", "Google"]],
  ["Course Schedule", "Graphs", "Medium", "course-schedule", "Topological Sort", ["Amazon", "Google"]],
  ["Rotting Oranges", "Graphs", "Medium", "rotting-oranges", "Multi-source BFS", ["Amazon", "Deloitte"]],
  ["Flood Fill", "Graphs", "Easy", "flood-fill", "DFS / BFS", ["TCS", "Amazon"]],
  ["Climbing Stairs", "Dynamic Programming", "Easy", "climbing-stairs", "1D DP", ["TCS", "Infosys", "Amazon"]],
  ["Min Cost Climbing Stairs", "Dynamic Programming", "Easy", "min-cost-climbing-stairs", "1D DP", ["Amazon"]],
  ["House Robber", "Dynamic Programming", "Medium", "house-robber", "1D DP", ["Amazon", "Google"]],
  ["Coin Change", "Dynamic Programming", "Medium", "coin-change", "Unbounded Knapsack", ["Amazon", "Google"]],
  ["Longest Common Subsequence", "Dynamic Programming", "Medium", "longest-common-subsequence", "2D DP", ["Amazon", "Google"]],
  ["Word Break", "Dynamic Programming", "Medium", "word-break", "DP", ["Amazon", "Google"]],
  ["Unique Paths", "Dynamic Programming", "Medium", "unique-paths", "Grid DP", ["Amazon", "Google"]],
  ["Edit Distance", "Dynamic Programming", "Medium", "edit-distance", "2D DP", ["Amazon", "Google"]],
  ["Subsets", "Backtracking", "Medium", "subsets", "Backtracking", ["Amazon", "Google"]],
  ["Permutations", "Backtracking", "Medium", "permutations", "Backtracking", ["Amazon", "Google"]],
  ["Combination Sum", "Backtracking", "Medium", "combination-sum", "Backtracking", ["Amazon", "Google"]],
  ["Generate Parentheses", "Backtracking", "Medium", "generate-parentheses", "Backtracking", ["Amazon", "Google"]],
  ["Word Search", "Backtracking", "Medium", "word-search", "DFS / Backtracking", ["Amazon", "Google"]],
  ["Merge Intervals", "Intervals", "Medium", "merge-intervals", "Sorting", ["Amazon", "Google", "Deloitte"]],
  ["Insert Interval", "Intervals", "Medium", "insert-interval", "Intervals", ["Amazon", "Google"]],
  ["Meeting Rooms", "Intervals", "Easy", "meeting-rooms", "Sorting", ["Amazon"]],
  ["Kth Largest Element in an Array", "Heap & Priority Queue", "Medium", "kth-largest-element-in-an-array", "Heap / Quickselect", ["Amazon", "Google"]],
  ["Top K Frequent Elements", "Heap & Priority Queue", "Medium", "top-k-frequent-elements", "Heap / Bucket Sort", ["Amazon", "Google"]],
  ["Find Median from Data Stream", "Heap & Priority Queue", "Hard", "find-median-from-data-stream", "Two Heaps", ["Amazon", "Google"]],
  ["Jump Game", "Greedy", "Medium", "jump-game", "Greedy", ["Amazon", "Google"]],
  ["Jump Game II", "Greedy", "Medium", "jump-game-ii", "Greedy", ["Amazon", "Google"]],
  ["Gas Station", "Greedy", "Medium", "gas-station", "Greedy", ["Amazon", "Google"]],
  ["Single Number", "Bit Manipulation", "Easy", "single-number", "XOR", ["TCS", "Infosys", "Amazon"]],
  ["Number of 1 Bits", "Bit Manipulation", "Easy", "number-of-1-bits", "Bit Manipulation", ["Amazon"]],
  ["Fibonacci Number", "Recursion & Math", "Easy", "fibonacci-number", "Recursion / DP", ["TCS", "Infosys", "Accenture"]],
  ["Pow(x, n)", "Recursion & Math", "Medium", "powx-n", "Binary Exponentiation", ["Amazon", "Google"]],
  ["Sqrt(x)", "Recursion & Math", "Easy", "sqrtx", "Binary Search", ["TCS", "Infosys"]],
  ["Palindrome Number", "Recursion & Math", "Easy", "palindrome-number", "Math", ["TCS", "Infosys", "Accenture"]],
  ["LRU Cache", "Stack & Queue", "Medium", "lru-cache", "Hash Map + Doubly Linked List", ["Amazon", "Google"]],
  ["Sort List", "Linked List", "Medium", "sort-list", "Merge Sort", ["Amazon", "Google"]],
  ["Palindrome Linked List", "Linked List", "Easy", "palindrome-linked-list", "Fast & Slow Pointers", ["TCS", "Amazon"]],
  ["Find Peak Element", "Binary Search", "Medium", "find-peak-element", "Binary Search", ["Amazon", "Google"]],
  ["Best Time to Buy and Sell Stock II", "Greedy", "Medium", "best-time-to-buy-and-sell-stock-ii", "Greedy", ["Amazon"]],
  ["Assign Cookies", "Greedy", "Easy", "assign-cookies", "Greedy / Sorting", ["Amazon"]],
  ["Ransom Note", "Strings", "Easy", "ransom-note", "Frequency Count", ["TCS", "Infosys"]],
  ["Isomorphic Strings", "Strings", "Easy", "isomorphic-strings", "Hash Map", ["TCS", "Amazon"]],
  ["Maximum Length of Pair Chain", "Greedy", "Medium", "maximum-length-of-pair-chain", "Greedy / Sorting", ["Amazon"]],
  ["Target Sum", "Dynamic Programming", "Medium", "target-sum", "Knapsack / DP", ["Amazon", "Google"]],
  ["Partition Equal Subset Sum", "Dynamic Programming", "Medium", "partition-equal-subset-sum", "0/1 Knapsack", ["Amazon", "Google"]],
  ["N-Queens", "Backtracking", "Hard", "n-queens", "Backtracking", ["Amazon", "Google"]],
  ["Word Ladder", "Graphs", "Hard", "word-ladder", "BFS", ["Amazon", "Google"]],
  ["Trapping Rain Water", "Two Pointers", "Hard", "trapping-rain-water", "Two Pointers", ["Amazon", "Google"]],
  ["Largest Rectangle in Histogram", "Stack & Queue", "Hard", "largest-rectangle-in-histogram", "Monotonic Stack", ["Amazon", "Google"]],
  ["Median of Two Sorted Arrays", "Binary Search", "Hard", "median-of-two-sorted-arrays", "Binary Search", ["Amazon", "Google"]],
];

// Extra question bank ko safely normalize karo.
// Tuple aur object dono formats support hote hain.
const normalizedExtraQuestions = (
  Array.isArray(extraQuestions) ? extraQuestions : []
)
  .map((item) => {
    if (Array.isArray(item)) {
      const title = item[0] ?? "Untitled question";
      const generatedSlug = String(title)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      return [
        title,
        item[1] ?? "Other",
        item[2] ?? "Easy",
        item[3] ?? generatedSlug,
        item[4] ?? "General",
        Array.isArray(item[5]) ? item[5] : [],
      ];
    }

    if (item && typeof item === "object") {
      const title = item.title ?? item.name ?? "Untitled question";
      const generatedSlug = String(title)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      return [
        title,
        item.topic ?? "Other",
        item.difficulty ?? "Easy",
        item.slug ?? generatedSlug,
        item.pattern ?? "General",
        Array.isArray(item.companies) ? item.companies : [],
      ];
    }

    return null;
  })
  .filter(Boolean);

// Duplicate LeetCode slugs ko add mat karo.
const existingSlugs = new Set(rawQuestions.map((question) => question[3]));

normalizedExtraQuestions.forEach((question) => {
  const slug = question[3];

  if (slug && !existingSlugs.has(slug)) {
    rawQuestions.push(question);
    existingSlugs.add(slug);
  }
});

// Har question ka consistent object structure.
const QUESTIONS = rawQuestions.map((q, index) => ({
  id: index + 1,
  title: String(q?.[0] ?? "Untitled question"),
  topic: String(q?.[1] ?? "Other"),
  difficulty: String(q?.[2] ?? "Easy"),
  slug: String(q?.[3] ?? `question-${index + 1}`),
  pattern: String(q?.[4] ?? "General"),
  companies: Array.isArray(q?.[5]) ? q[5].filter(Boolean) : [],
}));

const TOPICS = [...new Set(QUESTIONS.map((q) => q.topic))];

const COMPANIES = [
  "TCS",
  "Infosys",
  "Accenture",
  "Deloitte",
  "Capgemini",
  "Cognizant",
  "HCLTech",
  "Wipro",
  "Amazon",
  "Google",
];

const LEVELS = ["All Levels", "Easy", "Medium", "Hard"];

const MODES = [
  {
    id: "topics",
    label: "Topic-wise",
    icon: Layers3,
    description: "Build skills one topic at a time",
  },
  {
    id: "companies",
    label: "Company-wise",
    icon: Building2,
    description: "Practice for your target company",
  },
  {
    id: "all",
    label: "All Questions",
    icon: ListChecks,
    description: "Browse the full question library",
  },
];

export default function DSAPractice() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("topics");
  const [selectedTopic, setSelectedTopic] = useState("Arrays & Hashing");
  const [selectedCompany, setSelectedCompany] = useState("TCS");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All Levels");
  const [status, setStatus] = useState("All Questions");
  const [sort, setSort] = useState("default");

  const [solved, setSolved] = useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("placement-dsa-solved") || "[]"
      );

      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  const saveSolved = (next) => {
  setSolved(next);

  try {
    localStorage.setItem(
      "placement-dsa-solved",
      JSON.stringify(next)
    );

    // Dashboard ko notify karo
    window.dispatchEvent(
      new CustomEvent("dsa-progress-updated", {
        detail: { solved: next },
      })
    );
  } catch (error) {
    console.error("Could not save DSA progress:", error);
  }
};

  const solvedCount = QUESTIONS.filter((q) =>
    solved.includes(q.id)
  ).length;

  const percent = QUESTIONS.length
    ? Math.round((solvedCount / QUESTIONS.length) * 100)
    : 0;

  const modeQuestions = useMemo(() => {
    if (mode === "topics") {
      return QUESTIONS.filter((q) => q.topic === selectedTopic);
    }

    if (mode === "companies") {
      return QUESTIONS.filter((q) =>
        (q.companies ?? []).includes(selectedCompany)
      );
    }

    return QUESTIONS;
  }, [mode, selectedTopic, selectedCompany]);

  const filtered = useMemo(() => {
    const term = search.trim().toLocaleLowerCase();
    const solvedIds = new Set(solved);

    let list = modeQuestions.filter((q) => {
      const companies = Array.isArray(q.companies)
        ? q.companies
        : [];

      const searchableText = [
        q.title,
        q.topic,
        q.pattern,
        ...companies,
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase();

      const matchSearch =
        term === "" || searchableText.includes(term);

      const matchDifficulty =
        difficulty === "All Levels" ||
        q.difficulty === difficulty;

      const isSolved = solvedIds.has(q.id);

      const matchStatus =
        status === "All Questions" ||
        (status === "Solved" && isSolved) ||
        (status === "Unsolved" && !isSolved);

      return matchSearch && matchDifficulty && matchStatus;
    });

    if (sort === "difficulty") {
      const order = {
        Easy: 1,
        Medium: 2,
        Hard: 3,
      };

      list = [...list].sort(
        (a, b) =>
          (order[a.difficulty] ?? 99) -
          (order[b.difficulty] ?? 99)
      );
    } else if (sort === "title") {
      list = [...list].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return list;
  }, [modeQuestions, search, difficulty, status, sort, solved]);

  const resetFilters = () => {
    setSearch("");
    setDifficulty("All Levels");
    setStatus("All Questions");
    setSort("default");
  };

  const openMode = (nextMode) => {
    setMode(nextMode);
    setPickerOpen(false);
    resetFilters();
  };

  const chooseTopic = (topic) => {
    setSelectedTopic(topic);
    setPickerOpen(false);
    resetFilters();
  };

  const chooseCompany = (company) => {
    setSelectedCompany(company);
    setPickerOpen(false);
    resetFilters();
  };

  const toggleSolved = (id) => {
    const next = solved.includes(id)
      ? solved.filter((x) => x !== id)
      : [...solved, id];

    saveSolved(next);
  };

  const resetProgress = () => {
    if (
      window.confirm(
        "Reset all DSA progress saved in this browser?"
      )
    ) {
      saveSolved([]);
    }
  };

  const activeSelection =
    mode === "topics" ? selectedTopic : selectedCompany;

  const activeTitle =
    mode === "topics"
      ? selectedTopic
      : mode === "companies"
        ? `${selectedCompany} practice set`
        : "All Questions";

  const activeDescription =
    mode === "topics"
      ? "Focused practice for this topic. Change topic any time."
      : mode === "companies"
        ? "Curated practice mappings for interview preparation; not guaranteed official past questions."
        : "Search, filter and track your progress across the complete library.";

  const activeTopicQuestions = QUESTIONS.filter(
    (q) => q.topic === selectedTopic
  );

  const activeCompanyQuestions = QUESTIONS.filter((q) =>
    (q.companies ?? []).includes(selectedCompany)
  );

  const selectionCount =
    mode === "topics"
      ? activeTopicQuestions.length
      : activeCompanyQuestions.length;

  const selectionDone =
    mode === "topics"
      ? activeTopicQuestions.filter((q) =>
          solved.includes(q.id)
        ).length
      : activeCompanyQuestions.filter((q) =>
          solved.includes(q.id)
        ).length;

  return (
    <main className="dsa-page">
      <header className="dsa-topbar">
        <button
          className="dsa-brand"
          onClick={() => navigate("/dashboard")}
          aria-label="Go to dashboard"
        >
          <span className="dsa-brand-icon">
            <Code2 size={21} />
          </span>

          <span>
            Placement
            <span className="dsa-brand-accent">Prep</span>
          </span>
        </button>

        <div className="dsa-top-actions">
          <span className="dsa-top-label">
            <BookOpen size={16} /> DSA Practice
          </span>

          <button
            className="dsa-back-btn"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft size={14} /> Dashboard
          </button>
        </div>
      </header>

      <div className="dsa-container">
        <section className="dsa-hero">
          <div className="dsa-hero-content">
            <span className="dsa-eyebrow">
              <Flame size={14} /> YOUR INTERVIEW PREP WORKSPACE
            </span>

            <h1>
              Practice smarter.
              <br />
              <span>Get interview-ready.</span>
            </h1>

            <p>
              Master DSA patterns step by step, build consistency,
              and track your progress as you prepare for placements.
            </p>

            <div className="dsa-hero-pills">
              <span>
                <CheckCircle2 size={15} /> Progress tracking
              </span>
              <span>
                <Target size={15} /> Pattern-based practice
              </span>
            </div>
          </div>

          <div className="dsa-hero-art" aria-hidden="true">
            <div className="dsa-art-orbit orbit-one" />
            <div className="dsa-art-orbit orbit-two" />
            <Code2 size={68} strokeWidth={1.4} />
            <span className="dsa-art-spark">
              <Sparkles size={20} />
            </span>
          </div>
        </section>

        <section className="dsa-stats">
          <article className="dsa-stat-card">
            <div className="dsa-stat-icon purple">
              <BookOpen size={19} />
            </div>
            <span>Total Questions</span>
            <strong>{QUESTIONS.length}</strong>
            <small>Across {TOPICS.length} topics</small>
          </article>

          <article className="dsa-stat-card">
            <div className="dsa-stat-icon green">
              <CheckCircle2 size={19} />
            </div>
            <span>Questions Solved</span>
            <strong>{solvedCount}</strong>
            <small>{QUESTIONS.length - solvedCount} left to practice</small>
          </article>

          <article className="dsa-stat-card">
            <div className="dsa-stat-icon orange">
              <Trophy size={19} />
            </div>
            <span>Overall Progress</span>
            <strong>{percent}%</strong>
            <div className="dsa-mini-progress">
              <span style={{ width: `${percent}%` }} />
            </div>
          </article>

          <article className="dsa-stat-card">
            <div className="dsa-stat-icon blue">
              <GraduationCap size={19} />
            </div>
            <span>Practice Modes</span>
            <strong>03</strong>
            <small>Topic · Company · All</small>
          </article>
        </section>

        <section className="dsa-mode-section">
          <div className="dsa-section-heading">
            <div>
              <h2>Choose your practice mode</h2>
              <p>
                Start with a focused path or explore the entire question bank.
              </p>
            </div>
          </div>

          <div className="dsa-mode-grid">
            {MODES.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  className={`dsa-mode-card ${
                    mode === item.id ? "active" : ""
                  }`}
                  onClick={() => openMode(item.id)}
                  aria-pressed={mode === item.id}
                >
                  <span className="dsa-mode-icon">
                    <Icon size={21} />
                  </span>

                  <span className="dsa-mode-copy">
                    <strong>{item.label}</strong>
                    <small>{item.description}</small>
                  </span>

                  <span className="dsa-mode-chevron">
                    {mode === item.id ? <Check size={17} /> : "→"}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {mode !== "all" && (
          <section className="dsa-selection-section">
            <div className="dsa-section-heading compact-heading">
              <div>
                <h2>
                  {mode === "topics"
                    ? "Your topic"
                    : "Your target company"}
                </h2>
                <p>Selection menu stays compact until you open it.</p>
              </div>

              <span className="dsa-selection-progress">
                {selectionDone}/{selectionCount} solved
              </span>
            </div>

            <div
              className={`dsa-picker ${
                pickerOpen ? "is-open" : ""
              }`}
            >
              <button
                className="dsa-picker-trigger"
                onClick={() => setPickerOpen((v) => !v)}
                aria-expanded={pickerOpen}
                aria-controls="dsa-picker-options"
              >
                <span
                  className={`dsa-picker-icon ${
                    mode === "topics"
                      ? "topic-picker-icon"
                      : "company-picker-icon"
                  }`}
                >
                  {mode === "topics" ? (
                    <Layers3 size={20} />
                  ) : (
                    <Building2 size={20} />
                  )}
                </span>

                <span className="dsa-picker-current">
                  <small>
                    {mode === "topics"
                      ? "SELECTED TOPIC"
                      : "SELECTED COMPANY"}
                  </small>
                  <strong>{activeSelection}</strong>
                  <span>
                    {selectionCount} questions · {selectionDone} completed
                  </span>
                </span>

                <span className="dsa-picker-change">
                  {pickerOpen ? "Close" : "Change"}
                  <ChevronDown size={17} />
                </span>
              </button>

              {pickerOpen && (
                <div
                  className="dsa-picker-popover"
                  id="dsa-picker-options"
                >
                  <div className="dsa-picker-popover-head">
                    <div>
                      <strong>
                        {mode === "topics"
                          ? "Choose a topic"
                          : "Choose a company"}
                      </strong>
                      <small>
                        {mode === "topics"
                          ? `${TOPICS.length} learning topics available`
                          : `${COMPANIES.length} company practice sets`}
                      </small>
                    </div>

                    <button
                      onClick={() => setPickerOpen(false)}
                      aria-label="Close selection"
                    >
                      <X size={17} />
                    </button>
                  </div>

                  {mode === "topics" ? (
                    <div className="dsa-picker-options topic-options">
                      {TOPICS.map((topic, i) => {
                        const qs = QUESTIONS.filter(
                          (q) => q.topic === topic
                        );

                        const done = qs.filter((q) =>
                          solved.includes(q.id)
                        ).length;

                        return (
                          <button
                            key={topic}
                            className={`dsa-picker-option ${
                              selectedTopic === topic ? "selected" : ""
                            }`}
                            onClick={() => chooseTopic(topic)}
                          >
                            <span
                              className={`dsa-option-index tone-${i % 5}`}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>

                            <span className="dsa-option-copy">
                              <strong>{topic}</strong>
                              <small>
                                {qs.length} questions · {done} solved
                              </small>
                            </span>

                            {selectedTopic === topic && (
                              <CheckCircle2 size={17} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="dsa-picker-options company-options">
                      {COMPANIES.map((company, i) => {
                        const qs = QUESTIONS.filter((q) =>
                          (q.companies ?? []).includes(company)
                        );

                        const done = qs.filter((q) =>
                          solved.includes(q.id)
                        ).length;

                        return (
                          <button
                            key={company}
                            className={`dsa-picker-option ${
                              selectedCompany === company ? "selected" : ""
                            }`}
                            onClick={() => chooseCompany(company)}
                          >
                            <span
                              className={`dsa-option-index tone-${i % 5}`}
                            >
                              <Building2 size={16} />
                            </span>

                            <span className="dsa-option-copy">
                              <strong>{company}</strong>
                              <small>
                                {qs.length} mapped practice questions · {done} solved
                              </small>
                            </span>

                            {selectedCompany === company && (
                              <CheckCircle2 size={17} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )}

        <section className="dsa-library-section">
          <div className="dsa-section-heading dsa-library-heading">
            <div>
              <span className="dsa-kicker">PRACTICE LIBRARY</span>
              <h2>{activeTitle}</h2>
              <p>{activeDescription}</p>
            </div>

            <button
              className="dsa-reset-progress"
              onClick={resetProgress}
            >
              <RotateCcw size={14} /> Reset progress
            </button>
          </div>

          <section className="dsa-filter-panel">
            <div className="dsa-search-wrap">
              <Search size={18} />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions, topics, patterns or companies..."
                aria-label="Search questions"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="dsa-filters">
              <label className="dsa-select-wrap">
                <Filter size={14} />
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  {LEVELS.map((level) => (
                    <option key={level}>{level}</option>
                  ))}
                </select>
                <ChevronDown size={14} />
              </label>

              <label className="dsa-select-wrap">
                <CheckCircle2 size={14} />
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>All Questions</option>
                  <option>Unsolved</option>
                  <option>Solved</option>
                </select>
                <ChevronDown size={14} />
              </label>

              <label className="dsa-select-wrap">
                <SlidersHorizontal size={14} />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="default">Default order</option>
                  <option value="difficulty">Easy to hard</option>
                  <option value="title">Alphabetical</option>
                </select>
                <ChevronDown size={14} />
              </label>
            </div>

            <div className="dsa-filter-footer">
              <span>
                Showing <strong>{filtered.length}</strong> of{" "}
                {modeQuestions.length} questions
              </span>
              <button onClick={resetFilters}>Clear filters</button>
            </div>
          </section>

          <section className="dsa-table-card">
            <div className="dsa-table-header">
              <div>
                <span className="dsa-table-title">
                  <ListChecks size={19} /> Practice questions
                </span>
                <span className="dsa-table-subtitle">
                  Your solved status is saved in this browser
                </span>
              </div>

              <span className="dsa-count-pill">
                {filtered.length} results
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="dsa-empty">
                <Search size={34} />
                <h3>No questions found</h3>
                <p>Try a different search or clear the filters.</p>
                <button onClick={resetFilters}>Clear filters</button>
              </div>
            ) : (
              <div className="dsa-question-list">
                {filtered.map((q, index) => {
                  const isSolved = solved.includes(q.id);
                  const companies = Array.isArray(q.companies)
                    ? q.companies
                    : [];

                  return (
                    <article
                      className={`dsa-question-row ${
                        isSolved ? "is-solved" : ""
                      }`}
                      key={q.id}
                    >
                      <button
                        className={`dsa-solve-toggle ${
                          isSolved ? "checked" : ""
                        }`}
                        onClick={() => toggleSolved(q.id)}
                        title={isSolved ? "Mark unsolved" : "Mark solved"}
                        aria-label={`${isSolved ? "Mark unsolved" : "Mark solved"}: ${q.title}`}
                      >
                        {isSolved ? (
                          <CheckCircle2 size={21} />
                        ) : (
                          <Circle size={21} />
                        )}
                      </button>

                      <div className="dsa-question-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="dsa-question-main">
                        <a
                          className="dsa-question-name"
                          href={`https://leetcode.com/problems/${q.slug}/`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {q.title}
                          <ExternalLink size={12} />
                        </a>

                        <div className="dsa-question-meta">
                          <span>{q.topic}</span>
                          <span className="dsa-pattern">{q.pattern}</span>

                          {mode === "all" && (
                            <span>{companies.slice(0, 3).join(" · ")}</span>
                          )}
                        </div>
                      </div>

                      <span
                        className={`dsa-difficulty ${
                          (q.difficulty ?? "Easy").toLowerCase()
                        }`}
                      >
                        {q.difficulty}
                      </span>

                      <a
                        className="dsa-solve-btn"
                        href={`https://leetcode.com/problems/${q.slug}/`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Solve <ExternalLink size={12} />
                      </a>
                    </article>
                  );
                })}
              </div>
            )}

            <div className="dsa-list-footer">
              <span>
                <BookOpen size={14} /> Try solving before checking hints or solutions.
              </span>
              <span>
                {filtered.filter((q) => solved.includes(q.id)).length} /{" "}
                {filtered.length} completed in this view
              </span>
            </div>
          </section>
        </section>

        <section className="dsa-bottom-tip">
          <div className="dsa-tip-icon">
            <Trophy size={21} />
          </div>

          <div>
            <h3>Small daily progress adds up.</h3>
            <p>
              Start with Easy questions, identify the underlying pattern,
              then move to Medium and Hard. Practice explaining your approach
              and time and space complexity as you would in an interview.
            </p>
          </div>
        </section>

        <footer className="dsa-footer">
          PlacementPrep · DSA Practice · Keep learning, keep solving.
        </footer>
      </div>
    </main>
  );
}
import { useEffect, useMemo, useState } from 'react';
import '../styles/MockTests.css';

const TESTS = [
  {
    id: 'tcs-aptitude', company: 'TCS', category: 'Aptitude', title: 'TCS Aptitude Practice', level: 'Easy–Medium', duration: 10,
    description: 'Quantitative aptitude, percentages, averages and basic reasoning.',
    questions: [
      { q: 'A number is increased by 20% and then decreased by 20%. What is the net change?', options: ['No change', '4% decrease', '4% increase', '2% decrease'], answer: 1, explanation: 'Take 100 as the starting value: 100 → 120 → 96. The net change is a 4% decrease.' },
      { q: 'The average of 10, 20, 30 and 40 is:', options: ['20', '25', '30', '35'], answer: 1, explanation: 'Average = (10 + 20 + 30 + 40) / 4 = 25.' },
      { q: 'A train travels 120 km in 2 hours. Its average speed is:', options: ['40 km/h', '50 km/h', '60 km/h', '80 km/h'], answer: 2, explanation: 'Speed = distance / time = 120 / 2 = 60 km/h.' },
      { q: 'Find the next number: 2, 6, 12, 20, 30, __', options: ['36', '40', '42', '44'], answer: 2, explanation: 'The differences are 4, 6, 8, 10, so the next difference is 12. Answer = 42.' },
      { q: 'If 5 workers complete a task in 12 days, how many days will 10 workers take at the same rate?', options: ['3 days', '6 days', '10 days', '24 days'], answer: 1, explanation: 'Total work = 5 × 12 = 60 worker-days. 60 / 10 = 6 days.' },
    ],
  },
  {
    id: 'infosys-java', company: 'Infosys', category: 'Java', title: 'Java Fundamentals', level: 'Easy–Medium', duration: 10,
    description: 'Core Java, OOP, strings and collections fundamentals.',
    questions: [
      { q: 'Which keyword prevents a class from being inherited in Java?', options: ['static', 'private', 'final', 'abstract'], answer: 2, explanation: 'A final class cannot be extended by another class.' },
      { q: 'Which collection does not allow duplicate elements?', options: ['ArrayList', 'LinkedList', 'HashSet', 'Vector'], answer: 2, explanation: 'Set implementations such as HashSet store unique elements.' },
      { q: 'Which method is the usual entry point of a Java application?', options: ['start()', 'main()', 'run()', 'init()'], answer: 1, explanation: 'The standard entry point is public static void main(String[] args).' },
      { q: 'Which concept allows the same method name with different parameter lists?', options: ['Overriding', 'Overloading', 'Encapsulation', 'Inheritance'], answer: 1, explanation: 'Method overloading uses the same name with different parameter lists.' },
      { q: 'Which of these is immutable in Java?', options: ['String', 'StringBuilder', 'ArrayList', 'HashMap'], answer: 0, explanation: 'String objects are immutable; modifications create a new String.' },
    ],
  },
  {
    id: 'accenture-sql', company: 'Accenture', category: 'SQL & DBMS', title: 'SQL and DBMS Basics', level: 'Easy', duration: 8,
    description: 'Queries, keys, joins and database concepts.',
    questions: [
      { q: 'Which SQL command retrieves data from a table?', options: ['GET', 'FETCH TABLE', 'SELECT', 'OPEN'], answer: 2, explanation: 'SELECT retrieves rows from one or more tables.' },
      { q: 'Which key uniquely identifies each row in a table?', options: ['Foreign key', 'Primary key', 'Candidate value', 'Duplicate key'], answer: 1, explanation: 'A primary key uniquely identifies each row and cannot contain NULL values.' },
      { q: 'Which clause filters grouped records?', options: ['WHERE', 'ORDER BY', 'HAVING', 'DISTINCT'], answer: 2, explanation: 'HAVING filters groups after GROUP BY; WHERE filters rows before grouping.' },
      { q: 'What does an INNER JOIN return?', options: ['All rows from the left table', 'Only matching rows from both tables', 'All rows from both tables', 'Only unmatched rows'], answer: 1, explanation: 'INNER JOIN returns rows for which the join condition matches in both tables.' },
    ],
  },
  {
    id: 'deloitte-dsa', company: 'Deloitte', category: 'DSA', title: 'DSA Fundamentals', level: 'Medium', duration: 10,
    description: 'Complexity, arrays, searching and data structures.',
    questions: [
      { q: 'What is the average time complexity of binary search on a sorted array?', options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], answer: 1, explanation: 'Binary search halves the remaining search space on each step, giving O(log n).' },
      { q: 'Which data structure follows FIFO?', options: ['Stack', 'Queue', 'Tree', 'Graph'], answer: 1, explanation: 'A queue follows First In, First Out (FIFO).' },
      { q: 'What is the worst-case time complexity of linear search?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], answer: 2, explanation: 'In the worst case, every element must be checked.' },
      { q: 'Which data structure is commonly used to manage function calls?', options: ['Queue', 'Stack', 'Heap', 'Graph'], answer: 1, explanation: 'Function calls and local execution contexts are managed using a call stack.' },
      { q: 'Which sorting algorithm is generally stable in its standard implementation?', options: ['Selection sort', 'Heap sort', 'Merge sort', 'Quick sort'], answer: 2, explanation: 'Merge sort is stable when equal elements from the left half are taken first during merging.' },
    ],
  },
  {
    id: 'hcl-reasoning', company: 'HCLTech', category: 'Reasoning', title: 'Logical Reasoning', level: 'Easy–Medium', duration: 8,
    description: 'Number patterns, directions and logical deductions.',
    questions: [
      { q: 'Choose the odd one out.', options: ['Triangle', 'Square', 'Circle', 'Rectangle'], answer: 2, explanation: 'Circle has no straight sides or corners; the others are polygons.' },
      { q: 'If all roses are flowers and some flowers fade quickly, which statement must be true?', options: ['All roses fade quickly', 'Some roses fade quickly', 'All roses are flowers', 'No flowers are roses'], answer: 2, explanation: 'The first premise directly establishes that all roses are flowers.' },
      { q: 'Complete the series: 3, 9, 27, 81, __', options: ['162', '189', '243', '324'], answer: 2, explanation: 'Each term is multiplied by 3. 81 × 3 = 243.' },
      { q: 'A person faces north, turns right, then turns right again. Which direction are they facing?', options: ['North', 'South', 'East', 'West'], answer: 1, explanation: 'North → East → South.' },
    ],
  },
];

const COMPANIES = ['All Companies', ...new Set(TESTS.map((test) => test.company))];
const CATEGORIES = ['All Categories', ...new Set(TESTS.map((test) => test.category))];
const formatTime = (seconds) => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

export default function MockTests() {
  const [company, setCompany] = useState('All Companies');
  const [category, setCategory] = useState('All Categories');
  const [search, setSearch] = useState('');
  const [activeTest, setActiveTest] = useState(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [review, setReview] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [showSubmit, setShowSubmit] = useState(false);

  const filteredTests = useMemo(() => TESTS.filter((test) =>
    (company === 'All Companies' || test.company === company) &&
    (category === 'All Categories' || test.category === category) &&
    `${test.title} ${test.company} ${test.category}`.toLowerCase().includes(search.toLowerCase())
  ), [company, category, search]);

  useEffect(() => {
    if (!activeTest || result) return undefined;
    const timer = setInterval(() => setSecondsLeft((remaining) => {
      if (remaining <= 1) {
        clearInterval(timer);
        return 0;
      }
      return remaining - 1;
    }), 1000);
    return () => clearInterval(timer);
  }, [activeTest, result]);

  useEffect(() => {
    if (activeTest && !result && secondsLeft === 0) finishTest();
    // finishTest is intentionally called only when the timer reaches zero.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft, activeTest, result]);

  function startTest(test) {
    setActiveTest(test);
    setCurrent(0);
    setAnswers({});
    setReview([]);
    setResult(null);
    setShowSubmit(false);
    setSecondsLeft(test.duration * 60);
  }

  function finishTest() {
    if (!activeTest || result) return;
    const correct = activeTest.questions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0);
    const attempted = Object.keys(answers).length;
    const score = Math.round((correct / activeTest.questions.length) * 100);
    const outcome = { correct, attempted, total: activeTest.questions.length, score, test: activeTest, answers: { ...answers }, completedAt: new Date().toLocaleString() };
    setResult(outcome);
    setHistory((old) => [outcome, ...old].slice(0, 8));
    setShowSubmit(false);
  }

  if (result) {
    return <main className="mock-page"><section className="mock-result-panel">
      <button className="mock-back-link" onClick={() => { setActiveTest(null); setResult(null); }}>← Back to mock tests</button>
      <div className="mock-result-head"><span className="mock-eyebrow">TEST COMPLETED</span><h1>{result.test.title}</h1><p>Your practice result is ready. Review every answer and explanation below.</p></div>
      <div className="mock-score-grid"><div className="mock-score-card mock-score-main"><span>Score</span><strong>{result.score}%</strong><small>{result.correct} correct out of {result.total}</small></div><div className="mock-score-card"><span>Attempted</span><strong>{result.attempted}/{result.total}</strong><small>Questions answered</small></div><div className="mock-score-card"><span>Incorrect</span><strong>{result.attempted - result.correct}</strong><small>Includes unanswered as separate</small></div></div>
      <h2 className="mock-section-title">Answer review</h2>
      <div className="mock-review-list">{result.test.questions.map((question, index) => { const selected = result.answers[index]; const isCorrect = selected === question.answer; return <article className="mock-review-item" key={`${result.test.id}-${index}`}><div className="mock-review-top"><span>Question {index + 1}</span><b className={isCorrect ? 'is-correct' : 'is-wrong'}>{selected === undefined ? 'Not answered' : isCorrect ? 'Correct' : 'Incorrect'}</b></div><h3>{question.q}</h3><p className="mock-your-answer">Your answer: {selected === undefined ? 'Not answered' : question.options[selected]}</p><p className="mock-correct-answer">Correct answer: {question.options[question.answer]}</p><p className="mock-explanation">{question.explanation}</p></article>; })}</div>
      <button className="mock-primary-btn" onClick={() => { setActiveTest(null); setResult(null); }}>Explore more tests</button>
    </section></main>;
  }

  if (activeTest) {
    const question = activeTest.questions[current];
    const answeredCount = Object.keys(answers).length;
    return <main className="mock-page"><section className="mock-test-shell">
      <header className="mock-test-header"><div><span className="mock-eyebrow">{activeTest.company} · {activeTest.category}</span><h1>{activeTest.title}</h1><p>Choose one option for each question. You can revisit questions before submitting.</p></div><div className={`mock-timer ${secondsLeft <= 60 ? 'mock-timer-low' : ''}`}><span>TIME LEFT</span><strong>{formatTime(secondsLeft)}</strong></div></header>
      <div className="mock-progress-line"><span style={{ width: `${((current + 1) / activeTest.questions.length) * 100}%` }} /></div>
      <div className="mock-test-layout"><section className="mock-question-card"><div className="mock-question-meta"><span>QUESTION {current + 1} OF {activeTest.questions.length}</span><span>{answeredCount} answered</span></div><h2>{question.q}</h2><div className="mock-options">{question.options.map((option, index) => <button key={option} className={`mock-option ${answers[current] === index ? 'selected' : ''}`} onClick={() => setAnswers((old) => ({ ...old, [current]: index }))}><span className="mock-option-letter">{String.fromCharCode(65 + index)}</span><span>{option}</span>{answers[current] === index && <span className="mock-option-check">✓</span>}</button>)}</div>
      <div className="mock-question-actions"><button className="mock-secondary-btn" onClick={() => setReview((old) => old.includes(current) ? old.filter((n) => n !== current) : [...old, current])}>{review.includes(current) ? '★ Marked for review' : '☆ Mark for review'}</button><button className="mock-clear-btn" onClick={() => setAnswers((old) => { const copy = { ...old }; delete copy[current]; return copy; })}>Clear answer</button></div>
      <div className="mock-test-nav"><button className="mock-secondary-btn" disabled={current === 0} onClick={() => setCurrent((n) => n - 1)}>← Previous</button>{current < activeTest.questions.length - 1 ? <button className="mock-primary-btn" onClick={() => setCurrent((n) => n + 1)}>Save & Next →</button> : <button className="mock-primary-btn" onClick={() => setShowSubmit(true)}>Submit test</button>}</div></section>
      <aside className="mock-question-palette"><h3>Question palette</h3><p>Tap a number to navigate.</p><div className="mock-palette-grid">{activeTest.questions.map((item, index) => <button key={item.q} className={`${current === index ? 'current' : ''} ${answers[index] !== undefined ? 'answered' : ''} ${review.includes(index) ? 'marked' : ''}`} onClick={() => setCurrent(index)}>{index + 1}</button>)}</div><div className="mock-palette-legend"><span><i className="legend-answered" /> Answered</span><span><i className="legend-marked" /> Review</span><span><i className="legend-empty" /> Unanswered</span></div><div className="mock-palette-summary"><span>Answered</span><strong>{answeredCount}/{activeTest.questions.length}</strong></div><button className="mock-submit-wide" onClick={() => setShowSubmit(true)}>Submit test</button></aside></div>
      {showSubmit && <div className="mock-modal-backdrop" role="presentation"><div className="mock-submit-modal" role="dialog" aria-modal="true" aria-labelledby="mock-submit-title"><h2 id="mock-submit-title">Submit this test?</h2><p>You have answered {answeredCount} of {activeTest.questions.length} questions. {activeTest.questions.length - answeredCount > 0 ? `${activeTest.questions.length - answeredCount} question(s) are unanswered.` : 'All questions have an answer.'}</p><div className="mock-modal-actions"><button className="mock-secondary-btn" onClick={() => setShowSubmit(false)}>Continue test</button><button className="mock-primary-btn" onClick={finishTest}>Confirm submit</button></div></div></div>}
    </section></main>;
  }

  return <main className="mock-page"><section className="mock-hero"><div className="mock-hero-copy"><span className="mock-eyebrow">PLACEMENT PREPARATION · MOCK TESTS</span><h1>Practice like it’s<br /><em>the real interview.</em></h1><p>Build confidence with timed company-wise tests, instant scoring and clear explanations for every answer.</p><div className="mock-hero-stats"><div><strong>{TESTS.length}</strong><span>Practice tests</span></div><div><strong>{TESTS.reduce((sum, test) => sum + test.questions.length, 0)}</strong><span>Sample questions</span></div><div><strong>{COMPANIES.length - 1}</strong><span>Companies</span></div></div></div><div className="mock-hero-visual"><div className="mock-visual-orbit orbit-one"/><div className="mock-visual-orbit orbit-two"/><div className="mock-visual-card"><span className="mock-visual-icon">✓</span><span className="mock-visual-label">YOUR NEXT OFFER</span><strong>Prepare.<br />Practice.<br /><em>Perform.</em></strong><div className="mock-visual-bars"><i/><i/><i/><i/><i/><i/><i/></div></div><span className="mock-float-tag tag-top">⌁ Timed tests</span><span className="mock-float-tag tag-bottom">✦ Instant results</span></div></section>
    <section className="mock-library"><div className="mock-library-heading"><div><span className="mock-eyebrow">TEST LIBRARY</span><h2>Choose your practice round</h2><p>Start with a focused topic or prepare for a target company.</p></div><div className="mock-search-wrap"><span>⌕</span><input aria-label="Search tests" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search tests..." /></div></div>
      <div className="mock-filter-row"><div className="mock-filter-group"><label htmlFor="mock-company">Company</label><select id="mock-company" value={company} onChange={(event) => setCompany(event.target.value)}>{COMPANIES.map((item) => <option key={item}>{item}</option>)}</select></div><div className="mock-filter-group"><label htmlFor="mock-category">Category</label><select id="mock-category" value={category} onChange={(event) => setCategory(event.target.value)}>{CATEGORIES.map((item) => <option key={item}>{item}</option>)}</select></div><span className="mock-result-count">{filteredTests.length} tests available</span></div>
      <div className="mock-test-grid">{filteredTests.map((test, index) => <article className="mock-test-card" key={test.id}><div className="mock-card-top"><span className={`mock-company-mark mark-${test.company.toLowerCase().replace(/[^a-z]/g, '')}`}>{test.company === 'HCLTech' ? 'HCL' : test.company.slice(0, 3).toUpperCase()}</span><span className="mock-level-pill">{test.level}</span></div><span className="mock-card-category">{test.category}</span><h3>{test.title}</h3><p>{test.description}</p><div className="mock-card-meta"><span>◷ {test.duration} min</span><span>▤ {test.questions.length} questions</span></div><button className="mock-primary-btn mock-start-btn" onClick={() => startTest(test)}>Start practice <span>→</span></button></article>)}</div>
      {filteredTests.length === 0 && <div className="mock-empty-state"><span>⌕</span><h3>No tests found</h3><p>Try another company, category or search term.</p><button className="mock-secondary-btn" onClick={() => { setCompany('All Companies'); setCategory('All Categories'); setSearch(''); }}>Clear filters</button></div>}
    </section>
    {history.length > 0 && <section className="mock-history"><div className="mock-library-heading"><div><span className="mock-eyebrow">YOUR ACTIVITY</span><h2>Recent attempts</h2></div></div><div className="mock-history-list">{history.map((item, index) => <div className="mock-history-row" key={`${item.test.id}-${item.completedAt}-${index}`}><div><strong>{item.test.title}</strong><span>{item.completedAt}</span></div><b>{item.score}%</b><span>{item.correct}/{item.total} correct</span></div>)}</div></section>}
    <p className="mock-disclaimer">Practice content for learning purposes. These are sample questions, not official company papers or guaranteed interview questions.</p>
  </main>;
}

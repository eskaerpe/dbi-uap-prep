export interface ModuleConfig {
  slug: string
  title: string
  description: string
  tags: string[]
  features?: {
    quiz?: boolean
    flashcards?: boolean
  }
  flashcards?: { front: string; back: string }[]
  quiz?: { question: string; options: string[]; correctIndex: number }[]
  loadContent: () => Promise<string>
}

const moduleFiles = import.meta.glob('./*/module.md', { eager: false, query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>

function createModule(slug: string): ModuleConfig {
  const path = `./${slug}/module.md`

  const loadContent = async () => {
    const loader = moduleFiles[path]
    if (!loader) return '# Module not found'
    const md = await loader()
    return md
  }

  return { slug, loadContent } as ModuleConfig
}

const rawModules: ModuleConfig[] = [
  {
    ...createModule('sesi-6-data-structures'),
    slug: 'sesi-6-data-structures',
    title: 'Data Structures',
    description: 'Tuple, Set, Dictionary, List basics, Indexing and Slicing',
    tags: ['Python', 'Data Structures', 'Tuple', 'Set', 'Dictionary', 'List'],
    features: { quiz: false, flashcards: false },
  },
  {
    ...createModule('sesi-7-functions'),
    slug: 'sesi-7-functions',
    title: 'Functions',
    description: 'Defining functions, arguments, return values, passing lists',
    tags: ['Python', 'Functions', 'Arguments', 'Parameters'],
    features: { quiz: false, flashcards: false },
  },
  {
    ...createModule('sesi-8-file-exceptions'),
    slug: 'sesi-8-file-exceptions',
    title: 'File I/O and Exceptions',
    description: 'File reading/writing, exception handling, context managers',
    tags: ['Python', 'File I/O', 'Exceptions', 'Error Handling'],
    features: { quiz: false, flashcards: false },
  },
  {
    ...createModule('sesi-9-classes-oop'),
    slug: 'sesi-9-classes-oop',
    title: 'Classes in Python',
    description: 'OOP principles, class definition, encapsulation, special methods',
    tags: ['Python', 'OOP', 'Classes', 'Encapsulation'],
    features: { quiz: false, flashcards: false },
  },
  {
    ...createModule('sesi-10-search-sort'),
    slug: 'sesi-10-search-sort',
    title: 'Searching and Sorting',
    description: 'Linear search, binary search, bubble/selection/insertion/quick/merge sort',
    tags: ['Python', 'Algorithms', 'Searching', 'Sorting', 'Big O'],
    features: { quiz: false, flashcards: false },
  },
  {
    ...createModule('sesi-11-review'),
    slug: 'sesi-11-review',
    title: 'Comprehensive Review',
    description: 'Integrated review of Sessions 7-10 with complete project examples',
    tags: ['Python', 'Review', 'Integration', 'Projects'],
    features: { quiz: false, flashcards: false },
  },
  {
    ...createModule('sesi-12-uap'),
    slug: 'sesi-12-uap',
    title: 'UAP Final Exam',
    description: 'Sample exam questions, solutions, tips, common mistakes, and grading criteria',
    tags: ['Python', 'Exam', 'UAP', 'Practice'],
    features: { quiz: false, flashcards: false },
  },
  {
    ...createModule('uap-prep-comprehensive'),
    slug: 'uap-prep-comprehensive',
    title: 'UAP Comprehensive Prep',
    description: 'All topics from Sessions 6-12 combined with flashcards and quiz',
    tags: ['UAP', 'Comprehensive', 'All Topics'],
    features: { quiz: true, flashcards: true },
  },
]

// Set up quiz/flashcards for comprehensive module
const uapComprehensive = rawModules.find(m => m.slug === 'uap-prep-comprehensive')
if (uapComprehensive) {
  uapComprehensive.flashcards = [
    {
      front: 'Tuple',
      back: 'Ordered, immutable, allows duplicates. Use () syntax.',
    },
    {
      front: 'Set',
      back: 'Unordered, mutable, no duplicates, elements must be immutable. Use {} syntax.',
    },
    {
      front: 'Dictionary',
      back: 'Key-value pairs, unique keys, mutable. Use {key: value} syntax.',
    },
    {
      front: '*args',
      back: 'Allows passing any number of positional arguments to a function.',
    },
    {
      front: '**kwargs',
      back: 'Allows passing any number of keyword arguments to a function.',
    },
    {
      front: 'Binary Search Complexity',
      back: 'O(log n) — requires sorted list.',
    },
    {
      front: 'Quick Sort Complexity',
      back: 'O(n log n) average, O(n²) worst case.',
    },
    {
      front: 'Merge Sort Complexity',
      back: 'O(n log n) guaranteed, O(n) space.',
    },
    {
      front: 'Encapsulation',
      back: 'Bundling data and methods; hiding internal details. Private: __var, Protected: _var.',
    },
    {
      front: 'Context Manager',
      back: 'with statement — automatically closes files, even on exceptions.',
    },
  ]

  uapComprehensive.quiz = [
    {
      question: 'Which data structure is immutable?',
      options: ['List', 'Dictionary', 'Tuple', 'Set'],
      correctIndex: 2,
    },
    {
      question: 'What is the time complexity of binary search?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      correctIndex: 2,
    },
    {
      question: 'Which sort algorithm has guaranteed O(n log n) time?',
      options: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Selection Sort'],
      correctIndex: 2,
    },
    {
      question: 'Which keyword is used to define a function in Python?',
      options: ['function', 'def', 'func', 'define'],
      correctIndex: 1,
    },
    {
      question: 'What does the with statement do?',
      options: [
        'Defines a new variable',
        'Handles exceptions',
        'Automatically closes files',
        'Creates a loop',
      ],
      correctIndex: 2,
    },
  ]
}

export const modules = rawModules

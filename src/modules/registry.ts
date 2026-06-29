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
    if (!loader) return '# Module tidak ditemukan'
    const md = await loader()
    return md
  }

  return { slug, loadContent } as ModuleConfig
}

const rawModules: ModuleConfig[] = [
  {
    ...createModule('sesi-6-data-structures'),
    slug: 'sesi-6-data-structures',
    title: 'Struktur Data',
    description: 'Tuple, Set, Dictionary, List dasar, Indexing dan Slicing',
    tags: ['Python', 'Struktur Data', 'Tuple', 'Set', 'Dictionary', 'List'],
    features: { quiz: false, flashcards: false },
  },
  {
    ...createModule('sesi-7-functions'),
    slug: 'sesi-7-functions',
    title: 'Fungsi',
    description: 'Mendefinisikan fungsi, argumen, nilai kembali, melewatkan list',
    tags: ['Python', 'Fungsi', 'Argumen', 'Parameter'],
    features: { quiz: false, flashcards: false },
  },
  {
    ...createModule('sesi-8-file-exceptions'),
    slug: 'sesi-8-file-exceptions',
    title: 'File I/O dan Exception',
    description: 'Membaca/menulis file, penanganan exception, context manager',
    tags: ['Python', 'File I/O', 'Exception', 'Error Handling'],
    features: { quiz: false, flashcards: false },
  },
  {
    ...createModule('sesi-9-classes-oop'),
    slug: 'sesi-9-classes-oop',
    title: 'Class di Python',
    description: 'Prinsip OOP, definisi class, enkapsulasi, method spesial',
    tags: ['Python', 'OOP', 'Class', 'Enkapsulasi'],
    features: { quiz: false, flashcards: false },
  },
  {
    ...createModule('sesi-10-search-sort'),
    slug: 'sesi-10-search-sort',
    title: 'Searching dan Sorting',
    description: 'Linear search, binary search, bubble/selection/insertion/quick/merge sort',
    tags: ['Python', 'Algoritma', 'Searching', 'Sorting', 'Big O'],
    features: { quiz: false, flashcards: false },
  },
  {
    ...createModule('sesi-11-review'),
    slug: 'sesi-11-review',
    title: 'Review Komprehensif',
    description: 'Review terintegrasi Sesi 7-10 dengan contoh project lengkap',
    tags: ['Python', 'Review', 'Integrasi', 'Project'],
    features: { quiz: false, flashcards: false },
  },
  {
    ...createModule('sesi-12-uap'),
    slug: 'sesi-12-uap',
    title: 'UAP Final',
    description: 'Contoh soal ujian, solusi, tips, kesalahan umum, dan kriteria penilaian',
    tags: ['Python', 'Ujian', 'UAP', 'Latihan'],
    features: { quiz: false, flashcards: false },
  },
  {
    ...createModule('uap-prep-comprehensive'),
    slug: 'uap-prep-comprehensive',
    title: 'Persiapan UAP Komprehensif',
    description: 'Semua topik dari Sesi 6-12 digabung dengan flashcard dan kuis',
    tags: ['UAP', 'Komprehensif', 'Semua Topik'],
    features: { quiz: true, flashcards: true },
  },
]

// Setup kuis dan flashcard untuk modul komprehensif
const uapComprehensive = rawModules.find(m => m.slug === 'uap-prep-comprehensive')
if (uapComprehensive) {
  uapComprehensive.flashcards = [
    {
      front: 'Tuple',
      back: 'Terurut, immutable, mengizinkan duplikat. Gunakan sintaks ().',
    },
    {
      front: 'Set',
      back: 'Tidak terurut, mutable, tanpa duplikat, elemen harus immutable. Gunakan sintaks {}.',
    },
    {
      front: 'Dictionary',
      back: 'Pasangan key-value, key unik, mutable. Gunakan sintaks {key: value}.',
    },
    {
      front: '*args',
      back: 'Mengizinkan jumlah argumen posisi tak terbatas ke dalam fungsi.',
    },
    {
      front: '**kwargs',
      back: 'Mengizinkan jumlah argumen keyword tak terbatas ke dalam fungsi.',
    },
    {
      front: 'Kompleksitas Binary Search',
      back: 'O(log n) — membutuhkan list terurut.',
    },
    {
      front: 'Kompleksitas Quick Sort',
      back: 'Rata-rata O(n log n), kasus terburuk O(n²).',
    },
    {
      front: 'Kompleksitas Merge Sort',
      back: 'O(n log n) terjamin, ruang O(n).',
    },
    {
      front: 'Enkapsulasi',
      back: 'Menggabungkan data dan method; menyembunyikan detail internal. Private: __var, Protected: _var.',
    },
    {
      front: 'Context Manager',
      back: 'Pernyataan with — otomatis menutup file, bahkan saat exception.',
    },
  ]

  uapComprehensive.quiz = [
    {
      question: 'Struktur data mana yang bersifat immutable?',
      options: ['List', 'Dictionary', 'Tuple', 'Set'],
      correctIndex: 2,
    },
    {
      question: 'Apa kompleksitas waktu binary search?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      correctIndex: 2,
    },
    {
      question: 'Algoritma sorting mana yang memiliki jaminan O(n log n)?',
      options: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Selection Sort'],
      correctIndex: 2,
    },
    {
      question: 'Keyword apa yang digunakan untuk mendefinisikan fungsi di Python?',
      options: ['function', 'def', 'func', 'define'],
      correctIndex: 1,
    },
    {
      question: 'Apa fungsi dari pernyataan with?',
      options: [
        'Mendefinisikan variabel baru',
        'Menangani exception',
        'Otomatis menutup file',
        'Membuat perulangan',
      ],
      correctIndex: 2,
    },
  ]
}

export const modules = rawModules


// Types
export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  subjects: Subject[];
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  image: string;
  quizzes: Quiz[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  questions: Question[];
  timePerQuestion: number; // in seconds
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  explanation: string;
}

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface UserStats {
  totalQuizzes: number;
  correctAnswers: number;
  incorrectAnswers: number;
  winRate: number;
  level: number;
  exp: number;
  expToNextLevel: number;
  achievements: Achievement[];
  recentResults: QuizResult[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  progress?: number;
  total?: number;
}

export interface QuizResult {
  id: string;
  quizId: string;
  quizTitle: string;
  date: string;
  score: number;
  totalQuestions: number;
  timeSpent: number;
  categoryId: string;
}

// Mock Data
export const categories: Category[] = [
  {
    id: "math",
    name: "Mathematics",
    icon: "calculator",
    description: "Test your skills in algebra, geometry, calculus, and more",
    color: "bg-blue-500",
    subjects: [
      {
        id: "algebra",
        name: "Algebra",
        description: "Equations, functions, and patterns",
        image: "/placeholder.svg",
        quizzes: [
          {
            id: "algebra-basics",
            title: "Algebra Basics",
            description: "Test your knowledge of algebraic expressions and equations",
            difficulty: "easy",
            timePerQuestion: 15,
            questions: [
              {
                id: "q1",
                text: "Solve for x: 2x + 5 = 15",
                options: [
                  { id: "a", text: "x = 5", isCorrect: true },
                  { id: "b", text: "x = 10", isCorrect: false },
                  { id: "c", text: "x = 7.5", isCorrect: false },
                  { id: "d", text: "x = 4", isCorrect: false }
                ],
                explanation: "To solve this equation, subtract 5 from both sides to get 2x = 10, then divide by 2 to get x = 5."
              },
              {
                id: "q2",
                text: "Which expression is equivalent to 3(x + 4)?",
                options: [
                  { id: "a", text: "3x + 4", isCorrect: false },
                  { id: "b", text: "3x + 7", isCorrect: false },
                  { id: "c", text: "3x + 12", isCorrect: true },
                  { id: "d", text: "7x", isCorrect: false }
                ],
                explanation: "Using the distributive property, 3(x + 4) = 3x + 3(4) = 3x + 12."
              },
              {
                id: "q3",
                text: "If f(x) = 2x - 3, what is f(5)?",
                options: [
                  { id: "a", text: "7", isCorrect: true },
                  { id: "b", text: "8", isCorrect: false },
                  { id: "c", text: "13", isCorrect: false },
                  { id: "d", text: "-13", isCorrect: false }
                ],
                explanation: "Substitute x = 5 into the function: f(5) = 2(5) - 3 = 10 - 3 = 7."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "science",
    name: "Science",
    icon: "flask",
    description: "Explore chemistry, biology, physics, and earth science",
    color: "bg-green-500",
    subjects: [
      {
        id: "biology",
        name: "Biology",
        description: "The study of living organisms",
        image: "/placeholder.svg",
        quizzes: [
          {
            id: "cell-biology",
            title: "Cell Biology",
            description: "Test your knowledge about cell structures and functions",
            difficulty: "medium",
            timePerQuestion: 20,
            questions: [
              {
                id: "q1",
                text: "Which organelle is known as the 'powerhouse of the cell'?",
                options: [
                  { id: "a", text: "Golgi apparatus", isCorrect: false },
                  { id: "b", text: "Mitochondria", isCorrect: true },
                  { id: "c", text: "Endoplasmic reticulum", isCorrect: false },
                  { id: "d", text: "Lysosome", isCorrect: false }
                ],
                explanation: "Mitochondria are responsible for cellular respiration, generating most of the cell's supply of ATP."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "literature",
    name: "Literature",
    icon: "book-open",
    description: "Classic novels, poetry, and literary analysis",
    color: "bg-yellow-500",
    subjects: [
      {
        id: "classic-lit",
        name: "Classic Literature",
        description: "Timeless literary works",
        image: "/placeholder.svg",
        quizzes: [
          {
            id: "shakespeare",
            title: "Shakespeare's Works",
            description: "Test your knowledge of Shakespeare's plays and sonnets",
            difficulty: "hard",
            timePerQuestion: 25,
            questions: [
              {
                id: "q1",
                text: "Which of the following is NOT one of Shakespeare's tragedies?",
                options: [
                  { id: "a", text: "Hamlet", isCorrect: false },
                  { id: "b", text: "Macbeth", isCorrect: false },
                  { id: "c", text: "The Tempest", isCorrect: true },
                  { id: "d", text: "Othello", isCorrect: false }
                ],
                explanation: "The Tempest is considered one of Shakespeare's romantic comedies or late romances, not a tragedy."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "history",
    name: "History",
    icon: "landmark",
    description: "World events, civilizations, and historical figures",
    color: "bg-red-500",
    subjects: [
      {
        id: "world-history",
        name: "World History",
        description: "Major events that shaped our world",
        image: "/placeholder.svg",
        quizzes: [
          {
            id: "ancient-civilizations",
            title: "Ancient Civilizations",
            description: "Test your knowledge of ancient Egypt, Greece, Rome, and more",
            difficulty: "medium",
            timePerQuestion: 20,
            questions: [
              {
                id: "q1",
                text: "Which ancient civilization built the Great Pyramids at Giza?",
                options: [
                  { id: "a", text: "Sumerians", isCorrect: false },
                  { id: "b", text: "Egyptians", isCorrect: true },
                  { id: "c", text: "Greeks", isCorrect: false },
                  { id: "d", text: "Romans", isCorrect: false }
                ],
                explanation: "The Great Pyramids at Giza were built by the ancient Egyptians around 2500 BCE."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "geography",
    name: "Geography",
    icon: "globe",
    description: "Countries, capitals, landforms, and cultures",
    color: "bg-purple-500",
    subjects: [
      {
        id: "world-geography",
        name: "World Geography",
        description: "Explore the world's geography",
        image: "/placeholder.svg",
        quizzes: [
          {
            id: "capitals",
            title: "World Capitals",
            description: "Test your knowledge of capital cities around the world",
            difficulty: "medium",
            timePerQuestion: 15,
            questions: [
              {
                id: "q1",
                text: "What is the capital of Australia?",
                options: [
                  { id: "a", text: "Sydney", isCorrect: false },
                  { id: "b", text: "Melbourne", isCorrect: false },
                  { id: "c", text: "Canberra", isCorrect: true },
                  { id: "d", text: "Perth", isCorrect: false }
                ],
                explanation: "Canberra is the capital city of Australia, though Sydney and Melbourne are larger cities."
              }
            ]
          }
        ]
      }
    ]
  }
];

export const mockUserStats: UserStats = {
  totalQuizzes: 42,
  correctAnswers: 156,
  incorrectAnswers: 44,
  winRate: 78,
  level: 8,
  exp: 2450,
  expToNextLevel: 3000,
  achievements: [
    {
      id: "first_win",
      name: "First Victory",
      description: "Win your first quiz competition",
      icon: "trophy",
      earned: true
    },
    {
      id: "math_expert",
      name: "Math Expert",
      description: "Win 10 math quizzes",
      icon: "calculator",
      earned: true
    },
    {
      id: "fast_thinker",
      name: "Fast Thinker",
      description: "Answer 50 questions in under 5 seconds each",
      icon: "timer",
      earned: false,
      progress: 38,
      total: 50
    }
  ],
  recentResults: [
    {
      id: "result1",
      quizId: "algebra-basics",
      quizTitle: "Algebra Basics",
      date: "2023-09-15",
      score: 3,
      totalQuestions: 3,
      timeSpent: 35,
      categoryId: "math"
    },
    {
      id: "result2",
      quizId: "cell-biology",
      quizTitle: "Cell Biology",
      date: "2023-09-12",
      score: 8,
      totalQuestions: 10,
      timeSpent: 180,
      categoryId: "science"
    },
    {
      id: "result3",
      quizId: "capitals",
      quizTitle: "World Capitals",
      date: "2023-09-10",
      score: 14,
      totalQuestions: 15,
      timeSpent: 210,
      categoryId: "geography"
    }
  ]
};

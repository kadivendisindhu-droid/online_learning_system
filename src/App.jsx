
import { useEffect, useMemo, useState } from 'react'
import {
  BookOpen,
  Search,
  LayoutDashboard,
  Compass,
  ClipboardCheck,
  Bell,
  Clock3,
  Star,
  PlayCircle,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  GraduationCap,
  Flame,
  Trophy
} from 'lucide-react'

const API = 'http://localhost:8080/api'

const initialCourses = [
  {
    id: 1,
    title: 'React for Modern Web Apps',
    category: 'Development',
    level: 'Beginner',
    duration: '6h 20m',
    rating: 4.9,
    price: 0,
    icon: '⚛️',
    color: 'violet',
    description: 'Learn React components, props, state and modern web development.'
  },
  {
    id: 2,
    title: 'UI/UX Design Fundamentals',
    category: 'Design',
    level: 'Beginner',
    duration: '4h 45m',
    rating: 4.8,
    price: 19,
    icon: '🎨',
    color: 'peach',
    description: 'Learn visual design, wireframes, prototypes and user experience.'
  },
  {
    id: 3,
    title: 'Python & Data Science',
    category: 'Data Science',
    level: 'Intermediate',
    duration: '8h 10m',
    rating: 4.9,
    price: 29,
    icon: '🐍',
    color: 'blue',
    description: 'Explore Python programming, data analysis and machine learning.'
  },
  {
    id: 4,
    title: 'Digital Marketing Essentials',
    category: 'Business',
    level: 'Beginner',
    duration: '3h 50m',
    rating: 4.7,
    price: 15,
    icon: '📈',
    color: 'mint',
    description: 'Understand content strategy, SEO and digital marketing.'
  },
  {
    id: 5,
    title: 'Java & Spring Boot APIs',
    category: 'Development',
    level: 'Intermediate',
    duration: '7h 05m',
    rating: 4.8,
    price: 25,
    icon: '☕',
    color: 'blue',
    description: 'Build REST APIs using Java, Spring Boot and databases.'
  },
  {
    id: 6,
    title: 'Productivity with AI Tools',
    category: 'Business',
    level: 'Beginner',
    duration: '2h 40m',
    rating: 4.6,
    price: 0,
    icon: '✨',
    color: 'peach',
    description: 'Use AI tools to improve learning, research and productivity.'
  }
]

const categories = [
  'All courses',
  'Development',
  'Design',
  'Data Science',
  'Business'
]

const courseLessons = {
  1: [
    {
      title: 'Introduction to React',
      duration: '12 min',
      video: 'Ke90Tje7VS0',
      notes: 'React is a JavaScript library for building user interfaces using reusable components.'
    },
    {
      title: 'Components and JSX',
      duration: '18 min',
      video: '',
      notes: 'Components are reusable parts of an interface. JSX lets you write HTML-like markup in JavaScript.'
    },
    {
      title: 'Props and State',
      duration: '20 min',
      video: '',
      notes: 'Props pass data into components. State stores information that can change when users interact with the page.'
    },
    {
      title: 'Handling Events',
      duration: '15 min',
      video: '',
      notes: 'Event handlers allow your application to respond to clicks, typing and other user actions.'
    },
    {
      title: 'Building a Mini Project',
      duration: '25 min',
      video: '',
      notes: 'Combine components, props, state and event handlers to build an interactive application.'
    }
  ],

  2: [
    {
      title: 'Introduction to UI/UX',
      duration: '12 min',
      video: '',
      notes: 'UI focuses on interface appearance. UX focuses on the experience users have with a product.'
    },
    {
      title: 'Visual Design Principles',
      duration: '18 min',
      video: '',
      notes: 'Learn about contrast, alignment, spacing, typography and visual hierarchy.'
    },
    {
      title: 'Wireframes and Prototypes',
      duration: '20 min',
      video: '',
      notes: 'Wireframes plan a layout, while prototypes demonstrate how an interface may work.'
    },
    {
      title: 'Usability Testing',
      duration: '15 min',
      video: '',
      notes: 'Test a design with users and use their feedback to improve the experience.'
    }
  ],

  3: [
    {
      title: 'Python Fundamentals',
      duration: '15 min',
      video: 'rfscVS0vtbw',
      notes: 'Learn variables, data types, expressions and basic Python syntax.'
    },
    {
      title: 'Working with Data',
      duration: '20 min',
      video: '',
      notes: 'Learn to organize, clean and inspect data before analyzing it.'
    },
    {
      title: 'Data Visualization',
      duration: '18 min',
      video: '',
      notes: 'Charts help you communicate patterns, comparisons and trends in data.'
    },
    {
      title: 'Introduction to Machine Learning',
      duration: '22 min',
      video: '',
      notes: 'Understand training data, features, labels and model evaluation.'
    }
  ],

  4: [
    {
      title: 'Digital Marketing Basics',
      duration: '12 min',
      video: '',
      notes: 'Learn about digital channels, audiences and marketing objectives.'
    },
    {
      title: 'Content and Social Media',
      duration: '18 min',
      video: '',
      notes: 'Plan useful content and select suitable social media channels.'
    },
    {
      title: 'Search Engine Optimization',
      duration: '20 min',
      video: '',
      notes: 'Understand keywords, useful content and basic SEO techniques.'
    },
    {
      title: 'Campaign Analytics',
      duration: '15 min',
      video: '',
      notes: 'Measure campaign reach, engagement, conversions and performance.'
    }
  ],

  5: [
    {
      title: 'Java Fundamentals',
      duration: '15 min',
      video: 'eIrMbAQSU34',
      notes: 'Learn Java syntax, variables, data types and control statements.'
    },
    {
      title: 'Introduction to Spring Boot',
      duration: '20 min',
      video: '',
      notes: 'Spring Boot simplifies Java backend application development.'
    },
    {
      title: 'Creating REST APIs',
      duration: '22 min',
      video: '',
      notes: 'Create endpoints that accept HTTP requests and return data.'
    },
    {
      title: 'Connecting MySQL',
      duration: '20 min',
      video: '',
      notes: 'Connect a Java application to MySQL and retrieve database records.'
    }
  ],

  6: [
    {
      title: 'Introduction to AI Tools',
      duration: '12 min',
      video: '',
      notes: 'Explore how AI tools can help with everyday learning and productivity.'
    },
    {
      title: 'Writing Better Prompts',
      duration: '15 min',
      video: '',
      notes: 'Provide clear instructions, context and output requirements when using AI.'
    },
    {
      title: 'AI for Research and Planning',
      duration: '18 min',
      video: '',
      notes: 'Use AI to organize ideas and verify important information independently.'
    },
    {
      title: 'Responsible AI Use',
      duration: '12 min',
      video: '',
      notes: 'Protect private information and check generated content before relying on it.'
    }
  ]
}

const quizQuestions = [
  {
    question: 'What is the benefit of reusable React components?',
    options: [
      'They remove the need for JavaScript',
      'They make UI easier to reuse and maintain',
      'They automatically create databases'
    ],
    answer: 1
  },
  {
    question: 'Which HTTP method is commonly used to create a resource?',
    options: ['GET', 'POST', 'DELETE'],
    answer: 1
  },
  {
    question: 'What does a relational database store data in?',
    options: ['Tables', 'Slides', 'Audio tracks'],
    answer: 0
  }
]

export default function App() {
  const [courses, setCourses] = useState(initialCourses)
  const [page, setPage] = useState('Explore')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All courses')
  const [enrolled, setEnrolled] = useState([1, 5])
  const [completedLessons, setCompletedLessons] = useState([])
  const [selected, setSelected] = useState(null)
  const [activeLesson, setActiveLesson] = useState(0)
  const [answers, setAnswers] = useState({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [notice, setNotice] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    fetch(`${API}/courses`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Could not load courses')
        }
        return response.json()
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setCourses(
            data.map(course => ({
              ...course,
              icon: course.icon || '📘',
              color: course.color || 'violet',
              rating: course.rating || 4.8,
              duration: course.duration || '5h 20m',
              level: course.level || 'Beginner',
              description:
                course.description ||
                'Learn practical skills with guided lessons.'
            }))
          )
        }
      })
      .catch(() => {
        // Use the sample courses if the backend is unavailable.
      })
  }, [])

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesCategory =
        category === 'All courses' || course.category === category

      const text =
        `${course.title} ${course.category} ${course.level}`.toLowerCase()

      return matchesCategory && text.includes(search.toLowerCase())
    })
  }, [courses, category, search])

  const enrolledCourses = courses.filter(course =>
    enrolled.includes(course.id)
  )

  const selectedLessons = selected
    ? courseLessons[selected.id] || courseLessons[1]
    : []

  const currentLesson = selectedLessons[activeLesson]

  function openCourse(course) {
    setSelected(course)
    setActiveLesson(0)
    setNotice('')
  }

  function navigate(nextPage) {
    setPage(nextPage)
    setSelected(null)
    setMobileOpen(false)
    setNotice('')
  }

  async function enrollInCourse(course) {
    try {
      const response = await fetch(`${API}/enrollments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: 1,
          courseId: course.id
        })
      })

      if (!response.ok) {
        throw new Error('Enrollment request failed')
      }
    } catch {
      // Keep enrollment available in the frontend demo.
    }

    setEnrolled(previous =>
      previous.includes(course.id)
        ? previous
        : [...previous, course.id]
    )

    setNotice(`You are enrolled in ${course.title}!`)
  }

  function markLessonComplete() {
    const lessonKey = `${selected.id}-${activeLesson}`

    setCompletedLessons(previous =>
      previous.includes(lessonKey)
        ? previous
        : [...previous, lessonKey]
    )

    setNotice('Lesson marked as completed!')
  }

  function CourseCard({ course }) {
    const lessonCount =
      (courseLessons[course.id] || courseLessons[1]).length

    return (
      <article className="course-card">
        <button
          className={`course-art ${course.color}`}
          onClick={() => openCourse(course)}
          aria-label={`Open ${course.title}`}
        >
          <span className="art-emoji">{course.icon}</span>
          <span className="art-label">{course.category}</span>
          <span className="art-orbit orbit-one" />
          <span className="art-orbit orbit-two" />
        </button>

        <div className="course-info">
          <div className="course-meta">
            <span>{course.level}</span>
            <span>
              <Star size={13} fill="currentColor" /> {course.rating}
            </span>
          </div>

          <h3>{course.title}</h3>
          <p className="muted course-desc">{course.description}</p>

          <div className="course-stats">
            <span>
              <PlayCircle size={14} /> {lessonCount} lessons
            </span>
            <span>
              <Clock3 size={14} /> {course.duration}
            </span>
          </div>

          <div className="course-bottom">
            <div className="teacher">
              <span className="avatar tiny">{course.icon}</span>
              <span>LearnSpace team</span>
            </div>

            <button
              className={
                enrolled.includes(course.id)
                  ? 'enrolled-btn'
                  : 'arrow-btn'
              }
              onClick={() => openCourse(course)}
            >
              {enrolled.includes(course.id)
                ? 'Continue'
                : course.price === 0
                  ? 'Free'
                  : `$${course.price}`}
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </article>
    )
  }

  const navigationItems = [
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'Explore', icon: Compass },
    { label: 'My learning', icon: BookOpen },
    { label: 'Quiz center', icon: ClipboardCheck }
  ]

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
        <div className="brand">
          <span className="brand-mark">
            <GraduationCap size={22} />
          </span>
          <span>
            learn<span className="brand-accent">space</span>
          </span>
          <button
            className="mobile-close"
            onClick={() => setMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="workspace-label">LEARNING SPACE</div>

        <nav>
          {navigationItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className={`nav-item ${page === label ? 'active' : ''}`}
              onClick={() => navigate(label)}
            >
              <Icon size={19} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-spacer" />

        <div className="streak-card">
          <div className="streak-icon">
            <Flame size={20} />
          </div>
          <div>
            <strong>Keep your streak!</strong>
            <p>You're building a great habit.</p>
            <div className="streak-days">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                <span
                  key={index}
                  className={`day ${index < 3 ? 'done' : ''}`}
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
        </div>

        <button
          className="help-link"
          onClick={() =>
            setNotice('Open a course and choose a lesson to start learning.')
          }
        >
          Help & support
        </button>

        <div className="sidebar-profile">
          <div className="avatar">ST</div>
          <div className="profile-text">
            <strong>Student Learner</strong>
            <span>Free learner plan</span>
          </div>
        </div>
      </aside>

      {mobileOpen && (
        <button
          className="scrim"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        />
      )}

      <main className="main-area">
        <header className="topbar">
          <button
            className="mobile-menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={21} />
          </button>

          <div className="breadcrumb">
            Pages <span>/</span> <strong>{page}</strong>
          </div>

          <div className="top-actions">
            <label className="top-search">
              <Search size={17} />
              <input
                value={search}
                onChange={event => {
                  setSearch(event.target.value)
                  if (page !== 'Explore') setPage('Explore')
                }}
                placeholder="Search courses..."
              />
            </label>

            <button
              className="icon-btn notification"
              onClick={() => setNotice('You are all caught up!')}
              aria-label="Notifications"
            >
              <Bell size={19} />
            </button>
          </div>
        </header>

        <div className="content">
          {notice && (
            <div className="notice">
              <CheckCircle2 size={17} />
              {notice}
              <button onClick={() => setNotice('')}>×</button>
            </div>
          )}

          {page === 'Explore' && (
            <>
              <section className="welcome-row">
                <div>
                  <div className="eyebrow">
                    <span className="eyebrow-dot" />
                    YOUR NEXT CHAPTER STARTS HERE
                  </div>
                  <h1>
                    Learn something <span>new today.</span>
                  </h1>
                  <p className="muted lead">
                    Small steps every day lead to big things. Let's keep growing.
                  </p>
                </div>
                <div className="welcome-illustration">
                  <div className="ill-book">📚</div>
                  <div className="ill-star">✦</div>
                  <div className="ill-spark">✧</div>
                </div>
              </section>

              <section className="hero-banner">
                <div className="hero-copy">
                  <span className="hero-tag">✦ FEATURED LEARNING PATH</span>
                  <h2>
                    Turn curiosity into
                    <br />
                    real-world skills.
                  </h2>
                  <p>
                    Learn at your pace with guided courses and hands-on practice.
                  </p>
                  <button
                    className="white-btn"
                    onClick={() => {
                      setCategory('Development')
                      setSearch('')
                    }}
                  >
                    Explore learning paths <ArrowRight size={16} />
                  </button>
                  <div className="hero-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>

                <div className="hero-visual">
                  <div className="hero-circle" />
                  <div className="hero-plant">🌱</div>
                  <div className="hero-laptop">
                    <div className="laptop-screen">
                      <div className="screen-line wide" />
                      <div className="screen-line" />
                      <div className="screen-chart">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className="screen-line short" />
                    </div>
                    <div className="laptop-base" />
                  </div>
                  <div className="floating-badge">
                    <Trophy size={16} />
                    <span>
                      <b>New skills</b>
                      <small>New possibilities</small>
                    </span>
                  </div>
                </div>
              </section>

              <section className="stats-grid">
                <div className="stat-card">
                  <span className="stat-icon purple">
                    <BookOpen size={19} />
                  </span>
                  <div>
                    <p>Enrolled courses</p>
                    <strong>{enrolled.length}</strong>
                    <small>Keep it up!</small>
                  </div>
                </div>

                <div className="stat-card">
                  <span className="stat-icon orange">
                    <Flame size={19} />
                  </span>
                  <div>
                    <p>Day streak</p>
                    <strong>3 days</strong>
                    <small>You're on a roll</small>
                  </div>
                </div>

                <div className="stat-card">
                  <span className="stat-icon green">
                    <Trophy size={19} />
                  </span>
                  <div>
                    <p>Lessons completed</p>
                    <strong>{completedLessons.length}</strong>
                    <small>Keep learning</small>
                  </div>
                </div>

                <div className="stat-card">
                  <span className="stat-icon blue">
                    <ClipboardCheck size={19} />
                  </span>
                  <div>
                    <p>Learning progress</p>
                    <strong>
                      {Math.min(
                        Math.round((completedLessons.length / 20) * 100),
                        100
                      )}
                      %
                    </strong>
                    <small>Overall completion</small>
                  </div>
                </div>
              </section>

              <section className="section-block">
                <div className="section-heading">
                  <div>
                    <h2>Explore courses</h2>
                    <p className="muted">
                      Choose a course to view its lessons and videos.
                    </p>
                  </div>
                  <button
                    className="text-link"
                    onClick={() => {
                      setCategory('All courses')
                      setSearch('')
                    }}
                  >
                    View all courses <ArrowRight size={16} />
                  </button>
                </div>

                <div className="category-row">
                  {categories.map(item => (
                    <button
                      key={item}
                      className={`category-chip ${
                        category === item ? 'selected' : ''
                      }`}
                      onClick={() => setCategory(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="course-grid">
                  {filteredCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>

                {filteredCourses.length === 0 && (
                  <div className="empty-state">
                    No courses found. Try another search.
                  </div>
                )}
              </section>

              <section className="bottom-cta">
                <div className="cta-icon">💡</div>
                <div>
                  <h3>Not sure where to start?</h3>
                  <p>Take a quick quiz to check your knowledge.</p>
                </div>
                <button
                  className="primary-btn"
                  onClick={() => navigate('Quiz center')}
                >
                  Take a quiz <ArrowRight size={16} />
                </button>
              </section>
            </>
          )}

          {page === 'Dashboard' && (
            <>
              <div className="page-title">
                <div className="eyebrow">YOUR LEARNING OVERVIEW</div>
                <h1>Welcome back! 👋</h1>
                <p className="muted lead">
                  Here's your learning progress at a glance.
                </p>
              </div>

              <section className="stats-grid">
                <div className="stat-card">
                  <BookOpen size={20} />
                  <div>
                    <p>Enrolled courses</p>
                    <strong>{enrolled.length}</strong>
                  </div>
                </div>
                <div className="stat-card">
                  <Trophy size={20} />
                  <div>
                    <p>Lessons completed</p>
                    <strong>{completedLessons.length}</strong>
                  </div>
                </div>
              </section>

              <section className="section-block">
                <h2>Continue learning</h2>
                <div className="course-grid">
                  {enrolledCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </section>
            </>
          )}

          {page === 'My learning' && (
            <>
              <div className="page-title">
                <div className="eyebrow">YOUR PERSONAL LIBRARY</div>
                <h1>My learning</h1>
                <p className="muted lead">
                  Open an enrolled course to continue its lessons.
                </p>
              </div>

              <div className="course-grid">
                {enrolledCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>

              {enrolledCourses.length === 0 && (
                <div className="empty-state">
                  You have not enrolled in any courses yet.
                </div>
              )}
            </>
          )}

          {page === 'Quiz center' && (
            <>
              <div className="page-title">
                <div className="eyebrow">PRACTICE MAKES PROGRESS</div>
                <h1>Quiz center</h1>
                <p className="muted lead">
                  Test your web development knowledge.
                </p>
              </div>

              <div className="quiz-panel">
                <h2>Web development essentials</h2>
                <p className="muted">3 questions · Beginner</p>

                {quizQuestions.map((question, index) => (
                  <div className="question" key={question.question}>
                    <div className="question-num">
                      QUESTION {index + 1}
                    </div>
                    <h3>{question.question}</h3>

                    <div className="answer-list">
                      {question.options.map((option, optionIndex) => (
                        <button
                          key={option}
                          className={`answer-option ${
                            answers[index] === optionIndex ? 'chosen' : ''
                          } ${
                            quizSubmitted &&
                            question.answer === optionIndex
                              ? 'correct'
                              : ''
                          } ${
                            quizSubmitted &&
                            answers[index] === optionIndex &&
                            question.answer !== optionIndex
                              ? 'wrong'
                              : ''
                          }`}
                          onClick={() => {
                            if (!quizSubmitted) {
                              setAnswers(previous => ({
                                ...previous,
                                [index]: optionIndex
                              }))
                            }
                          }}
                        >
                          <span className="answer-letter">
                            {String.fromCharCode(65 + optionIndex)}
                          </span>
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {quizSubmitted && (
                  <h3>
                    Your score:{' '}
                    {
                      quizQuestions.filter(
                        (question, index) =>
                          answers[index] === question.answer
                      ).length
                    }{' '}
                    / {quizQuestions.length}
                  </h3>
                )}

                <button
                  className="secondary-btn"
                  onClick={() => {
                    setAnswers({})
                    setQuizSubmitted(false)
                  }}
                >
                  Reset quiz
                </button>

                <button
                  className="primary-btn"
                  disabled={
                    Object.keys(answers).length !== quizQuestions.length
                  }
                  onClick={() => setQuizSubmitted(true)}
                >
                  Check answers
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      {selected && (
        <div
          className="modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="course-modal lesson-modal"
            onClick={event => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close course"
            >
              <X size={20} />
            </button>

            <div className="modal-body">
              <div className="eyebrow">YOUR LEARNING CLASSROOM</div>
              <h2>{selected.title}</h2>
              <p className="muted">{selected.description}</p>

              {!enrolled.includes(selected.id) ? (
                <>
                  <div className="modal-facts">
                    <span>
                      <PlayCircle size={16} />
                      {selectedLessons.length} lessons
                    </span>
                    <span>
                      <Clock3 size={16} />
                      {selected.duration}
                    </span>
                  </div>

                  <button
                    className="primary-btn full-btn"
                    onClick={() => enrollInCourse(selected)}
                  >
                    {selected.price === 0
                      ? 'Enroll for free'
                      : `Enroll for $${selected.price}`}
                    <ArrowRight size={16} />
                  </button>

                  <p className="muted">
                    Enroll to open the lessons and learning materials.
                  </p>
                </>
              ) : currentLesson ? (
                <>
                  <div className="lesson-layout">
                    <div className="lesson-player">
                      {currentLesson.video ? (
                        <iframe
                          key={currentLesson.video}
                          src={`https://www.youtube-nocookie.com/embed/${currentLesson.video}`}
                          title={currentLesson.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <div className="video-placeholder">
                          <PlayCircle size={52} />
                          <h3>{currentLesson.title}</h3>
                          <p>
                            Lesson notes are available below. You can also
                            search for a related video.
                          </p>
                          <a
                            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                              selected.title +
                                ' ' +
                                currentLesson.title +
                                ' tutorial'
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Find a video on YouTube ↗
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="lesson-list">
                      <h3>Course content</h3>
                      <p className="muted">
                        {selectedLessons.length} lessons
                      </p>

                      {selectedLessons.map((lesson, index) => {
                        const lessonKey = `${selected.id}-${index}`
                        const isCompleted =
                          completedLessons.includes(lessonKey)

                        return (
                          <button
                            key={lessonKey}
                            className={`lesson-item ${
                              activeLesson === index ? 'active' : ''
                            }`}
                            onClick={() => setActiveLesson(index)}
                          >
                            <span>
                              {isCompleted ? (
                                <CheckCircle2 size={18} />
                              ) : (
                                <PlayCircle size={18} />
                              )}
                            </span>
                            <span className="lesson-item-text">
                              <strong>
                                {index + 1}. {lesson.title}
                              </strong>
                              <small>{lesson.duration}</small>
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="lesson-notes">
                    <h3>{currentLesson.title} — Lesson notes</h3>
                    <p>{currentLesson.notes}</p>

                    <button
                      className="primary-btn"
                      onClick={markLessonComplete}
                    >
                      <CheckCircle2 size={17} />
                      {completedLessons.includes(
                        `${selected.id}-${activeLesson}`
                      )
                        ? 'Lesson completed'
                        : 'Mark as completed'}
                    </button>

                    <button
                      className="secondary-btn"
                      disabled={activeLesson === selectedLessons.length - 1}
                      onClick={() =>
                        setActiveLesson(index =>
                          Math.min(index + 1, selectedLessons.length - 1)
                        )
                      }
                    >
                      Next lesson <ArrowRight size={16} />
                    </button>

                    <button
                      className="secondary-btn"
                      disabled={activeLesson === 0}
                      onClick={() =>
                        setActiveLesson(index => Math.max(index - 1, 0))
                      }
                    >
                      Previous lesson
                    </button>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

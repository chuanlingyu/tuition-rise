import { useEffect, useState } from 'react'

const STORAGE_KEY = 'tuition-infographic-comments'

export default function CommentsPage() {
  const [commentText, setCommentText] = useState('')
  const [isSubmitHovered, setIsSubmitHovered] = useState(false)
  const [isClearHovered, setIsClearHovered] = useState(false)
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem(STORAGE_KEY)

    if (!savedComments) {
      return []
    }

    try {
      return JSON.parse(savedComments)
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments))
  }, [comments])

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedComment = commentText.trim()

    if (!trimmedComment) {
      return
    }

    setComments((currentComments) => [
      {
        id: crypto.randomUUID(),
        text: trimmedComment,
      },
      ...currentComments,
    ])
    setCommentText('')
  }

  function handleClearComments() {
    setComments([])
  }

  const submitButtonStyle = {
    padding: '10px 18px',
    border: '2px solid #2f2520',
    borderRadius: 999,
    background: '#7a4b2a',
    color: '#fff8ec',
    fontSize: 15,
    fontWeight: 800,
    cursor: 'pointer',
    transform: isSubmitHovered ? 'scale(1.06)' : 'none',
    transformOrigin: 'center',
    transition: 'transform 160ms ease, box-shadow 160ms ease',
    boxShadow: isSubmitHovered
      ? '0 12px 22px rgba(47, 37, 32, 0.24)'
      : '0 8px 16px rgba(47, 37, 32, 0.16)',
  }

  const clearButtonStyle = {
    padding: '10px 18px',
    border: '2px solid #2f2520',
    borderRadius: 999,
    background: '#fff8ec',
    color: '#7a4b2a',
    fontSize: 15,
    fontWeight: 800,
    cursor: comments.length ? 'pointer' : 'not-allowed',
    opacity: comments.length ? 1 : 0.48,
    transform: isClearHovered && comments.length ? 'scale(1.06)' : 'none',
    transformOrigin: 'center',
    transition: 'transform 160ms ease, box-shadow 160ms ease',
    boxShadow:
      isClearHovered && comments.length
        ? '0 12px 22px rgba(47, 37, 32, 0.24)'
        : '0 8px 16px rgba(47, 37, 32, 0.16)',
  }

  return (
    <section
      style={{
        minHeight: '100svh',
        padding: '88px 8vw',
        boxSizing: 'border-box',
        background:
          'linear-gradient(180deg, #efe4d1 0%, #f7f1e6 28%, #fbf8f1 100%)',
        color: '#2f2520',
      }}
    >
      <div
        style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: '34px',
          border: '2px dashed rgba(47, 37, 32, 0.35)',
          borderRadius: 24,
          background: 'rgba(255, 250, 242, 0.9)',
          boxShadow: '0 20px 40px rgba(47, 37, 32, 0.08)',
          textAlign: 'left',
        }}
      >
        <h2
          style={{
            margin: '0 0 20px',
            fontSize: 'clamp(2rem, 3vw, 3rem)',
            lineHeight: 1.05,
            fontWeight: 800,
            color: '#2f2520',
            textAlign: 'center',
          }}
        >
          Now is your turn.
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'grid',
            gap: 14,
          }}
        >
          <textarea
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
            placeholder="What possible solutions can you think of? What the broader society could do? Or, what can we do as individuals to resolve the issue?..."
            rows={5}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              resize: 'vertical',
              padding: '14px 16px',
              border: '2px solid rgba(47, 37, 32, 0.25)',
              borderRadius: 14,
              background: '#fffaf2',
              color: '#2f2520',
              font: 'inherit',
              lineHeight: 1.45,
              outlineColor: '#7a4b2a',
            }}
          />

          <div
            style={{
              justifySelf: 'end',
              display: 'flex',
              gap: 10,
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            }}
          >
            <button
              type="button"
              onClick={handleClearComments}
              onMouseEnter={() => setIsClearHovered(true)}
              onMouseLeave={() => setIsClearHovered(false)}
              onFocus={() => setIsClearHovered(true)}
              onBlur={() => setIsClearHovered(false)}
              style={clearButtonStyle}
              disabled={!comments.length}
            >
              Clear Comments
            </button>

            <button
              type="submit"
              onMouseEnter={() => setIsSubmitHovered(true)}
              onMouseLeave={() => setIsSubmitHovered(false)}
              onFocus={() => setIsSubmitHovered(true)}
              onBlur={() => setIsSubmitHovered(false)}
              style={submitButtonStyle}
            >
              Submit
            </button>
          </div>
        </form>

        <div
          style={{
            display: 'grid',
            gap: 12,
            marginTop: 28,
          }}
        >
          {comments.map((comment) => (
            <article
              key={comment.id}
              style={{
                padding: '14px 16px',
                border: '1px solid rgba(47, 37, 32, 0.18)',
                borderRadius: 14,
                background: 'rgba(255, 255, 255, 0.62)',
                color: '#5b4635',
                lineHeight: 1.55,
                overflowWrap: 'anywhere',
              }}
            >
              {comment.text}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

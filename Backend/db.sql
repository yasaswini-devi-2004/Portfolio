CREATE TABLE feedback (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  answer_design TEXT,
  answer_content TEXT,
  answer_usability TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

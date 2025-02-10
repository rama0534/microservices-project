CREATE TABLE students (
                          id SERIAL PRIMARY KEY,
                          name VARCHAR(50) NOT NULL,
                          score INT CHECK (score >= 0 AND score <= 100),
                          grade CHAR(1) CHECK (grade IN ('A', 'B', 'C', 'D', 'F'))
);


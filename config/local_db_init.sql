DROP DATABASE IF EXISTS whiteboard_dev;
CREATE DATABASE whiteboard_dev;

\c whiteboard_dev;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  USERNAME VARCHAR(100) UNIQUE NOT NULL,
  EMAIL VARCHAR(200) UNIQUE NOT NULL,
  PASSWORD VARCHAR(100) NOT NULL,
  CREATED TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  EDITED TIMESTAMP,
  DELETED TIMESTAMP
);

CREATE TABLE posts (
  ID SERIAL PRIMARY KEY,
  AUTHOR INTEGER REFERENCES USERS ON DELETE CASCADE,
  TITLE VARCHAR(1000) NOT NULL,
  BODY VARCHAR NOT NULL,
  CREATED TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  EDITED TIMESTAMP,
  DELETED TIMESTAMP
);

CREATE TABLE comments (
  ID SERIAL PRIMARY KEY,
  POST INTEGER REFERENCES POSTS ON DELETE CASCADE,
  AUTHOR INTEGER REFERENCES USERS ON DELETE CASCADE,
  CONTENT VARCHAR,
  CREATED TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  EDITED TIMESTAMP,
  DELETED TIMESTAMP
);

INSERT INTO users (username, email, password)
  VALUES ('admiral-faker', 'fakeemail@fake.com', 'password');

INSERT INTO posts (author, title, body)
  VALUES (1, 'test title', 'test body');

INSERT INTO comments (post, author, content)
  VALUES (1, 1, 'great post!');
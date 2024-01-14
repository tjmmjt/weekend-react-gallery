CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Dane', 'Photo of the goat taken at Glacier National Park.')
('/images/elk_square.jpeg', 'Elk', 'Photo of an Elk.')
('/images/mule_deer.jpeg', 'Mule Deer', 'Photo of a Mule Deer.');
  
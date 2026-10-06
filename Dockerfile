FROM nginx:alpine

COPY index.html about.html bordtennis.html Cat.jpeg script.js style.css /usr/share/nginx/html/
COPY src/output.css /usr/share/nginx/html/src/output.css
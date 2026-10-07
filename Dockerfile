FROM nginx:alpine

COPY index.html script.js style.css /usr/share/nginx/html/
COPY src/output.css /usr/share/nginx/html/src/output.css
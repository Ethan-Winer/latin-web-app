FROM node:18.16.0 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:1.18.0

COPY --from=node /app/dist/frontend /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080:8080
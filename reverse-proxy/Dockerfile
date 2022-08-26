FROM nginx:1.18.0

# COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf

# RUN mkdir /etc/nginx/ssl

# WORKDIR /etc/ssl/private

# RUN openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem -subj "/C=US/ST=Ohio/L=Columbus/CN=127.0.0.1/emailAddress=ethan.m.winer@gmail.com"

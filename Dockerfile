FROM node:20-alpine as build 
#LTS 20

WORKDIR /app
COPY package.json yarn.lock ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

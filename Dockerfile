FROM node:18-alpine as builder

WORKDIR /print/
COPY . .

RUN npm config set registry https://registry.npmmirror.com && \
    npm install -g pnpm && \
    pnpm config set registry https://registry.npmmirror.com && \
    pnpm install --frozen-lockfile && pnpm build

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /print/dist /dist

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

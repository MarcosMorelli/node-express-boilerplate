FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml ./ 

FROM base AS dev-deps
RUN pnpm install --frozen-lockfile

FROM dev-deps AS test
COPY ./ ./
CMD [ "npm", "run", "test" ]

FROM base AS prod-deps
RUN pnpm install --prod --frozen-lockfile

FROM prod-deps
COPY src/ src/
CMD [ "node", "src/index.js" ]
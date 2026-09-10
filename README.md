# Celebrar Catalog

Catálogo web da Celebrar Confeitaria: uma vitrine online onde o cliente navega,
monta uma cesta e envia o pedido pelo WhatsApp. Sem carrinho, checkout ou
pagamento online.

## Stack

- Backend: Java 25, Spring Boot 4.1.1, Spring Data JPA, PostgreSQL 16, Flyway
- Frontend: React + TypeScript + Vite

## Subir o ambiente local

### Opção 1 — Postgres + backend via Docker

```bash
docker compose up --build
```

O Flyway aplica as migrations (`V1__create_tables.sql` e `V2__seed_data.sql`)
automaticamente quando o backend sobe. A API fica disponível em
`http://localhost:8080`.

```bash
curl http://localhost:8080/api/produtos
```

### Opção 2 — só o Postgres via Docker, backend pelo VS Code

```bash
docker compose up postgres
```

```bash
cd backend
./mvnw spring-boot:run
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Abre em `http://localhost:5173` e consome `/api/produtos` através do proxy do
Vite (`vite.config.ts`) para `http://localhost:8080` — não precisa configurar
CORS no backend.

## Migrations

As migrations rodam automaticamente na subida do backend (Flyway integrado ao
Spring Boot, `spring-boot-starter-flyway`). Para inspecionar o estado das
migrations manualmente:

```bash
cd backend
./mvnw flyway:info
```

## Endpoints disponíveis nesta fase

- `GET /api/categorias`
- `GET /api/produtos` (filtro opcional `?categoriaId=`)
- `GET /api/cestas`

Todos são públicos e somente leitura.

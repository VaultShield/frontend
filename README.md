<h1 align="center" > VaultShield</h1>
<h3 align="center"> Frontend</h3>



First, clone the repository.

Second, install the dependecies:


```bash
yarn install
```
`or`
```bash
npm install
```

Finally, run the development server:

```bash
yarn run dev
```
`or`
```bash
npm run dev
```

Create a .env.local file and put in:

```bash
VITE_SECRET_KEY=
VITE_URL=http://localhost:8080/
VITE_REGISTER_URL=api/auth/register
VITE_LOGIN_URL=api/auth/login
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.


## Development technologies:

- React + Vite
- Typescript
- CSS + Tailwind
This project is based on the [Tesla e-commerce](https://shop.tesla.com/category/apparel) site.

## Getting Started
1. Clone the repository.    
2. Have [pnpm](https://pnpm.io/installation) installed.   
3. Install dependencies using `pnpm install`.   
4. Copy `.env.template` to `.env` and setup the environment variables.   
5. Run `docker-compose up -d`.   
6. Run `prisma` migrations with `pnpm dlx prisma migrate dev` and `pnpm dlx prisma generate`.    
7. Execute seed with `pnpm seed`.   
8. Run project `pnpm dev`.   

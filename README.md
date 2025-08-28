# Luxe79 Backend (Strapi)

A Strapi-based backend API for the Luxe79 project.

## 🌐 Deployment

- **Production**: [https://stylish-paradise-12daf59170.strapiapp.com](https://stylish-paradise-12daf59170.strapiapp.com)
- **Local Development**: [http://localhost:1337](http://localhost:1337)

## 🚀 Local Development Setup

### Prerequisites

- Node.js (>=18.0.0 <=22.x.x)
- npm (>=6.0.0) or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd luxe79-backdoor
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run develop
   # or
   yarn develop
   ```

4. **Access the application**
   - Admin Panel: [http://localhost:1337/admin](http://localhost:1337/admin)
   - API: [http://localhost:1337/api](http://localhost:1337/api)

### Available Scripts

- `npm run develop` - Start development server with auto-reload
- `npm run start` - Start production server
- `npm run build` - Build admin panel for production
- `npm run console` - Open Strapi console
- `npm run deploy` - Deploy to Strapi Cloud

## 🛠️ Tech Stack

- **Framework**: Strapi v5.20.0
- **Database**: SQLite (better-sqlite3)
- **Runtime**: Node.js with TypeScript
- **UI Framework**: React 18

## � Project Structure

```
├── config/          # Configuration files
├── database/        # Database files and migrations
├── public/          # Static files and uploads
├── src/            # Source code
│   ├── admin/      # Admin customizations
│   ├── api/        # API routes and controllers
│   └── components/ # Reusable components
└── types/          # TypeScript type definitions
```

## 🔧 Configuration

The application uses environment-based configuration. Key configuration files:

- `config/database.ts` - Database configuration
- `config/server.ts` - Server configuration
- `config/admin.ts` - Admin panel configuration
- `config/middlewares.ts` - Middleware configuration

## 📚 Resources

- [Strapi Documentation](https://docs.strapi.io)
- [Strapi Cloud](https://cloud.strapi.io)
- [API Reference](https://docs.strapi.io/dev-docs/api/rest)

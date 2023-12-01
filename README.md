# FarmByte Assessment

## Setup

### Laravel

Running the composer install

```bash
# Running the composer install
composer install

# Copy .env
cp .env.example .env

# Running the migration after change the DB details in the .env
php artisan migrate
```

### Usage

```bash
# Create a .env file
PORT=5001
API_ENDPOINT="laravel_endpoint/api/tasks"

# Running the nodejs
npm run dev
```
# List all recipes
_default:
    @{{ just_executable() }} --list

# Build all assets etc
build:
    npm run build

# Run the development server locally on port 3000
run:
    npm start

# 🏠 Samsung Washing Machine Product Catalog

A modern, responsive React application showcasing Samsung washing machines with advanced filtering, search, and product management capabilities. Built with TypeScript, Vite, and Tailwind CSS, featuring a robust architecture with comprehensive testing and CI/CD pipeline.

## 🚀 Features

### **Product Management**

- **Product Catalog**: Display washing machines with detailed specifications
- **Product Cards**: Rich product information including model, features, capacity, dimensions, energy class, and pricing
- **Product Selection**: Interactive product selection with visual feedback
- **Load More**: Pagination support for large product catalogs

### **Advanced Filtering System**

- **Multi-criteria Filtering**: Filter by functions, energy class, capacity, and sorting options
- **Real-time Search**: Debounced search with intelligent suggestions
- **Smart Search**: Search across product models, names, features, and full titles
- **Dynamic Results**: Live filtering with instant product count updates

### **Search Capabilities**

- **Full-text Search**: Search through complete product information
- **Smart Suggestions**: Context-aware search suggestions
- **Debounced Input**: Optimized search performance with 300ms delay
- **Multi-language Support**: Polish and English search terms

### **User Experience**

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Error Handling**: Comprehensive error boundaries with user-friendly fallbacks
- **Loading States**: Visual feedback during search and filtering operations

## 🏗️ Architecture

### **Component Structure**

```
src/
├── components/
│   ├── ErrorBoundary/          # Error handling components
│   ├── filters/                # Filtering system
│   │   ├── components/         # Filter UI components
│   │   ├── config/            # Filter configuration
│   │   ├── hooks/             # Custom hooks for filters
│   │   ├── types/             # TypeScript interfaces
│   │   └── utils/             # Filtering utilities
│   ├── layout/                 # Layout components
│   ├── products/               # Product management
│   │   ├── components/        # Product UI components
│   │   ├── hooks/             # Product-related hooks
│   │   ├── types/             # Product types
│   │   └── utils/             # Product utilities
│   ├── header/                 # Header component
│   └── footer/                 # Footer component
├── data/                       # Static data and interfaces
├── test/                       # Test setup and utilities
└── assets/                     # Images and static resources
```

### **State Management**

- **React Hooks**: Custom hooks for filters, products, and UI state
- **Local State**: Component-level state management with useState
- **Callback Optimization**: useCallback for performance optimization
- **Memoization**: React.memo for component optimization

### **Data Flow**

```
User Input → Filter Hooks → Filter Utils → Product Filtering → UI Update
     ↓              ↓            ↓            ↓            ↓
Search Bar → useFilters → filter.utils → Products → Re-render
```

## 🛠️ Technology Stack

### **Frontend Framework**

- **React 19.1.1**: Latest React with concurrent features
- **TypeScript 5.8**: Full type safety and modern JavaScript features
- **Vite 7.1**: Lightning-fast build tool and dev server

### **Styling & UI**

- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Custom Design System**: Samsung-inspired color palette and typography
- **Responsive Grid**: CSS Grid and Flexbox for modern layouts
- **Custom Components**: Reusable UI components with consistent styling

### **Development Tools**

- **ESLint 9.33**: Code quality and consistency
- **Prettier 3.2**: Code formatting
- **Husky 9.0**: Git hooks for code quality
- **lint-staged**: Pre-commit code quality checks

### **Testing Framework**

- **Vitest 2.1**: Fast unit testing framework
- **Testing Library**: React component testing utilities
- **jsdom**: DOM environment for testing
- **Coverage Reports**: Test coverage analysis

## 🧪 Testing

### **Test Coverage**

- **Unit Tests**: Component and utility function testing
- **Integration Tests**: Hook and filter system testing
- **Test Utilities**: Custom test setup and helpers
- **Coverage Reports**: Comprehensive test coverage analysis

### **Test Commands**

```bash
npm run test          # Run tests in watch mode
npm run test:ui       # Run tests with UI interface
npm run test:run      # Run tests once
npm run test:unit     # Run unit tests only
npm run test:coverage # Generate coverage report
```

### **Test Structure**

```
src/components/*/__tests__/
├── ComponentName.component.test.tsx
├── hookName.hook.test.ts
└── utilityName.utils.test.ts
```

## 🔧 Development Workflow

### **Code Quality**

- **ESLint Configuration**: Strict TypeScript and React rules
- **Prettier Formatting**: Consistent code style
- **Type Checking**: Full TypeScript compilation checks
- **Pre-commit Hooks**: Automatic code quality checks

### **Available Scripts**

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run preview       # Preview production build
npm run lint          # Run ESLint
npm run lint:fix      # Fix ESLint issues
npm run format        # Format code with Prettier
npm run type-check    # TypeScript type checking
npm run commit        # Interactive commit with conventional commits
```

### **Development Server**

- **Port**: 3000
- **Hot Reload**: Instant updates during development
- **Source Maps**: Debugging support
- **Host**: Available on all network interfaces

## 📝 Commit Convention

### **Conventional Commits**

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

### **Commit Types**

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes
- `build`: Build system changes
- `revert`: Reverting previous commits

### **Commit Format**

```
type(scope): description

[optional body]

[optional footer]
```

### **Examples**

```
feat(filters): add advanced search functionality
fix(products): resolve product card rendering issue
docs(readme): update project documentation
refactor(hooks): optimize useFilters hook performance
```

## 🚀 CI/CD Pipeline

### **GitHub Actions**

Automated CI/CD pipeline running on every push and pull request to the main branch.

### **Pipeline Stages**

1. **Code Checkout**: Clone repository
2. **Node.js Setup**: Install Node.js 20.x with caching
3. **Dependencies**: Install npm packages
4. **Type Checking**: TypeScript compilation validation
5. **Linting**: ESLint code quality checks
6. **Testing**: Unit test execution
7. **Formatting**: Prettier code style validation
8. **Build**: Production build verification

### **Workflow File**

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline
on: [push, pull_request]
jobs:
  test-and-lint:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Setup Node.js 20.x
      - Install dependencies
      - Run TypeScript type check
      - Run ESLint
      - Run tests
      - Run Prettier check
      - Build project
```

## 🎨 Design System

### **Color Palette**

- **Primary**: Green (#009949) - Samsung brand color
- **Secondary**: Dark Blue (#1428A0) - Accent color
- **Text**: Black (#000000) - Primary text
- **Background**: Light Gray (#F8F8F8) - Page background
- **Light Text**: Gray (#767676) - Secondary text
- **Accent**: Light Blue (#007AFF) - Interactive elements

### **Typography**

- **Font Family**: SamsungOne, system-ui, sans-serif
- **Font Sizes**: Responsive scale from 0.75rem to 1.5rem
- **Font Weights**: Regular, medium, bold
- **Line Heights**: Optimized for readability

### **Spacing & Layout**

- **Grid System**: Responsive grid with 1-4 columns
- **Spacing Scale**: Consistent spacing using Tailwind's scale
- **Container**: Max-width containers with responsive padding
- **Breakpoints**: Mobile-first responsive design

## 📱 Responsive Design

### **Breakpoints**

- **Mobile**: < 640px (default)
- **Small**: ≥ 640px (sm:)
- **Medium**: ≥ 768px (md:)
- **Large**: ≥ 1024px (lg:)

### **Grid Layouts**

- **Mobile**: Single column layout
- **Tablet**: Two-column grid
- **Desktop**: Three-column grid for products, four-column for filters

### **Component Adaptability**

- **Responsive Images**: Optimized for different screen sizes
- **Flexible Typography**: Scalable font sizes
- **Adaptive Spacing**: Context-aware spacing
- **Touch-friendly**: Mobile-optimized interactions

## 🔍 Search & Filtering

### **Search Features**

- **Debounced Search**: 300ms delay for performance
- **Full-text Search**: Search across all product fields
- **Smart Suggestions**: Context-aware search recommendations
- **Multi-language**: Polish and English search terms

### **Filter Categories**

- **Sorting**: Popularity, Price, Capacity
- **Functions**: AddWash™, AI Control, Inverter Motor, Electronic Display
- **Energy Class**: A, B, C, D efficiency ratings
- **Capacity**: 8kg, 9kg, 10.5kg options

### **Filter Logic**

- **Combined Filters**: Multiple filter criteria support
- **Real-time Updates**: Instant filter result updates
- **State Persistence**: Filter state maintained during navigation
- **Reset Functionality**: Easy filter reset option

## 🎯 Product Data Structure

### **Product Interface**

```typescript
interface Product {
  id: string;
  name: string;
  model: string;
  features: string[];
  capacity: number;
  dimensions: {
    height: number;
    depth: number;
    width: number;
  };
  energyClass: string;
  price: {
    amount: number;
    currency: string;
    validFrom: string;
    validTo: string;
    installment: {
      monthlyAmount: number;
      months: number;
    };
  };
  image: string;
  buttonColor?: 'darkBlue' | 'dark';
}
```

### **Sample Products**

- **6 Washing Machines**: Different models and specifications
- **Varied Capacities**: 8kg, 9kg, 10.5kg options
- **Energy Classes**: A, B, C, D efficiency ratings
- **Feature Combinations**: Various feature sets for filtering

## 🚀 Performance Optimizations

### **React Optimizations**

- **React.memo**: Component memoization
- **useCallback**: Stable function references
- **useMemo**: Computed value caching
- **Lazy Loading**: Component lazy loading support

### **Build Optimizations**

- **Vite**: Fast development and optimized builds
- **Code Splitting**: Automatic vendor chunk separation
- **Source Maps**: Development debugging support
- **Tree Shaking**: Unused code elimination

### **Runtime Optimizations**

- **Debounced Search**: Reduced API calls
- **Efficient Filtering**: Optimized filter algorithms
- **Virtual Scrolling**: Large list performance
- **Image Optimization**: Responsive image loading

## 🔧 Development Setup

### **Prerequisites**

- **Node.js**: Version 20.x or higher
- **npm**: Version 9.x or higher
- **Git**: Version control system

### **Installation**

```bash
# Clone repository
git clone <repository-url>
cd zadanie-cheil

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Environment Setup**

```bash
# Development
npm run dev          # http://localhost:3000

# Production build
npm run build        # Creates dist/ folder
npm run preview      # Preview production build

# Code quality
npm run lint         # ESLint check
npm run format       # Prettier formatting
npm run type-check   # TypeScript validation
```

## 📊 Project Statistics

### **Code Metrics**

- **Lines of Code**: ~2,000+ lines
- **Components**: 15+ React components
- **Custom Hooks**: 5+ custom hooks
- **Test Files**: 10+ test files
- **TypeScript**: 100% type coverage

### **File Structure**

- **Source Files**: 50+ TypeScript/React files
- **Configuration**: 10+ config files
- **Assets**: Images and static resources
- **Documentation**: Comprehensive README and docs

## 🤝 Contributing

### **Development Guidelines**

1. **Fork** the repository
2. **Create** a feature branch
3. **Follow** the commit convention
4. **Write** tests for new features
5. **Ensure** all tests pass
6. **Submit** a pull request

### **Code Standards**

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality rules enforced
- **Prettier**: Consistent code formatting
- **Testing**: Minimum 80% test coverage

### **Pull Request Process**

1. **Code Review**: All changes reviewed
2. **CI Checks**: Automated tests and linting
3. **Type Safety**: TypeScript compilation check
4. **Build Verification**: Production build validation

## 📄 License

This project is private and proprietary. All rights reserved.

## 👥 Team

- **Developer**: [Your Name]
- **Project**: Samsung Washing Machine Catalog
- **Technology**: React + TypeScript + Vite
- **Architecture**: Modern React with custom hooks and components

---

**Built with ❤️ using React, TypeScript, and Vite**

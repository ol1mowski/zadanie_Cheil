# 🚀 Conventional Commits - Konwencja Commitów

## 📋 Typy Commitów

| Typ        | Opis                           | Przykład                                |
| ---------- | ------------------------------ | --------------------------------------- |
| `feat`     | Nowa funkcjonalność            | `feat: add user authentication`         |
| `fix`      | Poprawka błędu                 | `fix: resolve navigation bug`           |
| `docs`     | Zmiany w dokumentacji          | `docs: update API documentation`        |
| `style`    | Zmiany formatowania            | `style: format code with prettier`      |
| `refactor` | Refaktoryzacja kodu            | `refactor: extract validation logic`    |
| `perf`     | Poprawa wydajności             | `perf: optimize image loading`          |
| `test`     | Dodanie/poprawa testów         | `test: add unit tests for user service` |
| `chore`    | Zadania konserwacyjne          | `chore: update dependencies`            |
| `ci`       | Zmiany w CI/CD                 | `ci: add GitHub Actions workflow`       |
| `build`    | Zmiany w systemie budowania    | `build: configure webpack optimization` |
| `revert`   | Cofnięcie poprzedniego commita | `revert: feat: add user auth`           |

## 🎯 Format Commita

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Przykłady:

#### Prosty commit:

```bash
feat: add user login functionality
```

#### Commit ze scope:

```bash
feat(auth): implement JWT token system
```

#### Commit z body:

```bash
feat: add dark mode support

This commit adds a new dark theme option that users can toggle
in the settings panel. The theme persists across sessions and
automatically adapts to system preferences.
```

#### Commit z footer:

```bash
fix: resolve memory leak in image gallery

Closes #123
Breaking Change: removes old image loading method
```

## 🛠️ Jak używać:

### 1. Automatyczny szablon:

```bash
git commit
# Otworzy się edytor z szablonem
```

### 2. Ręczne formatowanie:

```bash
git commit -m "feat: add new feature"
git commit -m "fix: resolve critical bug"
git commit -m "docs: update installation guide"
```

### 3. Commit z body:

```bash
git commit -m "feat: implement user dashboard" -m "This adds a comprehensive dashboard with user statistics, recent activity, and quick actions."
```

## ✅ Walidacja

Każdy commit jest automatycznie sprawdzany przez:

- **commitlint** - sprawdza format wiadomości
- **Husky** - blokuje nieprawidłowe commity

## 🚫 Przykłady błędnych commitów:

```bash
# ❌ Brak typu
git commit -m "update code"

# ❌ Nieprawidłowy typ
git commit -m "update: fix bug"

# ❌ Za długi opis
git commit -m "feat: this is a very long description that exceeds the maximum allowed length of 72 characters"

# ❌ Wielkie litery w opisie
git commit -m "feat: Add New Feature"
```

## 🎉 Korzyści:

- **Automatyczne generowanie changelogów**
- **Lepsze zarządzanie wersjami**
- **Czytelna historia projektu**
- **Automatyczne deploymenty**
- **Lepsze code review**

## 📚 Więcej informacji:

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Angular Commit Guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format)

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nowa funkcjonalność
        'fix', // Poprawka błędu
        'docs', // Zmiany w dokumentacji
        'style', // Zmiany formatowania (nie wpływają na działanie)
        'refactor', // Refaktoryzacja kodu
        'perf', // Poprawa wydajności
        'test', // Dodanie lub poprawa testów
        'chore', // Zadania konserwacyjne
        'ci', // Zmiany w CI/CD
        'build', // Zmiany w systemie budowania
        'revert', // Cofnięcie poprzedniego commita
      ],
    ],
    'type-case': [2, 'always', 'lowerCase'],
    'type-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lowerCase'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
  },
};

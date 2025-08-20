import type { FilterConfig } from '@/components/filters/types/filters.types';

export const filterConfigs: FilterConfig[] = [
  {
    key: 'sortBy',
    label: 'Sortuj po:',
    options: [
      { value: 'all', label: 'Wszystkie' },
      { value: 'price', label: 'Cena' },
      { value: 'capacity', label: 'Pojemność' },
    ],
    getDisplayValue: (value: string) => {
      switch (value) {
        case 'popularity':
          return 'Popularność';
        case 'price':
          return 'Cena';
        case 'capacity':
          return 'Pojemność';
        case 'all':
          return 'Wszystkie';
        default:
          return 'Wybierz';
      }
    },
  },
  {
    key: 'functions',
    label: 'Funkcje:',
    options: [
      { value: 'all', label: 'Wszystkie' },
      { value: 'addwash', label: 'Drzwi AddWash' },
      { value: 'ai-control', label: 'Panel AI Control' },
      { value: 'inverter', label: 'Silnik inwerterowy' },
      { value: 'display', label: 'Wyświetlacz elektroniczny' },
    ],
    getDisplayValue: (value: string) => {
      switch (value) {
        case 'all':
          return 'Pokaż Wszystkie';
        case 'addwash':
          return 'Drzwi AddWash';
        case 'ai-control':
          return 'Panel AI Control';
        case 'inverter':
          return 'Silnik inwerterowy';
        case 'display':
          return 'Wyświetlacz elektroniczny';
        default:
          return 'Wybierz';
      }
    },
  },
  {
    key: 'energyClass',
    label: 'Klasa energetyczna:',
    options: [
      { value: 'all', label: 'Wszystkie' },
      { value: 'A', label: 'A' },
      { value: 'B', label: 'B' },
      { value: 'D', label: 'D' },
    ],
    getDisplayValue: (value: string) => {
      switch (value) {
        case 'all':
          return 'Pokaż Wszystkie';
        case 'A':
          return 'A';
        case 'B':
          return 'B';
        case 'D':
          return 'D';
        default:
          return 'Wybierz';
      }
    },
  },
  {
    key: 'capacity',
    label: 'Pojemność:',
    options: [
      { value: 'all', label: 'Wszystkie' },
      { value: '9kg', label: '9kg' },
      { value: '8kg', label: '8kg' },
      { value: '10.5kg', label: '10.5kg' },
    ],
    getDisplayValue: (value: string) => {
      switch (value) {
        case 'all':
          return 'Pokaż wszystkie';
        case '9kg':
          return '9kg';
        case '8kg':
          return '8kg';
        case '10.5kg':
          return '10.5kg';
        default:
          return 'Wybierz';
      }
    },
  },
];

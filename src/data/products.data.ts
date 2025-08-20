export interface Product {
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

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Pralka',
    model: 'WW90T754ABT',
    features: [
      'Drzwi AddWash™',
      'Panel AI Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
    ],
    capacity: 9,
    dimensions: {
      height: 85,
      depth: 60,
      width: 55,
    },
    energyClass: 'A',
    price: {
      amount: 3199.0,
      currency: 'zł',
      validFrom: '2022-09-15',
      validTo: '2022-09-21',
      installment: {
        monthlyAmount: 53.31,
        months: 60,
      },
    },
    image: '/src/assets/waschMaschine.png',
  },
  {
    id: '2',
    name: 'Pralka',
    model: 'WW10T754ABT',
    features: [
      'Drzwi AddWash™',
      'Panel AI Control',
      'Silnik inwerterowy',
      'Funkcja parowa',
    ],
    capacity: 10.5,
    dimensions: {
      height: 85,
      depth: 60,
      width: 55,
    },
    energyClass: 'A',
    price: {
      amount: 3899.0,
      currency: 'zł',
      validFrom: '2022-09-15',
      validTo: '2022-09-21',
      installment: {
        monthlyAmount: 64.98,
        months: 60,
      },
    },
    image: '/src/assets/waschMaschine.png',
    buttonColor: 'dark',
  },
  {
    id: '3',
    name: 'Pralka',
    model: 'WW8T754ABT',
    features: [
      'Drzwi AddWash™',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
    ],
    capacity: 8,
    dimensions: {
      height: 85,
      depth: 60,
      width: 55,
    },
    energyClass: 'A',
    price: {
      amount: 2799.0,
      currency: 'zł',
      validFrom: '2022-09-15',
      validTo: '2022-09-21',
      installment: {
        monthlyAmount: 46.65,
        months: 60,
      },
    },
    image: '/src/assets/waschMaschine.png',
    buttonColor: 'dark',
  },
  {
    id: '4',
    name: 'Pralka',
    model: 'WW9T754ABT',
    features: [
      'Panel AI Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
      'Funkcja prania szybkiego',
    ],
    capacity: 9,
    dimensions: {
      height: 85,
      depth: 60,
      width: 55,
    },
    energyClass: 'B',
    price: {
      amount: 2899.0,
      currency: 'zł',
      validFrom: '2022-09-15',
      validTo: '2022-09-21',
      installment: {
        monthlyAmount: 48.32,
        months: 60,
      },
    },
    image: '/src/assets/waschMaschine.png',
  },
  {
    id: '5',
    name: 'Pralka',
    model: 'WW10T754ABT',
    features: [
      'Drzwi AddWash™',
      'Silnik inwerterowy',
      'Funkcja parowa',
      'Funkcja prania szybkiego',
    ],
    capacity: 10.5,
    dimensions: {
      height: 85,
      depth: 60,
      width: 55,
    },
    energyClass: 'B',
    price: {
      amount: 3599.0,
      currency: 'zł',
      validFrom: '2022-09-15',
      validTo: '2022-09-21',
      installment: {
        monthlyAmount: 59.98,
        months: 60,
      },
    },
    image: '/src/assets/waschMaschine.png',
  },
  {
    id: '6',
    name: 'Pralka',
    model: 'WW8T754ABT',
    features: [
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
      'Funkcja prania szybkiego',
    ],
    capacity: 8,
    dimensions: {
      height: 85,
      depth: 60,
      width: 55,
    },
    energyClass: 'C',
    price: {
      amount: 2499.0,
      currency: 'zł',
      validFrom: '2022-09-15',
      validTo: '2022-09-21',
      installment: {
        monthlyAmount: 41.65,
        months: 60,
      },
    },
    image: '/src/assets/waschMaschine.png',
  },
];

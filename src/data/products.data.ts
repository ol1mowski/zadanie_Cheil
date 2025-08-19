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
    model: 'WW90T754ABT',
    features: [
      'Drzwi AddWash™',
      'Panel AI Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
    ],
    capacity: 10.5,
    dimensions: {
      height: 85,
      depth: 60,
      width: 55,
    },
    energyClass: 'B',
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
    id: '3',
    name: 'Pralka',
    model: 'WW90T754ABT',
    features: [
      'Drzwi AddWash™',
      'Panel AI Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
    ],
    capacity: 8,
    dimensions: {
      height: 85,
      depth: 60,
      width: 55,
    },
    energyClass: 'C',
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
    id: '4',
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
    energyClass: 'D',
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
    id: '5',
    name: 'Pralka',
    model: 'WW90T754ABT',
    features: [
      'Drzwi AddWash™',
      'Panel AI Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
    ],
    capacity: 10.5,
    dimensions: {
      height: 85,
      depth: 60,
      width: 55,
    },
    energyClass: 'E',
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
    id: '6',
    name: 'Pralka',
    model: 'WW90T754ABT',
    features: [
      'Drzwi AddWash™',
      'Panel AI Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny',
    ],
    capacity: 8,
    dimensions: {
      height: 85,
      depth: 60,
      width: 55,
    },
    energyClass: 'F',
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
];

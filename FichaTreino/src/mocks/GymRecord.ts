export interface IGymRecordData {
  id: string;
  image?: string;
  name: string;
  weight?: number;
}

export const GymRecordData: IGymRecordData[] = [
  {
    id: '1',
    image: 'https://cdn-icons-png.flaticon.com/512/1753/1753487.png',
    name: 'Pulley Supinado',
    weight: 20,
  },
  {
    id: '2',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'Flexão com o Joelho',
    weight: 20,
  },
  {
    id: '3',
    name: 'Triceps Testa',
    weight: 20,
  },
];

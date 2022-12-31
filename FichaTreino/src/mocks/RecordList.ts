export interface IRecordListData {
  id: string;
  name: string;
  isActive?: boolean;
}

export const RecordListData: IRecordListData[] = [
  {
    id: '1',
    name: 'Segunda',
    isActive: true,
  },
  {
    id: '2',
    name: 'Terça',
    isActive: false,
  },
  {
    id: '2',
    name: 'Quarta',
    isActive: false,
  },
  {
    id: '2',
    name: 'Quinta',
    isActive: false,
  },
  {
    id: '2',
    name: 'Sexta',
    isActive: false,
  },
];

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
];

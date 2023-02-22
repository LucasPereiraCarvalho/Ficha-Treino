import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IGymRecordData {
  id: string;
  image?: string;
  name: string;
  weight?: number;
}

interface GymRecordProviderProps {
  children: React.ReactNode;
}

interface GymRecordContextValue {
  gymRecordData: IGymRecordData[];
  refatch: (id: string) => Promise<void>;
}

export const GymRecordContext = createContext<GymRecordContextValue>({
  gymRecordData: [],
  refatch: async () => {},
});

export function GymRecordContextProvider({ children }: GymRecordProviderProps): JSX.Element {
  const [gymRecordData, setGymRecordData] = useState<IGymRecordData[]>([]);

  const refatch = async (id: string): Promise<void> => {
    await AsyncStorage.getItem(id).then((result: string | null) => {
      if (result !== null) {
        setGymRecordData(JSON.parse(result));
      } else {
        setGymRecordData([]);
      }
    });
  };

  return (
    <GymRecordContext.Provider value={{ gymRecordData, refatch }}>
      {children}
    </GymRecordContext.Provider>
  );
}

import {api} from '../api';
import {PriceServiceReturn} from './types';

export default function anchorService(): PriceServiceReturn {
  const methods: PriceServiceReturn = {
    getPrices: async (): Promise<String> => {
      try {
        const anchor = await api.get<String>('/anchor');

        return anchor.data;
      } catch (err: any) {
        return err;
      }
    },
  };

  return methods;
}

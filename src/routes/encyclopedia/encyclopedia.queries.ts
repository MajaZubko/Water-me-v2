import { useQuery } from 'react-query';
import { get as getPlants } from '../../shared/services/api/plants';

export const useGetPlants = () => useQuery('get-plants', getPlants);

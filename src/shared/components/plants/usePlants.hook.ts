import { useDispatch, useSelector } from 'react-redux';

import { plantsActions, plantsSelectors } from '../../../modules/plants';
import { Plant } from '../../../modules/plants/plants.types';

type usePlantsReturn = {
  plants: Plant[];
  fetchPlants: () => void;
  addPlant: (plant: Plant) => void;
  deletePlant: (plant: Plant) => void;
  editPlant: (plant: Plant) => void;
};

export const usePlants = (): usePlantsReturn => {
  const dispatch = useDispatch();

  const plants = useSelector(plantsSelectors.selectPlants);
  const fetchPlants = () => dispatch(plantsActions.fetchPlants());
  const addPlant = (plant: Plant) => dispatch(plantsActions.addPlant(plant));
  const deletePlant = (plant: Plant) => dispatch(plantsActions.deletePlant(plant));
  const editPlant = (plant: Plant) => dispatch(plantsActions.editPlant(plant));

  return { plants, fetchPlants, editPlant, addPlant, deletePlant };
};

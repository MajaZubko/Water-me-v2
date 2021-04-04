import axios from 'axios';
import { PlantApiGetData } from './types';

const PLANTS_URL =
  'https://cdn.contentful.com/spaces/yv8g4hpnr52n/environments/master/entries?access_token=p_FdYJY-4nWY9tFxq0rhffYSIoxThZXblc_I5vyHWCM';

export const get = async () => {
  return await axios.get<PlantApiGetData>(PLANTS_URL).then((res) => {
    return res.data.items.map((item) => item.fields);
  });
};

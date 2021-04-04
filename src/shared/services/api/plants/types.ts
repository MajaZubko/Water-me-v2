export interface PlantApiGetData {
  items: {
    fields: {
      id: number;
      name: string;
      latinName?: string;
      waterNeeds: number;
      sunNeeds: string;
      height?: number;
      width?: number;
      propagation?: string;
      specialFeatures?: string;
    };
  }[];
}

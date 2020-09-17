declare module 'react-use-dimensions' {
  interface IUseDimensionsOptions {
    liveMeasure?: boolean;
  }
  
  export interface IDimensionValues {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  type DimensionsRef =
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;

  const useDimensions: (
    options: IUseDimensionsOptions
  ) => [DimensionsRef, IDimensionValues];

  export default useDimensions;
}

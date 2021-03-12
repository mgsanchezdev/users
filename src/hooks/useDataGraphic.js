const useDataGraphic = (data) => {
  const dataGraphic = data.map((d) => [d.time, d.percentage]);

  return [dataGraphic];
};

export default useDataGraphic;

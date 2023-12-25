export const NiftyStats = async () => {
  const url =
    "https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050&Identifier=NIFTY%2050";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ea1a025551mshd933f1c89a2f96ap1f8855jsn675752bf9bc1",
      "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
    },
  };

  const Comp = (data: any) => (
    <div style={{ color: "red" }}>{data?.data[0]?.lastPrice}</div>
  );

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return <Comp data={result} />;
  } catch (error) {
    console.error(error);
  }
};

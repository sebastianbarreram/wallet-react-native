const useAccount = () => {
  const currencyFormat = (number: number) => {
    return (
      '$' +
      Number(number)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };
  return { currencyFormat };
};

export default useAccount;
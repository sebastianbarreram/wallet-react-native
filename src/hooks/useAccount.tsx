const useAccount = () => {
  const currencyFormat = (number: number): string => {
    return '$' + number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };
  const dateFormat = (date: Date) => {
    const getDate = new Date(date);
    const day = getDate.getDate();
    const month = getDate.getMonth() + 1;
    const year = getDate.getUTCFullYear();
    var hours = getDate.getHours();
    var minutes = getDate.getMinutes();

    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const hou = hours < 10 ? '0' + hours : hours;
    const min = minutes < 10 ? '0' + minutes : minutes;
    var stringTime = hou + ':' + min + ' ' + ampm;

    return stringTime + ' - ' + day + '/' + month + '/' + year;
  };
  return { currencyFormat, dateFormat };
};

export default useAccount;

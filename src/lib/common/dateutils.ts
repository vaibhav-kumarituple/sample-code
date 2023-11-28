import moment from "moment";

export const formatDate = (date: any, format: string): string => {
  const formattedDate = moment(date).format(format);
  return formattedDate;
};

export const dateToGMT = (inputDate: string, inputDateFormat: string) => {
  const formattedDate = moment(inputDate, inputDateFormat).toDate();
  return formattedDate;
};

export const dateTimeFromNow = (value: string): string => {
  return value ? moment(value).fromNow() : "";
};

// console.log(formatDate(Date.now(),"YYYY-MM-DD"))

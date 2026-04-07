import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const mergeClasses = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const copyTextToClipboard = async (text: string) => {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
};

export const calculateYearsOfExperience = (
  startDate: string = "2022-03-01"
): string => {
  const start = new Date(startDate);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - start.getFullYear();
  const monthDiff = currentDate.getMonth() - start.getMonth();
  const dayDiff = currentDate.getDate() - start.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years -= 1;
  }

  return `${Math.max(years, 0)}+`;
};
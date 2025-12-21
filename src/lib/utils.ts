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

export const calculateYearsOfExperience = (startDate: string = "2022-03-11"): string => {
  const start = new Date(startDate);
  const currentDate = new Date();
  const years = currentDate.getFullYear() - start.getFullYear();
  const months = currentDate.getMonth() - start.getMonth();

  // Calculate total months
  const totalMonths = years * 12 + months;
  const totalYears = Math.floor(totalMonths / 12);

  return `${totalYears}+`;
};
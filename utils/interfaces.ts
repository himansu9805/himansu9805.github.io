import { Technology } from "./enums.ts";

export interface TimelineData {
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

export interface CloudData {
  src: string;
  alt: string;
}

export interface CardData {
  title: string;
  description: string;
  technologies: Technology[];
  startDate: string;
  endDate: string;
}

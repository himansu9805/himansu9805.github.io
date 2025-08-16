import { Technology } from "@/utils/enums";

export interface ITimelineData {
  title: string;
  subtitle: string;
  institution?: string;
  institution_logo?: string;
  start_date: string;
  end_date?: string;
  description: string;
}

export interface ITechnologyData {
  src: string;
  alt: string;
}

export interface ICardData {
  title: string;
  description: string;
  technologies: Technology[];
  startDate: string;
  endDate: string;
}

export interface INameData {
  language: string;
  name: string;
}

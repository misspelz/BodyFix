export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string
}
export interface ClassType {
  name: string;
  description?: string; // you add a question mark to make it optional
  image: string
}
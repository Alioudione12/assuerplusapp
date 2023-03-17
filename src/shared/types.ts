export enum SelectedPage{
    Accueil = "accueil",
    Services = "services",
    Tarifs = "tarifs",
    Contact = "contact",
  }

  export interface ServiceType{
    icon: JSX.Element;
    title: string;
    description: string
  }

  export interface TarifType{
    name:string;
    description?: string;
    image: string;
  }
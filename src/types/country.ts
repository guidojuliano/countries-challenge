interface Continent {
  name: string;
}

interface Languages {
  name: string;
}

export interface Country {
  name: string;
  code: string;
  latitude: number;
  longitude: number;
  emoji: string;
  capital: string;
  continent: Continent;
  currencies: string[];
  languages: Languages[];
}

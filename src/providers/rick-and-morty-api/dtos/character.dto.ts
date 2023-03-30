interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev?: string;
}

interface ICommon {
  name: string;
  url: string;
}

interface IResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ICommon;
  location: ICommon;
  image: string;
  episode: [string];
  url: string;
  created: string;
}

export interface ICharacters {
  info: IInfo;
  results: [IResult];
}

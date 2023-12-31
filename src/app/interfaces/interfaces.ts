export interface NavbarOptions {
  label: string;
  path: string;
}

export interface Images {
  url: string;
}

export interface Options {
  value: string;
  viewValue: string;
}

export interface OptionExtends extends Options {
  urls: string[];
}

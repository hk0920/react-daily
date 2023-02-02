import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      textDefault: string;
      pointColor: string;
    };
    device: {
      mobile: string;
      tablet: string;
      desktop_s: string;
    };
  }
}
import * as envalid from 'envalid';
import * as packageJson from '../package.json';
const { testOnly, str, num, bool } = envalid;

export interface IConfig {
  APP_NAME: string;
  APP_VERSION: string;
  OUTTA_BACKEND_URL: string;
  PORT: number;
  PRIMARY_CONTRAST_TEXT_COLOR: string;
  PRIMARY_DARK_COLOR: string;
  PRIMARY_LIGHT_COLOR: string;
  PRIMARY_MAIN_COLOR: string;
  SECONDARY_CONTRAST_TEXT_COLOR: string;
  SECONDARY_DARK_COLOR: string;
  SECONDARY_LIGHT_COLOR: string;
  SECONDARY_MAIN_COLOR: string;
}

export default envalid.cleanEnv(
  process.env,
  {
    NODE_ENV: str({
      default: 'development',
    }),
    APP_NAME: str({
      default: packageJson.name,
    }),
    APP_VERSION: str({
      default: packageJson.version,
    }),
    OUTTA_BACKEND_URL: str({
      default: testOnly('http://localhost:8080/'),
    }),
    PORT: num({
      default: 8080,
    }),
    PRIMARY_CONTRAST_TEXT_COLOR: str({
      default: '#fff',
    }),
    PRIMARY_DARK_COLOR: str({
      default: '#2c387e',
    }),
    PRIMARY_LIGHT_COLOR: str({
      default: '#6573c3',
    }),
    PRIMARY_MAIN_COLOR: str({
      default: '#3F51B5',
    }),
    SECONDARY_CONTRAST_TEXT_COLOR: str({
      default: '#000',
    }),
    SECONDARY_DARK_COLOR: str({
      default: '#a31545',
    }),
    SECONDARY_LIGHT_COLOR: str({
      default: '#ed4b82',
    }),
    SECONDARY_MAIN_COLOR: str({
      default: '#e91e63',
    }),
  }) as IConfig;

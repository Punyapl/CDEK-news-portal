declare module '*.scss' {
    type IClassNames = Record<string, string>

    const classNames: IClassNames
    export = classNames
}
declare module '*.css'

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.gif';

declare module '*.pdf';

declare const __IS_DEV__: boolean;
declare const __API_URL__: string
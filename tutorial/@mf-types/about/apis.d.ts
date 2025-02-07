
    export type RemoteKeys = 'about/Banner' | 'about/GetMoreInfoButton';
    type PackageType<T> = T extends 'about/GetMoreInfoButton' ? typeof import('about/GetMoreInfoButton') :T extends 'about/Banner' ? typeof import('about/Banner') :any;
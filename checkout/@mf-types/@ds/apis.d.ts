
    export type RemoteKeys = '@ds';
    type PackageType<T> = T extends '@ds' ? typeof import('@ds') :any;
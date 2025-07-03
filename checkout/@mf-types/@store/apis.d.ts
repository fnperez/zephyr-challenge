
    export type RemoteKeys = '@store';
    type PackageType<T> = T extends '@store' ? typeof import('@store') :any;
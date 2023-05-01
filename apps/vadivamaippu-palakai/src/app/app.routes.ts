import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () =>
            import('@brahmos/custom-studio').then((m) => m.CustomStudioModule),
    },
];

import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'studio',
        loadChildren: () =>
            import('@brahmos/custom-studio').then((m) => m.CustomStudioModule),
    },
];

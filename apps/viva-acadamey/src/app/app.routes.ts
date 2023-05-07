import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('@brahmos/viva-aca-shared').then(
                        (m) => m.VivaAcaSharedModule
                    ),
            },
        ],
    },
];

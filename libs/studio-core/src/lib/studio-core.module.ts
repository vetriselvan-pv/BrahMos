import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';
import { routes } from './studio-core.routes';
import { MenuBarListComponent } from './menu-bar-list/menu-bar-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { StudioBoardComponent } from './studio-board/studio-board.component';
import { StudioContainerComponent } from './studio-container/studio-container.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TemplateComponent } from './template/template.component';
import { ElementComponent } from './element/element.component';
import { SharedDirectivesModule } from '@brahmos/shared-directives';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatExpansionModule,
        MatCardModule,
        DragDropModule,
        SharedDirectivesModule,
    ],
    declarations: [
        MenuBarComponent,
        MenuBarListComponent,
        StudioBoardComponent,
        StudioContainerComponent,
        TemplateComponent,
        ElementComponent,
    ],
})
export class StudioCoreModule {}

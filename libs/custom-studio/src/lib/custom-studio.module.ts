import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBMenuBarComponent } from './menu-bar/menu-bar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { DBMenuBarListComponent } from './menu-bar-list/menu-bar-list.component';
import { DBStudioBoardComponent } from './studio-board/studio-board.component';
import { DBStudioContainerComponent } from './studio-container/studio-container.component';
import { DBTemplateComponent } from './template/template.component';
import { RouterModule } from '@angular/router';
import { routes } from './custom-studio.routes';
import { DBDroppableDirective } from './zone-service/dropable.directive';
import { DBDraggableDirective } from './zone-service/dragable.directive';
import { DragService } from './zone-service/drag.service';

@NgModule({
    imports: [
        CommonModule,
        MatExpansionModule,
        MatCardModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        DBMenuBarComponent,
        DBMenuBarListComponent,
        DBStudioBoardComponent,
        DBStudioContainerComponent,
        DBTemplateComponent,
        DBDroppableDirective,
        DBDraggableDirective,
    ],
    exports: [
        DBMenuBarComponent,
        DBMenuBarListComponent,
        DBStudioBoardComponent,
        DBStudioContainerComponent,
        DBTemplateComponent,
    ],
    providers: [DragService],
})
export class CustomStudioModule {}

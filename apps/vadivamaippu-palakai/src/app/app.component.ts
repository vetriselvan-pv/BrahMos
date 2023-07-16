import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    standalone: true,
    imports: [RouterModule],
    selector: 'brahmos-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'vadivamaippu-palakai';

    constructor() {
        const editorExtensionId = 'cgljefmnenafbhocfhcncjjoibohoojl';
        chrome.runtime.sendMessage(
            editorExtensionId,
            { openUrlInEditor: '' },
            function (response) {
                console.log('extension ', response);
            }
        );
        const port = chrome.runtime.connect(editorExtensionId);
        port.postMessage({ new: 'Data' });
        // chrome.tabs.query(
        //     { active: true, currentWindow: true },
        //     function (tabs) {
        //         chrome.tabs.sendMessage(
        //             tabs[0].id || 0,
        //             { action: 'open_dialog_box' },
        //             function (response) {
        //                 console.log('extension ', response);
        //             }
        //         );
        //     }
        // );
    }
}

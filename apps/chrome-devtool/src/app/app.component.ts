import { Component } from '@angular/core';

@Component({
    selector: 'brahmos-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'chrome-devtool';
    constructor() {
        this._initializeChromeOnMessageExternal();
        this._initializeChromeOnConnectExternal();
    }

    /**
     * @description
     */
    private _initializeChromeOnMessageExternal() {
        try {
            chrome.runtime.onMessageExternal.addListener(
                (request, sender, sendResponse) => {
                    console.log(request, sender);
                    sendResponse('Message received in dev tool angular page');
                }
            );
        } catch (error) {
            console.error(
                `chrome runtime not initiated --> onMessageExternal, ${error}`
            );
        }
    }
    /**
     * @description
     */
    private _initializeChromeOnConnectExternal() {
        try {
            chrome.runtime.onConnectExternal.addListener((port) => {
                console.log('devtool angular app', port);
                port.onMessage.addListener((request) => {
                    console.log(request);
                });
            });
        } catch (error) {
            console.error(
                `chrome runtime not initiated --> onConnectExternal, ${error}`
            );
        }
    }
}

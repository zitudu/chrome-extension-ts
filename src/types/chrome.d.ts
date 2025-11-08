// Chrome 扩展 API 类型声明
declare namespace chrome {
  // 添加你需要的 Chrome API 命名空间声明
  export namespace runtime {
    export interface MessageSender {
      tab?: chrome.tabs.Tab;
      frameId?: number;
      id?: string;
      url?: string;
      tlsChannelId?: string;
    }
    
    export interface Port {
      name: string;
      disconnect: () => void;
      postMessage: (message: any) => void;
      onDisconnect: chrome.events.Event<(port: Port) => void>;
      onMessage: chrome.events.Event<(message: any, port: Port) => void>;
    }
    
    export interface LastError {
      message?: string;
    }
    
    export const onMessage: chrome.events.Event<
      (request: any, sender: MessageSender, sendResponse: (response?: any) => void) => void
    >;
    export const onInstalled: chrome.events.Event<(details: {reason: string}) => void>;
    export const onMessageExternal: chrome.events.Event<(message: any, sender: MessageSender, sendResponse: (response?: any) => void) => void>;
  }
  
  export namespace tabs {
    export interface Tab {
      id?: number;
      index: number;
      pinned: boolean;
      highlighted: boolean;
      windowId: number;
      active: boolean;
      favIconUrl?: string;
      title?: string;
      url?: string;
    }
    
    export const sendMessage: (tabId: number, message: any, responseCallback?: (response: any) => void) => void;
    export const query: (queryInfo: any, callback: (result: Tab[]) => void) => void;
  }
  
  export namespace contextMenus {
    export interface OnClickData {
      menuItemId: string | number;
      parentMenuItemId?: string | number;
      mediaType?: string;
      linkUrl?: string;
      srcUrl?: string;
      pageUrl?: string;
      frameUrl?: string;
      selectionText?: string;
      editable: boolean;
      wasChecked?: boolean;
      checked?: boolean;
    }
    
    export const create: (createProperties: any, callback?: () => void) => void;
    export const onClicked: chrome.events.Event<(info: OnClickData, tab?: tabs.Tab) => void>;
  }
  
  export namespace events {
    export interface Event<T extends Function> {
      addListener(callback: T): void;
      removeListener(callback: T): void;
      hasListener(callback: T): boolean;
    }
  }
}

// 全局声明
declare const chrome: typeof chrome;

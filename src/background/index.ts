// 后台脚本
console.log('Background script loaded');

// 监听扩展安装事件
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
  
  // 创建右键菜单
  chrome.contextMenus.create({
    id: 'sampleContextMenu',
    title: 'Sample Context Menu',
    contexts: ['page'],
  });
});

// 简化消息监听器 - 移除复杂的类型注解
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received in background:', request);
  
  if (request && request.action === 'GET_DATA') {
    sendResponse({ data: 'Hello from background' });
  }
  
  return true;
});

// 简化右键菜单监听器
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'sampleContextMenu' && tab && tab.id) {
    chrome.tabs.sendMessage(tab.id, { action: 'CONTEXT_MENU_CLICKED' });
  }
});

// 导出空对象
export {};

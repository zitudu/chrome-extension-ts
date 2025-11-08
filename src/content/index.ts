// 内容脚本
console.log('Content script loaded');

// 简化消息监听器
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received in content script:', request);
  
  if (request && request.action === 'HIGHLIGHT_TEXT') {
    // 示例：高亮页面上的文本
    document.body.style.border = '2px solid red';
    setTimeout(() => {
      document.body.style.border = '';
    }, 2000);
    
    if (sendResponse) {
      sendResponse({ success: true });
    }
  }
  
  if (request && request.action === 'CONTEXT_MENU_CLICKED') {
    // 显示通知
    const notification = document.createElement('div');
    notification.textContent = 'Context menu clicked!';
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #4CAF50;
      color: white;
      padding: 10px;
      border-radius: 5px;
      z-index: 10000;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 3000);
  }
  
  return true;
});

// 页面加载完成后的操作
const onPageLoaded = () => {
  console.log('Page loaded - Chrome Extension Active');
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onPageLoaded);
} else {
  onPageLoaded();
}

export {};

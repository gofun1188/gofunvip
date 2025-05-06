// 輪播跑馬燈 JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // 輪播設置
  const rotationInterval = 4000; // 每 4 秒輪換一次
  
  // 設置頂部輪播
  setupRotation('top-rotation', rotationInterval);
  
  // 設置底部輪播（延遲 2 秒開始，製造錯落感）
  setTimeout(function() {
    setupRotation('bottom-rotation', rotationInterval);
  }, 2000);
  
  // 輪播功能設置
  function setupRotation(className, interval) {
    const container = document.querySelector('.' + className);
    if (!container) {
      console.log('找不到輪播容器: ' + className);
      return;
    }
    
    const items = container.querySelectorAll('div');
    if (items.length <= 1) {
      console.log('輪播項目太少: ' + className);
      return;
    }
    
    let currentIndex = 0;
    
    // 確保初始項目顯示
    items[currentIndex].classList.add('active');
    
    // 輪換函數
    function rotateText() {
      // 淡出當前項目
      items[currentIndex].classList.remove('active');
      
      // 計算下一項索引
      currentIndex = (currentIndex + 1) % items.length;
      
      // 淡入下一項
      items[currentIndex].classList.add('active');
    }
    
    // 設置定時器
    let rotateTimer = setInterval(rotateText, interval);
    
    // 滑鼠懸停時暫停輪播（可選）
    container.parentElement.addEventListener('mouseenter', function() {
      clearInterval(rotateTimer);
    });
    
    container.parentElement.addEventListener('mouseleave', function() {
      rotateTimer = setInterval(rotateText, interval);
    });
  }
});
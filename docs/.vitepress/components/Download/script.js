const visitChangeLog = () => {
  window.open('https://github.com/DearVa/Everywhere/releases', '_blank');
};

const downloadWindows = () => {
  window.location.href = 'https://ghproxy.sylinko.com/download?product=everywhere&os=win-x64&type=setup&version=latest';
};

export { visitChangeLog, downloadWindows };
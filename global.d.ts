declare global {
  interface Window {
    SpeechRecognition: ISpeechRecognition;
    webkitSpeechRecognition: ISpeechRecognition; // 对于支持webkit前缀的浏览器
  }
}

interface ISpeechRecognition {
  start(): void;
  stop(): void;
  onresult: (event: Event) => void;
}
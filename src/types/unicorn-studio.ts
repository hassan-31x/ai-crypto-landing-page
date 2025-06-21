declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init?: () => Promise<any>;
      addScene?: (config: {
        elementId: string;
        projectId: string;
        fps?: number;
        scale?: number;
        dpi?: number;
        lazyLoad?: boolean;
        fixed?: boolean;
        interactivity?: {
          mouse?: {
            disableMobile?: boolean;
          };
        };
      }) => Promise<any>;
      destroy?: () => void;
    };
  }
}

export {}; 
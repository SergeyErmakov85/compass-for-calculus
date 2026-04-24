export interface Screen {
  id: string;
  title: string;
  description: string;
  functionType?: 'function1' | 'function2' | 'both';
}

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  screens: Screen[];
  isUnlocked: boolean;
  progress: number;
}

export interface UserProgress {
  currentModule: number;
  currentScreen: number;
  completedScreens: string[];
  notes: Record<string, string>;
  bookmarks: string[];
}

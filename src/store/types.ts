import { Page } from '@/types/entities';

export interface RootState {
    version: string
}

export interface PagesState {
    pages: Page[]
}

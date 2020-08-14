export interface Page {
    id: number;
    name: string;
    url: string;
    containers: Container[];
}

export interface Container {
    id?: number;
    sections: any[];
    settings?: ContainerSettings;
}

interface ContainerSettings {
    background?: string;
    margin?: string;
    padding?: string;
}

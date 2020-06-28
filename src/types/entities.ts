export interface Page {
    id: number,
    name: string,
    url: string,
    containers: Array<Container>
}

export interface Container {
    id: number,
    sections: Array<any>,
    settings: ContainerSettings
}

interface ContainerSettings { 
    background?: string,
    margin?: string,
    padding?: string
}
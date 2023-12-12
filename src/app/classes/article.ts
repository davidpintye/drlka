export class Publication {
    authors: string[] = [];
    pubYear!: number;
    title!: string;
    journal!: string;
    impactFactor!: number;
    DOI!: string;

    constructor() {}
}